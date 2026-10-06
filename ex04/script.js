const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let totalTasks = 0;

function updateCount() {
    taskCount.textContent = totalTasks;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    const text = document.createElement("span");
    const deleteButton = document.createElement("button");

    text.textContent = taskText;
    deleteButton.textContent = "Delete";

    text.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
        totalTasks = totalTasks - 1;
        updateCount();
    });

    li.appendChild(text);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    totalTasks = totalTasks + 1;
    updateCount();

    taskInput.value = "";
}

function handleKeydown(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", handleKeydown);
