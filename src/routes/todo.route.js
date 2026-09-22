import express from "express"
import { addTodo, deleteTodo, getSingleTodo, getTodos, updateTodo } from "../controllers/todo.controllers.js"

const router = express.Router()

router.get("/todos",getTodos)
router.get("/todo/:id",getSingleTodo)
router.post("/todo/create",addTodo)
router.put("/todo/:id",updateTodo)
router.delete("/todo/:id",deleteTodo)


export default router