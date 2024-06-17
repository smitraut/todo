const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://test:test123@testdb.vaxmdsv.mongodb.net/?retryWrites=true&w=majority&appName=testdb")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}