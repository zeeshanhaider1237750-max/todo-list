import "./style.css";
import abouticon from "./assets/icons/about-icon.svg";
import { homeBox } from "./modules/domController.js";
import { contributeBox } from "./modules/domController.js";
import { projectBox } from "./modules/project.js";

const aboutIconImg = document.getElementById("aboutIcon");
aboutIconImg.src = abouticon;

const btn = document.querySelectorAll("button");

const centerContent = document.getElementById("center");

centerContent.appendChild(homeBox());

btn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Home") {
      centerContent.innerHTML = "";
      centerContent.appendChild(homeBox());
    } 
    else if (button.textContent === "Contribute"){
      centerContent.innerHTML = "";
      centerContent.appendChild(contributeBox());
    }
    else if(button.textContent === "Projects"){
      centerContent.innerHTML = "";
      centerContent.appendChild(projectBox());
    }
  });
});
