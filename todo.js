const mongoose=require("mongoose")
const Schema = mongoose.Schema;
const todoschema = new Schema({
    todo:{
        type : String,
        required:true
    }
})

const todo =mongoose.model("yoyo",todoschema)
module.exports=todo;