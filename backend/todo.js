   const {Schema,model} = require("mongoose");

   const todoSchema=new Schema({
       title: String,
       isCompleted: Boolean
   })


   const Todo=model('Todo',todoSchema)

   model.exports = Todo