import express from "express";
import { getTodos, getTodoById, createTodo, updateTodo, deleteTodo, toggleTodoCompleted } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id/toggle", toggleTodoCompleted);
router.patch("/:id/toggle-completed", toggleTodoCompleted);

export default router;
