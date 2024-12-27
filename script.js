let toggle = document.querySelector('.toggle');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let close = document.querySelector('.close');
let body = document.querySelector('body');
let searchBx = document.querySelector('.searchBx');
let searchOpen = document.querySelector('.searchOpen');
let searchClose = document.querySelector('.searchClose');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    left.classList.toggle('active');
    right.classList.toggle('overlay');
    body.style.overflow = 'hidden';
});
close.onclick = () => {
    toggle.classList.remove('active');
    left.classList.remove('active');
    right.classList.remove('overlay');
    body.style.overflow = '';
};
searchOpen.onclick = () => {
    searchBx.classList.add('active');
};
searchClose.onclick = () => {
    searchBx.classList.remove('active');
};
window.onclick = (e) => {
    if (e.target == right) {
        toggle.classList.remove('active');
        left.classList.remove('active');
        right.classList.remove('overlay');
        body.style.overflow = '';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Your JavaScript code here
    // Get references to elements
const taskList = document.getElementById('taskList');
const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const deleteBtn = document.querySelector('.deleteSelectedBtn');

// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class="taskCheckbox">
            <span>${taskText}</span>
        `;
        taskList.appendChild(li);
        newTaskInput.value = ''; // Clear the input after adding task
    }
}

// Function to delete selected tasks
function deleteTasks() {
    const checkboxes = document.querySelectorAll('.taskCheckbox:checked');
    checkboxes.forEach(checkbox => {
        const listItem = checkbox.closest('li');
        listItem.remove();
    });
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);
deleteBtn.addEventListener('click', deleteTasks);

});
