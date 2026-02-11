const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const text = input.value.trim();
  if (text === '') return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  checkbox.addEventListener('change', function () {
    span.classList.toggle('done');
  });

  deleteBtn.addEventListener('click', function () {
    list.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  list.appendChild(li);

  input.value = '';
});
