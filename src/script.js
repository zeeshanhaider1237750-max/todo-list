import './style.css';
import abouticon from './assets/icons/about-icon.svg';
import { homeBox } from './modules/domController.js';
import redDesign from './assets/images/red-design.jpg'
import {contributeBox} from './modules/domController.js';


const aboutIconImg = document.getElementById("aboutIcon");
aboutIconImg.src = abouticon;

const btn = document.querySelectorAll("button");

const centerContent = document.getElementById("center");

 centerContent.style.backgroundImage = `url(${redDesign})`;
 centerContent.style.backgroundSize = "cover";
 centerContent.style.backgroundPosition = "center";
 centerContent.style.backgroundRepeat = "no-repeat";
 centerContent.appendChild(homeBox());

btn.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === "Home"){
            centerContent.innerHTML = "";
            centerContent.appendChild(homeBox());
        }
        else if(button.textContent === "Contribute"){
            centerContent.innerHTML = "";
            centerContent.appendChild(contributeBox());
        }
    })
})