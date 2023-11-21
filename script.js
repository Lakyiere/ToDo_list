const textbox = document.getElementById("textbox");
const listcontainer = document.getElementById("list_container");

//  Dark mode functionality
const button = document.querySelector("#theme-button");
button.addEventListener("click", () => {
  if (document.body.getAttribute("data-theme") === "dark") {
    document.body.setAttribute("data-theme", "light");
  } else {
    document.body.setAttribute("data-theme", "dark");
  }
});

// Get the input field
let input = document.getElementById("textbox");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Call a function to add the task
    addTask();
  }
});

//  ==============  Function to add a task =============

function addTask() {
  let task = input.value; // Get the input value
  if (task) {
    // Create a new task item
    const taskItem = document.createElement("li");

    // Create a checkbox and add it to the task item
    const checkboxContainer = document.createElement("label");
    checkboxContainer.className = "checkbox-container";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.onchange = function () {
      if (this.checked) {
        this.parentElement.parentElement.className = "checked";
      } else {
        this.parentElement.parentElement.className = "";
      }
    };
    checkboxContainer.appendChild(checkbox);
    const checkmark = document.createElement("span");
    checkmark.className = "checkmark";
    checkboxContainer.appendChild(checkmark);
    taskItem.appendChild(checkboxContainer);

    // Create a task text and add it to the task item
    const taskText = document.createTextNode(task);
    taskItem.appendChild(taskText);

    // Add the task item to the list container
    listcontainer.appendChild(taskItem);

    // Create close button
    let closeIcon = document.createElement("i");
    closeIcon.className = "fas fa-times close";
    closeIcon.onclick = function () {
      this.parentElement.remove(); // This will remove the list item
      updateItemsLeftCount(); // Update the items left count
    };
    taskItem.appendChild(closeIcon);

    // Clear the input field
    input.value = "";

    // Update the items left count
    document.querySelector(".count").textContent =
      listcontainer.querySelectorAll("li").length + " items left";
  }
}

function updateItemsLeftCount() {
  // Update the items left count
  document.querySelector(".count").textContent =
    listcontainer.querySelectorAll("li").length + " items left";
}

// Get the buttons from the DOM
const allButton = document.querySelector(".all");
const activeButton = document.querySelector(".active");
const completedButton = document.querySelector(".completed");
const clearButton = document.querySelector(".clear");

// Add event listeners to the buttons
allButton.addEventListener("click", showAllTasks);
activeButton.addEventListener("click", showActiveTasks);
completedButton.addEventListener("click", showCompletedTasks);
clearButton.addEventListener("click", clearCompletedTasks);

function showAllTasks() {
  // Get all tasks
  const tasks = document.querySelectorAll("#list_container li");

  // Show all tasks
  tasks.forEach((task) => {
    task.style.display = "flex";
  });
}

// ===============  Function to show active tasks ===============
function showActiveTasks() {
  // Get all tasks
  const tasks = document.querySelectorAll("#list_container li");

  // Show active tasks and hide completed tasks
  tasks.forEach((task) => {
    if (task.querySelector(".task-checkbox").checked) {
      task.style.display = "none";
    } else {
      task.style.display = "flex";
    }
  });
}

// ===============  Function to show completed tasks ===============
function showCompletedTasks() {
  // Get all tasks
  const tasks = document.querySelectorAll("#list_container li");

  // Show completed tasks and hide active tasks
  tasks.forEach((task) => {
    if (task.querySelector(".task-checkbox").checked) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}

//  ===================  Function to clear completed tasks ================
function clearCompletedTasks() {
  // Get all tasks
  const tasks = document.querySelectorAll("#list_container li");
  document.querySelector(".count").textContent =
    listcontainer.querySelectorAll("li").length + " items left";

  // Remove completed tasks
  tasks.forEach((task) => {
    if (task.querySelector(".task-checkbox").checked) {
      task.remove();
    }
  });
}

taskItem.appendChild(closeIcon);
