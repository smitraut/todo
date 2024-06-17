import express from 'express'

const app = express();
const port = 3000;

app.post('/todo', (req, res) => {
    res.send('todo!');
});

app.get('/todos', (req, res) => {
    res.send('todos');
});
    
app.put('/completed', (req, res) => {
    res.send('completed');
});    

app.listen(port, () => {
console.log(`Server is listening at http://localhost:${port}`);
});
