import { Router } from "express";
import { TodosController } from "./controller";






export class TodoRoutes {



    static get routes(): Router {

        const todoController = new TodosController();

        const router = Router();
        //*Routes
        router.get('/', todoController.getTodos);
        router.get('/:id', todoController.getTodoById);


        router.post('/', todoController.createTodo);
        router.put('/:id', todoController.updateTodo);
        router.delete('/:id', todoController.deleteTodo);


        return router;
    }
}