document.addEventListener('DOMContentLoaded', ()=>{
    const todoInput = document.getElementById('todo-input');
    const totoButton = document.getElementById('add-button');
    const todoList = document.getElementById('toto-list');

    //load toto from local storage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(element => {
        addTodoElement(element);
    });

    totoButton.addEventListener('click',()=>{
        const totoText = todoInput.value.trim();
        if(totoText !== ''){
            const todo = {text: totoText, completed: false}
            todos.push(todo);
            addTodoElement(todo);
            saveTodoS();
            todoInput.value = '';
        }
    })

    function addTodoElement(event){
        const li = document.createElement('li');
        li.textContent = event.text;
        li.classList.toggle('completed', event.completed)
        li.addEventListener('click',()=>{
            event.completed = !event.completed;
            li.classList.toggle('completed');
            saveTodoS()
        })

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click',()=>{
            todos = todos.filter(t=> t!== event);
            todoList.removeChild(li);
            saveTodoS();
        })
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }

    function saveTodoS(){
        localStorage.setItem('todos', JSON.stringify(todoList))
    }
})

