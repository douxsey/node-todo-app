import express from "express";
import { getTodos, getOneTodo, createTodo } from "../controllers/todos.controller";
import { auth } from "../middleware/auth";
import { logger } from "../middleware/logger";
let router = express.Router();

router.use(logger)
router.get('/todos', auth ,getTodos)
router.get('/todos/:id',auth, getOneTodo)
router.post('/todos', createTodo)

export default router;
