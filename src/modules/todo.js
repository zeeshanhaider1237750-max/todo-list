import "../pages/todo/todo.css";

export let todoListFunction = () => {
    const todoContainer = document.createElement('div');
    todoContainer.className = "todoContainer";
    
    const headest = document.createElement('div');
    todoContainer.appendChild(headest);
    headest.className = "headest";
    
    const bodies = document.createElement('div');
    todoContainer.appendChild(bodies);
    bodies.className = "bodies";

    const footest = document.createElement('div');
    todoContainer.appendChild(footest); 
    footest.className = "footest";

    const titleBox = document.createElement('div');
    headest.appendChild(titleBox);
    titleBox.className = "titleBox";

    const dueDateBox = document.createElement('div');
    headest.appendChild(dueDateBox);
    dueDateBox.className = "dueDateBox";

    const pirorityBox = document.createElement('div');
    bodies.appendChild(pirorityBox);
    pirorityBox.className = "pirorityBox";

    const descriptionBox = document.createElement('div');
    bodies.appendChild(descriptionBox);
    descriptionBox.className = "descriptionBox";

    const noteBox = document.createElement('div');
    footest.appendChild(noteBox);
    noteBox.className = "noteBox";

    const checklistBox = document.createElement('div');
    footest.appendChild(checklistBox);
    checklistBox.className = "checklistBox";

    const titleHead = document.createElement('div');
    titleBox.appendChild(titleHead);
    titleHead.innerHTML = "Title";
    titleHead.className = "titleHead";

    const titleInput = document.createElement('input');
    titleBox.appendChild(titleInput);
    titleInput.className = "titleInput";
    titleInput.setAttribute('placeholder','Enter the title');
    
    const dueDateHead = document.createElement('div');
    dueDateBox.appendChild(dueDateHead);
    dueDateHead.innerHTML = "Due Date";
    dueDateHead.className = "dueDateHead";

    const dueDateInput = document.createElement('input');
    dueDateBox.appendChild(dueDateInput);
    dueDateInput.className = "dueDateInput";
    dueDateInput.setAttribute('placeholder', '');

    const pirorityHead = document.createElement('div');
    pirorityBox.appendChild(pirorityHead);
    pirorityHead.className = "pirorityHead";

    const pirorityInput = document.createElement('div');
    pirorityBox.appendChild(pirorityInput);
    pirorityInput.className = "pirorityInput";

    const descriptionHead = document.createElement('div');
    descriptionBox.appendChild(descriptionHead);
    descriptionHead.innerHTML = "Description";
    descriptionHead.className = "descriptionHead";

    const descriptionInput = document.createElement('textarea');
    descriptionBox.appendChild(descriptionInput);
    descriptionInput.className = "descriptionInput";
    
    const noteHead = document.createElement('div');
    noteBox.appendChild(noteHead);
    noteHead.className = "noteHead";
    noteHead.innerHTML = "Notes";

    const noteInput = document.createElement('textarea');
    noteBox.appendChild(noteInput);
    noteInput.className = "noteInput";

    const checklistHead = document.createElement('div');
    checklistBox.appendChild(checklistHead);
    checklistHead.className = "checklistHead";
    checklistHead.innerHTML = "Checklists"

    const checklistInput = document.createElement('textarea');
    checklistBox.appendChild(checklistInput);
    checklistInput.className = "checklistInput";

    return todoContainer;
}