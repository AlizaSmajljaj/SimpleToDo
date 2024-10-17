const addTaskBtn = document.getElementById('add-task');
const taskInput = document.getElementById('new-task');
const todoLi = document.getElementById('todo-li');

addTaskBtn.addEventListener('click', function(){
    const taskText = taskInput.value;
    if(taskText.trim() !== ""){
        const newtask = document.createElement('li');
        newtask.textContent = taskText;
        todoLi.appendChild(newtask);
        taskInput.value = "";
    }
})

todoLi.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('completed');
    }
})