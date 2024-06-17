import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    createdBy:{type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    subTodos:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:SubTodo
    }]
},  { timestamps: true });


export const TodoModel = mongoose.model("Todo", todoSchema)