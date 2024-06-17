import express from 'express'
const {createTodo, updateTodo } = require("./types");

const app = express();
const port = 3000;

app.post('/todo', (req, res) => {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayload);
    if(!parsedPayLoad.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
    }

});

app.get('/todos', (req, res) => {
    res.send('todos');
});
    
app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayload)
    if(parsedPayLoad.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
    }
});    

app.listen(port, () => {
console.log(`Server is listening at http://localhost:${port}`);
});
