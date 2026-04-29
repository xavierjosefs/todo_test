import Todo from "../models/todo.model.js";

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: todos.length,
            data: todos,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error getting todos",
            error: error.message,
        });
    }
}

export const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error getting todo",
            error: error.message,
        });
    }
}

export const createTodo = async (req, res) => {
    try {
        const { title, content } = req.body;

        if(!title || !content) {
            return res.status(400).json({
                success:!false,
                message: "Title and content are required",
            });
        }

        const todo = await Todo.create({
            title,
            content,
        });

        res.status(201).json({
            success: true,
            message: "Todo created successfully",
            data: todo,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating todo",
            error: error.message,
        });
    }
}

export const updateTodo = async (req, res) => {
    try {
        const { title, content, completed } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            {
                title,
                content,
                completed,
            },
            {
                returnDocument: "after",
                runValidators: true,
            }
        );

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Todo updated successfully",
            data: todo,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating todo",
            error: error.message,
        });
    }
}

export const deleteTodo = async (req, res) => {
    try {
        
        const todo = await Todo.findByIdAndDelete(req.params.id);

        if (!todo){
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Todo deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting todo",
            error: error.message,
        });
    }
}

export const toggleTodoCompleted = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        todo.completed = !todo.completed;
        await todo.save();

        res.status(200).json({
            success: true,
            message: "Todo completed status updated successfully",
            data: todo,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating todo completed status",
            error: error.message,
        });
    }
}