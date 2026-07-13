import "../pages/todo/todo.css";
import { saveLibrary } from "./storage.js";
import { format } from "date-fns";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export let todoListFunction = (todo, todoListLibrary) => {
  const todoContainer = document.createElement("div");
  todoContainer.className = "todoContainer";

  const headest = document.createElement("div");
  todoContainer.appendChild(headest);
  headest.className = "headest";

  const bodies = document.createElement("div");
  todoContainer.appendChild(bodies);
  bodies.className = "bodies";

  const footest = document.createElement("div");
  todoContainer.appendChild(footest);
  footest.className = "footest";

  const titleBox = document.createElement("div");
  headest.appendChild(titleBox);
  titleBox.className = "titleBox";

  const dueDateBox = document.createElement("div");
  headest.appendChild(dueDateBox);
  dueDateBox.className = "dueDateBox";

  const pirorityBox = document.createElement("div");
  bodies.appendChild(pirorityBox);
  pirorityBox.className = "pirorityBox";

  const descriptionBox = document.createElement("div");
  bodies.appendChild(descriptionBox);
  descriptionBox.className = "descriptionBox";

  const noteBox = document.createElement("div");
  footest.appendChild(noteBox);
  noteBox.className = "noteBox";

  const checklistBox = document.createElement("div");
  footest.appendChild(checklistBox);
  checklistBox.className = "checklistBox";

  const titleHead = document.createElement("div");
  titleBox.appendChild(titleHead);
  titleHead.innerHTML = "Title";
  titleHead.className = "titleHead";

  const titleInput = document.createElement("input");
  titleBox.appendChild(titleInput);
  titleInput.className = "titleInput";
  titleInput.setAttribute("placeholder", "Enter the title");
  titleInput.value = todo.todoTitle || "";
  titleInput.addEventListener('input', () => {
    todo.todoTitle = titleInput.value;
  });

  const dueDateHead = document.createElement("div");
  dueDateBox.appendChild(dueDateHead);
  dueDateHead.innerHTML = "Due Date";
  dueDateHead.className = "dueDateHead";

  const dueDateInput = document.createElement("input");
  dueDateBox.appendChild(dueDateInput);
  dueDateInput.className = "dueDateInput";
  dueDateInput.setAttribute("placeholder", "");
  dueDateInput.value = todo.todoDueDate || format(new Date(), "MMMM do, yyyy");

  flatpickr(dueDateInput, {
    dateFormat: "F j, Y",
    onChange: function(selectedDate, dateStr){
        todo.todoDueDate = dateStr;
        saveLibrary(todoListLibrary);
    }
  });

  const pirorityHead = document.createElement("div");
  pirorityBox.appendChild(pirorityHead);
  pirorityHead.className = "pirorityHead";

  const pirorityInput = document.createElement("div");
  pirorityBox.appendChild(pirorityInput);
  pirorityInput.className = "pirorityInput";

  const descriptionHead = document.createElement("div");
  descriptionBox.appendChild(descriptionHead);
  descriptionHead.innerHTML = "Description";
  descriptionHead.className = "descriptionHead";

  const descriptionInput = document.createElement("textarea");
  descriptionBox.appendChild(descriptionInput);
  descriptionInput.className = "descriptionInput";
  descriptionInput.value = todo.todoDescription || "";
  descriptionInput.addEventListener('input', () => {
    todo.todoDescription = descriptionInput.value;
  })

  const noteHead = document.createElement("div");
  noteBox.appendChild(noteHead);
  noteHead.className = "noteHead";
  noteHead.innerHTML = "Notes";

  const noteInput = document.createElement("textarea");
  noteBox.appendChild(noteInput);
  noteInput.className = "noteInput";
  noteInput.value = todo.todoNote || "";
  noteInput.addEventListener('input', () => {
    todo.todoNote = noteInput.value;
  })

  const checklistHead = document.createElement("div");
  checklistBox.appendChild(checklistHead);
  checklistHead.className = "checklistHead";
  checklistHead.innerHTML = "Checklists";

  const checklistInput = document.createElement("textarea");
  checklistBox.appendChild(checklistInput);
  checklistInput.className = "checklistInput";
  checklistInput.value = todo.todoChecklist || "";
  checklistInput.addEventListener('input', () => {
    todo.todoChecklist = checklistInput.value;
  })

  return todoContainer;
};
