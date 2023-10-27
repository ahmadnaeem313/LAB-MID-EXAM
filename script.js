
const inputField = document.getElementById('input');
const todoList = document.getElementById('todos');
const form = document.getElementById('form');

function createTodoItem(todoText) {
  const listItem = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const todoTextElement = document.createElement('span');
  todoTextElement.innerText = todoText;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', function() {
    listItem.remove();
  });

  const editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.classList.add('edit-button');
  editButton.addEventListener('click', function() {
    const newText = prompt('Enter new text', todoText);
    if (newText !== null) {
      todoTextElement.innerText = newText;
    }
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(todoTextElement);
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);

  return listItem;
}
form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const todoText = inputField.value.trim();
  
    if (todoText !== '') {
      const listItem = createTodoItem(todoText);
      todoList.appendChild(listItem);
      inputField.value = '';
      
    }
  });
todoList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
      const listItem = event.target.parentNode;
      const todoTextElement = listItem.querySelector('span');
  
      todoTextElement.style.textDecoration = 'line-through';
    }
  });

todoList.addEventListener('change', function(event) {
    if (event.target.type === 'checkbox') {
      const listItem = event.target.parentNode;
      const todoTextElement = listItem.querySelector('span');
  
      todoTextElement.style.display = event.target.checked ? 'none' : 'inline';
    }
  });