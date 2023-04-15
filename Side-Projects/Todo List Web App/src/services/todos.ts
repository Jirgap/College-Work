import { Todo } from "../interfaces/todo";

class TodoController {
    private todos: Todo[];

    constructor(){}

    load(): Promise<Todo[]> {
        
    }
}

export const Todos = new TodoController();