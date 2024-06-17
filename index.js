import express from 'express'
import { todo } from './db';
const {createTodo, updateTodo } = require("./types");

const app = express();
const port = 3000;


app.post('/todo', async (req, res) => {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayload);
    if(!parsedPayLoad.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })

});



app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    })
});
   


app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayload)
    if(parsedPayLoad.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
    }
    await todo.update({
        _id: req.body.id
   }, {
        completed: true
   })
   res.json({
    msg: "Todo marked as completed"
   })
});    


app.listen(port, () => {
console.log(`Server is listening at http://localhost:${port}`);
});
