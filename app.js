const express=require("express");
app=express();
const mongoose=require("mongoose");
const bodyParser =require("body-parser");
const port=4000;

mongoose.connect("mongodb://localhost:27017/Sample",{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log("connected with mongoDB")
}).catch((err)=>{
    console.log(err)
})

const Todo= require("./todo")
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static("public"))
app.get("/",(req,res)=>{
    Todo.find()
    .then(result=>{
        res.render("index",{data:result})
        console.log(result);
    })
        
    
})

app.delete("/:id",(req,res)=>{
    Todo.findByIdAndDelete(req.params.id)
    .then(result=>{
        console.log(result);
    })
})

app.post("/",(req,res)=>{
    const todo= new Todo({
      todo: req.body.add
    })
    todo.save()
    .then(result =>{
        res.redirect("/")
    })
})

app.listen(port,()=>{
    console.log(`it is working on port: ${port}`);
});