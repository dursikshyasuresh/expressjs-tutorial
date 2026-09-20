import express from "express"
import dbConnect from "./config/db.js"
import Todo from "./models/todo.model.js"

const app = express()

const PORT = 4000

// database connection
dbConnect()

// middleware
app.use(express.json())   // parse json data

// Home route: http://localhost:4000
app.get("/", (req,res) => {
    res.json({
        message: "Express server is running."
    })
})



// get todos: http://localhost:4000/api/todos
app.get("/api/todos", async (req,res) => {
    // getting todo list from todo model of mongoDB
    const todos = await Todo.find()
    
    res.json({
        success: true,
        message: "Todo fetched sucessfully.",
        todos
    })
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})