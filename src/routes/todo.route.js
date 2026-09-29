import express from "express"
import { addTodo, deleteTodo, getSingleTodo, getTodos, updateTodo } from "../controllers/todo.controllers.js"
import protect from "../middlewares/jwtVerify.js"

const router = express.Router()

router.get("/todos",getTodos)
router.get("/todo/:id",getSingleTodo)
router.post("/todo/create",protect,addTodo)
router.put("/todo/:id",protect,updateTodo)
router.delete("/todo/:id",protect,deleteTodo)


export default router