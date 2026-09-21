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


// get single todo: http://localhost:4000/api/todo/:id
app.get("/api/todo/:id", async (req,res) => {
    // getting single todo from todo model of mongoDB
    const todo = await Todo.findById(req.params.id)
    
    res.json({
        success: true,
        message: "Todo fetched sucessfully.",
        todo
    })
})



// post todo: http://localhost:4000/api/todo/create
app.post("/api/todo/create", async (req,res) => {
    // post new todo to mongoDB
    const todo = await Todo.create({
        title: req.body.title,
        isCompleted: req.body.isCompleted
    })
    
    res.json({
        success: true,
        message: "Todo added sucessfully.",
        todo
    })
})


// delete single todo: http://localhost:4000/api/todo/:id
app.delete("/api/todo/:id", async (req,res) => {
    // getting single todo from todo model of mongoDB
     await Todo.findByIdAndDelete(req.params.id)
    
    res.json({
        success: true,
        message: "Todo deleted sucessfully."
    })
})



// update todo: http://localhost:4000/api/todo/:id
app.put("/api/todo/:id", async (req,res) => {
    // getting single todo from todo model of mongoDB
     await Todo.findByIdAndUpdate(req.params.id,{
        title: req.body.title,
        isCompleted: req.body.isCompleted
     })
    
    res.json({
        success: true,
        message: "Todo updated sucessfully."
    })
})





app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})