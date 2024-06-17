import mongoose from "mongoose";
const subTodoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},


},{timestamps:true})

export const SubTodo = mongoose.model("SubTodo", subTodoSchema)