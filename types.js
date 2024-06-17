import { object, string } from "zod";

const createTodo = object({
    title: string(),
    description: string()
})

const updateTodo = object ({
    id: string
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}