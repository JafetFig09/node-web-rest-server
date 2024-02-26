import { Request, Response } from 'express';

const todos = [
    { id: 1, name: 'Todo 1' },
    { id: 2, name: 'Todo 2' },
    { id: 3, name: 'Todo 3' },
    { id: 4, name: 'Todo 4' },
    { id: 5, name: 'Todo 5' },
];

export class TodosController {


    constructor() {


    }

    public getTodos = (req: Request, res: Response) => {

        res.json(todos)
    }

    public getTodoById = (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id)) return res.status(400).json({ message: 'Invalid id' });

        const todo = todos.find(todo => todo.id === id);
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    }

    public createTodo = (req: Request, res: Response) => {
        const { name } = req.body;
        if (!name) return res.status(400).json({ message: 'Name is required' });

        const newTodo = {
            id: todos.length + 1,
            name: name,

        };
        res.json({ newTodo });
    }

    public updateTodo = (req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({ message: 'Invalid id' });

        const { name } = req.body;
        if (!name) return res.status(400).json({ message: 'Name is required' });

        const todo = todos.find(todo => todo.id === id);
        if (todo) {
            //!Referencia al objeto original
            todo.name = name;
            res.json(todo);
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    }

    public deleteTodo = (req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({ message: 'Invalid id' });

        const todo = todos.find(todo => todo.id === id);
        if (!todo) return res.status(404).json({ message: 'Todo not found' });

        todos.splice(todos.indexOf(todo), 1);

        res.json(todo);

    }
}