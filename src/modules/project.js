import "../pages/project_page/projectView.css";

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
  
  const body = document.createElement("div");
  body.className = "body";
  box.appendChild(body);
  // body.appendChild = ;
  return box;
};
