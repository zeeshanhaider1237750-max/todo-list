import { sr } from "date-fns/locale";
import "../pages/project_page/projectView.css";
import { isThisSecond } from "date-fns";
import { remove } from "lodash";
import { todoListFunction } from "../modules/todo.js";

let todoListLibrary = [];

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

  return projectContainer;
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

    let nameInputField = document.createElement("input");
    nameInputField.className = "nameInputField";

    let newId = Math.floor(Math.random()*12345);

    let newTodo = todoFactory(serialNumber, arrowIcon, nameInputField, newId);

    todoListLibrary.push(newTodo);

    let newHtmlRow = todoDom(newTodo);

    bodyHead.appendChild(newHtmlRow);
    return arrowIcon;
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

  return box;
};

let todoFactory = (serialNo, arrow, name, id) => {
  return { serialNo, arrow, name };
};

let todoDom = (todo) => {
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
  inputName.textContent = todo.name;
  inputName.className = "inputName";
  inputName.placeholder = "Input the Name of Your Todo and press Enter";
  inputName.setAttribute("required", "");
  inputName.setAttribute("maxlength", "50");

  let checkBox = document.createElement("div");
  todoRowHead.appendChild(checkBox);
  checkBox.className = "checkBox";

  let removeButton = document.createElement("div");
  todoRowHead.appendChild(removeButton);
  removeButton.className = "removeButton";
  removeButton.textContent = "Remove todo";

  let todoId;
  todoId = todo.id

  // removeButton.addEventListener('click', () => {
  //   serial = todoListLibrary.length - 1;
  //   arrow = "";    
  //   inputName = "";
  //   let removeTodo = todoFactory(serial, arrow, inputName);
  //   todoListLibrary.

  // })

  checkBox.addEventListener("click", () => {
    if (checkBox.innerHTML === "" || checkBox.innerHTML === "✖") {
      checkBox.innerHTML = "✔";
    } else if (checkBox.innerHTML === "✔") {
      checkBox.innerHTML = "✖";
    }
  });
  arrow.addEventListener("click", () => {
    if (arrow.innerHTML === "▶") {
      arrow.innerHTML = ">";
      todoRowBody.appendChild(todoListFunction());
      return todoRowBody;
    } else if (arrow.innerHTML === ">") {
      arrow.innerHTML = "▶";
      todoRow.remove(todoRowBody);
      return todoRowBody;
    }
  });
  return todoRow;
};
