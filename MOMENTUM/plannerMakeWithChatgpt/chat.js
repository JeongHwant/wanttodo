// Define tasks as an array of objects with date and task properties
let tasks = [];

// Get the date and task inputs
const dateInput = document.getElementById("date");
const taskInput = document.getElementById("task");

// Get the tasks container
const tasksContainer = document.getElementById("tasks");

// Function to add a task to the tasks array and display it on the page
function addTask() {
  const date = dateInput.value;
  const task = taskInput.value;
  tasks.push({date: date, task: task});

  // Clear the inputs
  dateInput.value = "";
  taskInput.value = "";

  // Display the tasks
  displayTasks();
}

// Function to display the tasks on the page
function displayTasks() {
  // Clear the tasks container
  tasksContainer.innerHTML = "";

  // Loop through the tasks and create a div for each one
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.innerHTML = `<input type="checkbox" onclick="markComplete(${i})"> ${task.task} - ${task.date}`;
    if (isComplete(i)) {
      taskDiv.classList.add("complete");
      taskDiv.querySelector("input").checked = true;
    }
    tasksContainer.appendChild(taskDiv);
  }
}

// Function to mark a task as complete
function markComplete(index) {
  tasks[index].completed = true;
  displayTasks();
}

// Function to check if a task is complete
function isComplete(index) {
  return tasks[index].completed;
}
