const container = document.createElement("div") as HTMLDivElement;
container.className = "container";
const title = document.createElement("h1") as HTMLHeadingElement;
title.textContent = "To do list ";
container.appendChild(title);

const inputContainer = document.createElement("div") as HTMLDivElement;
inputContainer.className = "input-container";

const input = document.createElement("input") as HTMLInputElement;
input.type = "text";
input.placeholder = "Enter a new task";
input.id = "taskInput";

const addBtn = document.createElement("button") as HTMLButtonElement;
addBtn.textContent = "Add";
addBtn.id = "addBtn";

inputContainer.appendChild(input);
inputContainer.appendChild(addBtn);
container.appendChild(inputContainer);

const taskList = document.createElement("ul") as HTMLUListElement;
taskList.id = "taskList";
container.appendChild(taskList);

document.body.appendChild(container);

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;
  createTaskItem(text);
  input.value = "";
});

function createTaskItem(text: string): void {
  const li = document.createElement("li") as HTMLLIElement;

  const checkbox = document.createElement("input") as HTMLInputElement;
  checkbox.type = "checkbox";

  const taskText = document.createElement("span") as HTMLSpanElement;
  taskText.textContent = text;
  taskText.className = "task-text";

  const editInput = document.createElement("input") as HTMLInputElement;
  editInput.type = "text";
  editInput.value = text;
  editInput.className = "edit-input";
  editInput.style.display = "none";

  checkbox.addEventListener("change", () => {
    taskText.classList.toggle("done", checkbox.checked);
  });

  const editBtn = document.createElement("button") as HTMLButtonElement;
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";

  let isEditing = false;

  editBtn.addEventListener("click", () => {
    if (!isEditing) {
      taskText.style.display = "none";
      editInput.style.display = "inline";
      editInput.focus();
      editBtn.textContent = "Save";
      isEditing = true;
    } else {
      const newText = editInput.value.trim();
      if (newText) {
        taskText.textContent = newText;
      }
      taskText.style.display = "inline";
      editInput.style.display = "none";
      editBtn.textContent = "Edit";
      isEditing = false;
    }
  });
  const deleteBtn = document.createElement("button") as HTMLButtonElement;
  deleteBtn.textContent = "Remove";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(editInput);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
