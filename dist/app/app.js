import express, {} from 'express';
const app = express();
// Import using the 'with' attribute syntax
import data from './../../db/todo.json' with { type: 'json' };
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello World!!!!!!!");
});
app.get('/todos', (req, res) => {
    res.send(data);
    res.send("Todos");
});
app.post('/todos/create-todo', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.json(title);
});
export default app;
//# sourceMappingURL=app.js.map