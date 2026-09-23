import Todo from "../models/todo.model.js"
import asyncHandler from "../utils/asyncHandler.js"

// get todos: http://localhost:4000/api/todos
export const getTodos = asyncHandler(async (req, res) => {
  // getting todo list from todo model of mongoDB
  const todos = await Todo.find()

  res.status(200).json({
    success: true,
    message: "Todo fetched sucessfully.",
    todos,
  })
})

// get single todo
export const getSingleTodo = asyncHandler(async (req, res) => {
  // getting single todo from todo model of mongoDB
  const todo = await Todo.findById(req.params.id)

  if (!todo) {
    return res.status(404).json({ message: "Todo not found!" })
  }

  res.status(200).json({
    success: true,
    message: "Todo fetched sucessfully.",
    todo,
  })
})

// post todo
export const addTodo = asyncHandler(async (req, res) => {
  // post new todo to mongoDB
  const todo = await Todo.create({
    title: req.body.title,
    isCompleted: req.body.isCompleted,
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
  await Todo.findByIdAndDelete(req.params.id)

  res.status(200).json({
    success: true,
    message: "Todo deleted sucessfully.",
  })
})

// update todo
export const updateTodo = asyncHandler(async (req, res) => {
  // getting single todo from todo model of mongoDB
  await Todo.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    isCompleted: req.body.isCompleted,
  })

  res.status(200).json({
    success: true,
    message: "Todo updated sucessfully.",
  })
})
