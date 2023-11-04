const textbox = document.getElementById("textbox");
const listcontainer = document.getElementById("list_container");

// Get the input field
let input = document.getElementById("textbox");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Call a function to add the task
    addTask();
  }
});

function addTask() {
  let task = input.value; // Get the input value
  if (task) {
    // If there's a task, add it to the list
    let li = document.createElement("li");
    li.textContent = task;
    let hr = document.createElement("hr");
    document.getElementById("list_container").appendChild(li);
    document.getElementById("list_container").appendChild(hr);

  let span = document.createElement("span");
  span.innerHTML = "\u00D7";
  span.className = "close"; // You can add a class for styling and handling events
  span.onclick = function () {
    this.parentElement.style.display = "none"; // This will hide the list item
  };

  li.appendChild(span);

  document.getElementById("list_container").appendChild(li);

  }
     input.value = ""; // Clear the input field
 
}