import express, {} from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send("Hello World!!!!!!!");
});
app.get('/todos', (req, res) => {
    res.send("Todos");
});
app.get('/todos/app', (req, res) => {
    res.send("Todos App");
});
export default app;
//# sourceMappingURL=app.js.map