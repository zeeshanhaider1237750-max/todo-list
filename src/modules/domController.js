import '../pages/home_page/home.css';
import '../pages/contribute_page/contribute.css';

export const homeBox = () => {

  const homeContainer = document.createElement("div");
  homeContainer.className = "homeContainer";

  const homeHead = document.createElement("div");
  homeContainer.appendChild(homeHead);
  homeHead.className = "homeHead";

  const homeBody = document.createElement("div");
  homeContainer.appendChild(homeBody);
  homeBody.className = "homeBody";

  const homeFoot = document.createElement("div");
  homeContainer.appendChild(homeFoot);
  homeFoot.className = "homeFoot";

  const head = document.createElement("div");
  homeHead.appendChild(head);
  head.innerHTML = "HOME";
  head.className = "head";

  const headText = document.createElement("div");
  homeHead.appendChild(headText);
  headText.className = "headText"
  headText.innerHTML =
    "This Site allows you to enlist your Todo, recycle and reuse them. I means, make your time easy by mapping out, what you have to do. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo tenetur, ad dicta voluptates minus cum vel rem libero! Sed tenetur molestiae ad repellat nam iste in sit beatae recusandae?";

  const bodyText = document.createElement("div");
  homeBody.appendChild(bodyText);
  bodyText.className = "bodyText";
  bodyText.innerHTML =
    "This site is easy, Click on project menu, and you will see your past todo's and can add more using Add Todo button in Project menu. <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo tenetur, ad dicta voluptates minus cum vel rem libero! Sed tenetur molestiae ad repellat nam iste in sit beatae recusandae?";

  const footText = document.createElement("div");
  homeFoot.appendChild(footText);
  footText.className = "footText";
  footText.innerHTML =
    "Everything is structured and Every Todo remains there on the same Device.<br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo tenetur, ad dicta voluptates minus cum vel rem libero! Sed tenetur molestiae ad repellat nam iste in sit beatae recusandae?";

  return homeContainer;
};
export const contributeBox = () => {
  const contributeContainer = document.createElement('div');
  contributeContainer.className = "contributeContainer";
  
  const contributeHead = document.createElement('div');
  contributeContainer.appendChild(contributeHead);
  contributeHead.innerHTML = "NO CONTRIBUTION's NEEDED";
  contributeHead.className = "contributeHead";

  const contributeBody = document.createElement('div');
  contributeContainer.appendChild(contributeBody);
  contributeBody.className = "contributeBody";
  contributeBody.innerHTML = "I am Glad that my Site allowed you to save yourself some time!";

  return  contributeContainer;
}