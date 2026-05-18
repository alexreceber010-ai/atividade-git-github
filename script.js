document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const task = input.value;
    if (task) {
        addTask(task);
        input.value = '';
    }
});

function addTask(task) {
    const ul = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.innerHTML = `${task} <button class="delete-btn" onclick="this.parentElement.remove()">X</button>`;
    ul.appendChild(li);
}
