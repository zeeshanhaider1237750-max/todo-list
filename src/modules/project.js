import "../pages/project_page/projectView.css";
import { todoListFunction } from "../modules/todo.js";

let todoListLibrary = [];

let todoFactory = (serialNo, arrow, name, id) => {
  return { serialNo, arrow, name, id, isComplete: false, isDetailOpen: false };
};

let todoDom = (todo, parentContainer) => {
  let todoRow = document.createElement("div");
  todoRow.className = "todoRow";

  let todoRowHead = document.createElement("div");
  todoRow.appendChild(todoRowHead);
  todoRowHead.className = "todoRowHead";

  let todoRowBody = document.createElement("div");
  todoRow.appendChild(todoRowBody);
  todoRowBody.className = "todoRowBody";

  let serial = document.createElement("div");
  todoRowHead.appendChild(serial);
  serial.textContent = todo.serialNo;
  serial.className = "serial";

  let arrow = document.createElement("div");
  todoRowHead.appendChild(arrow);
  arrow.textContent = todo.arrow;
  arrow.className = "arrow";

  let inputName = document.createElement("input");
  todoRowHead.appendChild(inputName);
  inputName.value = todo.name;
  inputName.className = "inputName";
  inputName.placeholder = "Input the Name of Your Todo and press Enter";
  inputName.setAttribute("required", "");
  inputName.setAttribute("maxlength", "50");

  inputName.addEventListener("input", () => {
    todo.name = inputName.value;
  });

  let checkBox = document.createElement("div");
  todoRowHead.appendChild(checkBox);
  checkBox.className = "checkBox";

  let removeButton = document.createElement("div");
  todoRowHead.appendChild(removeButton);
  removeButton.className = "removeButton";
  removeButton.textContent = "Remove todo";

  let todoId;
  todoId = todo.id;

  removeButton.addEventListener("click", () => {
    todoListLibrary = todoListLibrary.filter((item) => item.id !== todo.id);
    serialDesigner(parentContainer);
  });
  checkBox.innerHTML = todo.isComplete ? "✔" : "";
  checkBox.addEventListener("click", () => {
    if (checkBox.innerHTML === "" || checkBox.innerHTML === "✖") {
      checkBox.innerHTML = "✔";
      todo.isComplete = true;
    } else if (checkBox.innerHTML === "✔") {
      checkBox.innerHTML = "✖";
      todo.isComplete = false;
    }
  });


  arrow.addEventListener("click", () => {
    if (!todo.isDetailOpen) {
      todoListLibrary.forEach((item) => {
        item.isDetailOpen = false;
        item.arrow = "▶";
      });
      todo.isDetailOpen = true;
      todo.arrow = ">";

      serialDesigner(parentContainer);
    } else {
      todo.isDetailOpen = false;
      todo.arrow = "▶";
      serialDesigner(parentContainer);
    }
  });
  
  if (todo.isDetailOpen) {
    arrow.innerHTML = ">";
    todoRowBody.appendChild(todoListFunction());
    todoRowBody.classList.add("expanded");
  } else {
    arrow.innerHTML = "▶";
    todoRowBody.replaceChildren();
    todoRowBody.classList.add("expanded");
  }

  return todoRow;
};

export const projectBox = () => {
  const projectContainer = document.createElement("div");
  projectContainer.className = "projectContainer";

  const projectHead = document.createElement("div");
  projectContainer.appendChild(projectHead);
  projectHead.className = "projectHead";

  const projectBody = document.createElement("div");
  projectContainer.appendChild(projectBody);
  projectBody.appendChild(projectBodyBox());
  projectBody.className = "projectBody";

  const headText = document.createElement("div");
  projectHead.appendChild(headText);
  headText.innerHTML = "Project Page";
  headText.className = "headText";

  headText.addEventListener("click", () => {
    const targetBodyHead = bodyBoxElement.querySelector(".bodyHead");
    if(targetBodyHead){
      serialDesigner(targetBodyHead);
    }
  });

  return projectContainer;
};

let serialDesigner = (containerElement) => {
  containerElement.innerHTML = "";
  todoListLibrary.forEach((todo, index) => {
    todo.serialNo = index + 1;

    let reIndexedRow = todoDom(todo, containerElement);
    containerElement.appendChild(reIndexedRow);
  });
};

const projectBodyBox = () => {
  const box = document.createElement("div");

  const header = document.createElement("div");
  header.className = "header";
  box.appendChild(header);

  const butn = document.createElement("button");
  header.appendChild(butn);
  butn.className = "butn";
  butn.setAttribute("data-hover-text", "Add a Todo List");
  butn.addEventListener("click", () => {
    let serialNumber = todoListLibrary.length + 1;
    let arrowIcon = "▶";
    let newId = Math.floor(Math.random() * 12345);

    let nameInputField = "";

    let newTodo = todoFactory(serialNumber, arrowIcon, "", newId);
    todoListLibrary.push(newTodo);

    serialDesigner(bodyHead);
  });
  const body = document.createElement("div");
  body.className = "body";
  box.appendChild(body);

  const bodyHead = document.createElement("div");
  bodyHead.className = "bodyHead";
  body.appendChild(bodyHead);

  const bodyInfo = document.createElement("div");
  bodyInfo.className = "bodyInfo";
  body.appendChild(bodyInfo);

  serialDesigner(bodyHead);

  return box;
};
