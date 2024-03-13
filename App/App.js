import { TodoList } from './components/TodoList.js';

class App {
  constructor() {
    this.todoList = new TodoList();
  }

  init() {
    this.todoList.render();
  }
}

export { App };



