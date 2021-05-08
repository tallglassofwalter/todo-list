// selectors
const todoForm = document.querySelector('.todo__form');
const todoInput = document.querySelector('.todo__input');
const todoList = document.querySelector('.todo__list');

// event listeners
todoForm.addEventListener("submit", addTodo);

// functions
function createTodo(str) {
  let todoContainer = document.createElement('div');
  let newTodo = document.createElement('li');
  newTodo.innerText = str;
  todoContainer.appendChild(newTodo);
  newTodo.addEventListener('click', toggleTodo);

  let deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.classList.add('todo__delete');
  deleteBtn.addEventListener('click', deleteTodo);

  todoContainer.appendChild(deleteBtn);
  return todoContainer;
}

function addTodo(e) {
    e.preventDefault();
    if (!todoInput.value) return null;
    let todoContainer = createTodo(todoInput.value);
    todoList.appendChild(todoContainer);
    todoInput.value = "";
}

function deleteTodo(e) {
  let todo = e.target.parentElement;
  todo.remove();
}

function toggleTodo(e) {
  let todo = e.target;
  todo.classList.toggle('todo__checked');
}
