const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const body = document.querySelector("body");
const heading = document.querySelector("h1");

// Adds a task to the list when the "Add" button is clicked. Also adds a delete button next to each item. 
function addTask(event) {
    event.preventDefault();

    let li = document.createElement("li");
    li.textContent = inputBox.value;

    if (inputBox.value === "") {
        alert("Field cannot be empty. Please enter a task.");
    } else {
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();
}

// Crosses out an item when it is clicked, and removes an item from the list when the respective delete button is clicked.
listContainer.addEventListener("click", (event) => {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData();
    }
}, false)

// Saves data from the lists using localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Displays task list on screen using localStorage
function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();

// Changes the background image
function workspace() {
    body.style.backgroundImage = "url('images/workspace.jpeg')";
    heading.style.color = "#000000";
}

function mountain() {
    body.style.backgroundImage = "url('images/mountain.jpeg')";
    heading.style.color = "#ffffff";
}

function sunrise() {
    body.style.backgroundImage = "url('images/sunrise.jpeg')";
    heading.style.color = "#000000";
}

function forest() {
    body.style.backgroundImage = "url('images/forest.jpeg')";
    heading.style.color = "#ffffff";
}

function coffee() {
    body.style.backgroundImage = "url('images/coffee.jpeg')";
    heading.style.color = "#ffffff";
}