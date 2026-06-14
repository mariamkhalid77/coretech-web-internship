let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask(){

    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    saveTasks();
    input.value = "";
    displayTasks();
}

function displayTasks(){

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="task-text ${task.completed ? 'completed' : ''}">
                ${task.text}
            </span>

            <div class="action-buttons">

                <button class="complete-btn"
                        onclick="toggleTask(${index})">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>

                <button class="delete-btn"
                        onclick="deleteTask(${index})">
                    Delete
                </button>

            </div>
        `;

        taskList.appendChild(li);
    });
}

function toggleTask(index){

    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    displayTasks();
}

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();
    displayTasks();
}

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

document.getElementById("taskInput").addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        addTask();
    }

});