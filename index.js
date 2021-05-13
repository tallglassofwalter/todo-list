// selectors
const todoForm = document.querySelector('.todo__form');
const todoInput = document.querySelector('.todo__input');
const todoList = document.querySelector('.todo__list');

// event listeners
window.addEventListener('load', renderTodo);
todoForm.addEventListener("submit", addTodo);

let todoArr = ["pay bills", "buy groceries"];

// functions
function renderTodo() {
  todoList.innerHTML = '';

  for (let i = 0; i < todoArr.length; i++) {
    let newTodo = document.createElement('li');
    let todoDiv = document.createElement('div');
    todoDiv.setAttribute('id', i);
    todoDiv.innerText = todoArr[i];
    newTodo.appendChild(todoDiv);
    todoDiv.addEventListener('click', toggleTodo);

    let editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.classList.add('todo__edit');
    editBtn.setAttribute('type', 'button');
    editBtn.addEventListener('click', editTodo);
    newTodo.appendChild(editBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.classList.add('todo__delete');
    deleteBtn.addEventListener('click', deleteTodo);

    newTodo.appendChild(deleteBtn);
    let editForm = document.createElement('form');
    editForm.classList.add('hidden');
    editForm.addEventListener('submit', saveTodo);

    let errorDiv = document.createElement('div');
    errorDiv.innerText = '';
    editForm.appendChild(errorDiv);

    let editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    editInput.setAttribute('value', todoArr[i]);
    editForm.appendChild(editInput);

    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = 'Save';
    editForm.appendChild(saveBtn);

    let cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.innerHTML = 'Cancel';
    cancelBtn.addEventListener('click', cancelTodo);

    editForm.appendChild(cancelBtn);

    newTodo.appendChild(editForm);

    todoList.appendChild(newTodo);
  }
}

function cancelTodo(e) {
  let el = e.target.parentElement.parentElement.children;
  [...el].forEach((el) => el.classList.toggle('hidden'));

}

function addTodo(e) {
    e.preventDefault();
    if (!todoInput.value) return null;
    todoArr.push(todoInput.value);
    renderTodo();
    todoInput.value = '';
}

function deleteTodo(e) {
  let idx = e.target.previousSibling.id;
  todoArr.splice(idx, 1);
  renderTodo();
}

function editTodo(e) {
  let el = e.target.parentElement.children;
  [...el].forEach((el) => el.classList.toggle('hidden'));
}

function saveTodo(e) {
  e.preventDefault();
  let val = e.target[0].value;
  if (!val) {
    let div = e.target.parentElement.lastChild.firstChild;
    div.innerText = 'Input cannot be blank.';
  } else {
    let idx = e.target.parentElement.firstChild.id;
    todoArr[idx] = val;
    renderTodo();
  }
}

function toggleTodo(e) {
  let todo = e.target;
  todo.classList.toggle('todo__checked');
}
