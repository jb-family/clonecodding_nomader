const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    li.remove();
    saveToDo();
}

function paintToDo(newtodo){
    const li = document.createElement("li");
    li.id = newtodo.id;
    const span = document.createElement("span");
    span.innerText = newtodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoForm(event){
    event.preventDefault();
    const newtodo = todoInput.value;
    const newtodoObj = {
        text:newtodo,
        id:Date.now(),
    };
    toDos.push(newtodoObj);
    todoInput.value = "";
    paintToDo(newtodoObj);
    saveToDo();
}

const savedToDo = localStorage.getItem(TODOS_KEY);

if(savedToDo !== null){
    const parseToDo = JSON.parse(savedToDo);
    toDos = parseToDo;
    parseToDo.forEach(paintToDo);
}

todoForm.addEventListener("submit", handleToDoForm);