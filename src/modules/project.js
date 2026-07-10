import { sr } from "date-fns/locale";
import "../pages/project_page/projectView.css";
import { isThisSecond } from "date-fns";
import { remove } from "lodash";

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
  butn.addEventListener('click', () => {
    let serialNumber = todoListLibrary.length + 1;
    let arrowIcon = "▶";

    let nameInputField = document.createElement('input');
    nameInputField.className = "nameInputField";

    let newTodo = todoFactory(serialNumber, arrowIcon, nameInputField);

    todoListLibrary.push(newTodo);

    let newHtmlRow = todoDom(newTodo);

    body.appendChild(newHtmlRow);
  }) 
  
  const body = document.createElement("div");
  body.className = "body";
  box.appendChild(body);
  
  return box;
};

let todoFactory = (serialNo, arrow, name) => {
  return {serialNo, arrow, name};
}

let todoDom = (todo) => {
  let todoRow = document.createElement('div');
  todoRow.className = "todoRow";

  let serial = document.createElement('div');
  todoRow.appendChild(serial);
  serial.textContent = todo.serialNo;
  serial.className = "serial";

  let arrow = document.createElement('div');
  todoRow.appendChild(arrow);
  arrow.textContent = todo.arrow;
  arrow.className = "arrow";

  let inputName = document.createElement('input');
  todoRow.appendChild(inputName);
  inputName.textContent = todo.name;
  inputName.className = "inputName";
  inputName.placeholder = "Input the Name of Your Todo and press Enter";
  inputName.setAttribute('required', '');
  inputName.setAttribute('maxlength', '50');

  let checkBox = document.createElement('div');
  todoRow.appendChild(checkBox);
  checkBox.className = "checkBox";

  let removeButton = document.createElement('div');
  todoRow.appendChild(removeButton);
  removeButton.className = "removeButton";
  removeButton.textContent = "Remove todo";

  checkBox.addEventListener('click', () => {
    if(checkBox.innerHTML === "" || checkBox.innerHTML === "✖"){
      checkBox.innerHTML = "✔";
    }
    else if(checkBox.innerHTML === "✔"){
      checkBox.innerHTML = "✖"
    }
  })

  return todoRow;
}