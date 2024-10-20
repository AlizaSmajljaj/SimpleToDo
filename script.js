document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const reflectionInput = document.getElementById('reflection-input');
    const saveReflectionBtn = document.getElementById('save-reflection-btn');
    const savedReflection = document.getElementById('saved-reflection');
    const completedTasksCount = document.getElementById('completed-tasks-cnt');
    
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset All';
    document.body.appendChild(resetBtn);
    
    let done = 0;

    resetBtn.addEventListener('click', function() {
        taskList.innerHTML = '';  
        done = 0;
        updateProgress(); 
        savedReflection.textContent = ''; 
    });

    addTaskBtn.addEventListener('click', function() {
        const newTask = taskInput.value;
        const priority = document.getElementById('task-priority').value; 
        const dueDate = document.getElementById('task-due-date').value; 

        if (newTask) {
            const li = document.createElement('li');
            li.textContent = `${newTask} - Due: ${dueDate} - Priority: ${priority}`; 

            if (priority === 'high') li.style.color = 'red';
            else if (priority === 'medium') li.style.color = 'orange';

            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Complete';
            completeBtn.addEventListener('click', function() {
                taskList.removeChild(li);
                done++;
                updateProgress();
            });

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', function() {
                taskInput.value = newTask; 
                document.getElementById('task-priority').value = priority; 
                document.getElementById('task-due-date').value = dueDate; 
                taskList.removeChild(li);
            });

            li.appendChild(completeBtn);
            li.appendChild(editBtn);
            taskList.appendChild(li);
            taskInput.value = ''; 
        }
    });

    saveReflectionBtn.addEventListener('click', function() {
        const reflectionText = reflectionInput.value;
        if (reflectionText) {
            savedReflection.textContent = reflectionText;
            reflectionInput.value = '';
        }
    });

    function updateProgress() {
        completedTasksCount.textContent = "Completed Tasks: " + done;
    }
});
