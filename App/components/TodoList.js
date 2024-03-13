// TodoList.js

export class TodoList {
    constructor() {
        this.tasks = [];
        this.container = document.getElementById('app');
        this.title = document.createElement('h2');
        this.title.textContent = 'Ingrese su lista de tareas:';
        this.taskInput = document.createElement('input');
        this.taskInput.setAttribute('type', 'text');
        this.taskInput.setAttribute('placeholder', 'Agregue una nueva tarea');
        this.addBtn = document.createElement('button');
        this.addBtn.textContent = 'Agregar';
        this.addBtn.addEventListener('click', this.addTask.bind(this));
        this.deleteAllBtn = document.createElement('button');
        this.deleteAllBtn.textContent = 'Borrar todas las tareas';
        this.deleteAllBtn.addEventListener('click', this.deleteAllTasks.bind(this));
        this.taskList = document.createElement('ul');
        this.container.appendChild(this.title);
        this.container.appendChild(this.taskInput);
        this.container.appendChild(this.addBtn);
        this.container.appendChild(this.taskList);
        this.container.appendChild(this.deleteAllBtn);
    }

    render() {
        this.taskList.innerHTML = '';
        this.tasks.forEach(task => {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.checked = task.completed; // Marcar el checkbox si la tarea está completada
            checkbox.addEventListener('change', () => this.toggleCompleted(task.id));
            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(task.text));
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar tarea';
            deleteBtn.addEventListener('click', () => this.deleteTask(task.id));
            li.appendChild(deleteBtn);
            this.taskList.appendChild(li);
        });
    }

    addTask() {
        const taskText = this.taskInput.value.trim();
        if (taskText !== '') {
            const newTask = {
                id: Date.now(),
                text: taskText,
                completed: false
            };
            this.tasks.push(newTask);
            this.render();
            this.taskInput.value = '';
        } else {
            alert('Por favor, ingrese una tarea.');
        }
    }

    toggleCompleted(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
            this.render();
        }
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.render();
    }

    deleteAllTasks() {
        this.tasks = [];
        this.render();
    }
};


  
  
  
  
  