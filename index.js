var container = document.createElement("div");
container.className = "container";
var title = document.createElement("h1");
title.textContent = "To do list ";
container.appendChild(title);
var inputContainer = document.createElement("div");
inputContainer.className = "input-container";
var input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter a new task";
input.id = "taskInput";
var addBtn = document.createElement("button");
addBtn.textContent = "Add";
addBtn.id = "addBtn";
inputContainer.appendChild(input);
inputContainer.appendChild(addBtn);
container.appendChild(inputContainer);
var taskList = document.createElement("ul");
taskList.id = "taskList";
container.appendChild(taskList);
document.body.appendChild(container);
addBtn.addEventListener("click", function () {
    var text = input.value.trim();
    if (!text)
        return;
    createTaskItem(text);
    input.value = "";
});
function createTaskItem(text) {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var taskText = document.createElement("span");
    taskText.textContent = text;
    taskText.className = "task-text";
    var editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = text;
    editInput.className = "edit-input";
    editInput.style.display = "none";
    checkbox.addEventListener("change", function () {
        taskText.classList.toggle("done", checkbox.checked);
    });
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    var isEditing = false;
    editBtn.addEventListener("click", function () {
        if (!isEditing) {
            taskText.style.display = "none";
            editInput.style.display = "inline";
            editInput.focus();
            editBtn.textContent = "Save";
            isEditing = true;
        }
        else {
            var newText = editInput.value.trim();
            if (newText) {
                taskText.textContent = newText;
            }
            taskText.style.display = "inline";
            editInput.style.display = "none";
            editBtn.textContent = "Edit";
            isEditing = false;
        }
    });
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () { return li.remove(); });
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(editInput);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
