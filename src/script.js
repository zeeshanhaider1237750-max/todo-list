import './style.css';
import abouticon from './assets/icons/about-icon.svg';
import { homeBox } from './modules/domController.js';
import redDesign from './assets/images/red-design.jpg'

const aboutIconImg = document.getElementById("aboutIcon");
aboutIconImg.src = abouticon;

const centerContent = document.getElementById("center");

if(centerContent){
    centerContent.appendChild(homeBox());
}
 centerContent.style.backgroundImage = `url(${redDesign})`;
 centerContent.style.backgroundSize = "cover";
 centerContent.style.backgroundPosition = "center";
 centerContent.style.backgroundRepeat = "no-repeat";