import mongoose from "mongoose"

const todoSchema = mongoose.Schema({
    title: String,
    isCompleted: Boolean
})

const Todo = mongoose.model("Todo",todoSchema)

export default Todo