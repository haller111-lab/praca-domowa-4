const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const list = document.getElementById("list");
console.log();
addButton.addEventListener("click", addTask);
function addTask() {
  const taskValue = taskInput.value.trim();
  if (taskValue === "") {
    alert("Nazwa zadania nie może być pusta.");
    return;
  }
  const listItem = document.createElement("li");
  listItem.innerHTML = `
        ${taskValue} 
        <button class="editButton">Edytuj</button> 
        <button class="deleteButton">Usuń</button>
    `;
  list.prepend(listItem);
  taskInput.value = "";
  setupButtons(listItem);
  function setupButtons(listItem) {
    const deleteButton = listItem.querySelector(".deleteButton");
    deleteButton.addEventListener("click", deleteTask);
  }
  function deleteTask(event) {
    const listItemToRemove = event.currentTarget.parentElement;
    listItemToRemove.remove();
  }
  const editButton = listItem.querySelector(".editButton");
  editButton.addEventListener("click", editTask);
}
function editTask(event) {
  const button = event.currentTarget;
  const listItem = button.parentElement;
  if (button.textContent === "Edytuj") {
    const taskTextNode = listItem.firstChild;
    const taskText = taskTextNode.nodeValue.trim();
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = taskText;
    listItem.replaceChild(inputField, taskTextNode);
    button.textContent = "Zatwierdź zmiany";
  } else {
    const inputFieldElement = listItem.querySelector("input");
    const newTaskValue = inputFieldElement.value.trim();
    if (newTaskValue === "") {
      alert("Nazwa zadania nie może być pusta.");
      return;
    }
    const newTextNode = document.createTextNode(newTaskValue);
    button.textContent = "Edytuj";
  }
}
console.log();
