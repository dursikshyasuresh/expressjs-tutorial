import Todo from "../models/todo.model.js"
import asyncHandler from "../utils/asyncHandler.js"
import ErrorMessage from "../utils/ErrorMessage.js"

// get todos: http://localhost:4000/api/todos
export const getTodos = asyncHandler(async (req, res) => {
  // accessing sort query from api: http://localhost:4000/api/todos?sort=newest/oldest
  const {sort,completed} = req.query
 
  // by default sort value is -1
  let sortOptions = {
    createdAt: -1
  }
  
  // if sort query is appiled in api and value is set oldest
  // change sort value to 1
  if(sort === "oldest"){
    sortOptions = {createdAt: 1}
  }

   // if sort query is appiled in api and value is set to newest
  // change sort value to -1
   if(sort === "newest"){
    sortOptions = {createdAt: -1}
  }

  let filterOptions = {}

  if(completed !== undefined){
    filterOptions.isCompleted = completed === "true"
  }


  // getting todo list from todo model of mongoDB
  const todos = await Todo.find(filterOptions).sort(sortOptions)
  const total = await Todo.countDocuments()   // return total number of todo from db

  res.status(200).json({
    success: true,
    message: "Todo fetched sucessfully.",
    count: total,
    todos,
  })
})

// get single todo
export const getSingleTodo = asyncHandler(async (req, res) => {
  // getting single todo from todo model of mongoDB
  const todo = await Todo.findById(req.params.id)

  if (!todo) throw ErrorMessage(404,"Todo not found!")
  

  res.status(200).json({
    success: true,
    message: "Todo fetched sucessfully.",
    todo,
  })
})

// post todo
export const addTodo = asyncHandler(async (req, res) => {
  const {title,isCompleted} = req.body

  if(!title) throw ErrorMessage(400,"Title is required!")
  
  // post new todo to mongoDB
  const todo = await Todo.create({
    title,
    isCompleted
  })

  res.status(201).json({
    success: true,
    message: "Todo added sucessfully.",
    todo,
  })
})

// delete todo
export const deleteTodo = asyncHandler(async (req, res) => {
  // getting single todo from todo model of mongoDB
  const todo = await Todo.findByIdAndDelete(req.params.id)

  if (!todo) throw ErrorMessage(404,"Todo not found!")

  res.status(200).json({
    success: true,
    message: "Todo deleted sucessfully.",
  })
})

// update todo
export const updateTodo = asyncHandler(async (req, res) => {
  // getting single todo from todo model of mongoDB
  const todo = await Todo.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    isCompleted: req.body.isCompleted,
  })

  if (!todo) throw ErrorMessage(404,"Todo not found!")

  res.status(200).json({
    success: true,
    message: "Todo updated sucessfully.",
  })
})
