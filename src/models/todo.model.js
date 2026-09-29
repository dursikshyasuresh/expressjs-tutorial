import mongoose from "mongoose"

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true,"Title is required."],
        trim: true,
        minlength: [3,"Title must be atleast 3 characters."],
        maxlength: [100,"Title cannot exceed 100 charcters."]
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},{
    timestamps: true
})

const Todo = mongoose.model("Todo",todoSchema)

export default Todo

