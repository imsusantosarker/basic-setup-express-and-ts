import express, { type Application, type Request, type Response } from 'express'
const app: Application = express()

// Import using the 'with' attribute syntax
import data from './../../db/todo.json' with { type: 'json' };

app.use(express.json())


app.get('/', (req: Request, res: Response) => {
   
   res.send("Hello World!!!!!!!")
})
app.get('/todos', (req: Request, res: Response) => {
   res.send(data)
   res.send("Todos")
})
app.post('/todos/create-todo', (req: Request, res: Response) => {
   const {title, body} = req.body;
   console.log(title, body)
   res.json(title)
}) 


export default app;