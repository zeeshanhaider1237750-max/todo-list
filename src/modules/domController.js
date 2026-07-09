export const homeBox = () => {
  const homeContainer = document.createElement("div");

  const homeHead = document.createElement("div");
  homeContainer.appendChild(homeHead);

  const homeBody = document.createElement("div");
  homeContainer.appendChild(homeBody);

  const homeFoot = document.createElement("div");
  homeContainer.appendChild(homeFoot);

  const head = document.createElement("div");
  homeHead.appendChild(head);
  head.innerHTML = "HOME";

  const headText = document.createElement("div");
  homeHead.appendChild(headText);
  headText.innerHTML =
    "This Site allows you to enlist your Todo, recycle and reuse them. I means, make your time easy by mapping out, what you have to do. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo tenetur, ad dicta voluptates minus cum vel rem libero! Sed tenetur molestiae ad repellat nam iste in sit beatae recusandae?";

  const bodyText = document.createElement("div");
  homeBody.appendChild(bodyText);
  bodyText.innerHTML =
    "This site is easy, Click on project menu, and you will see your past todo's and can add more using Add Todo button in Project menu. <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo tenetur, ad dicta voluptates minus cum vel rem libero! Sed tenetur molestiae ad repellat nam iste in sit beatae recusandae?";

  const footText = document.createElement("div");
  homeFoot.appendChild(footText);
  footText.innerHTML =
    "Everything is structured and Every Todo remains there on the same Device.<br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo tenetur, ad dicta voluptates minus cum vel rem libero! Sed tenetur molestiae ad repellat nam iste in sit beatae recusandae?";

  homeContainer.style.display = "flex";
  homeContainer.style.flexDirection = "column";
  homeContainer.style.gap = "2.5vh";
  homeContainer.style.justifyContent = "space-around";
  homeContainer.style.alignItems = "center";
  homeContainer.style.padding = "4vw 4vh"
  homeContainer.style.height = "100%"
  homeContainer.style.color = "white";

  homeHead.style.display = "flex";
  homeHead.style.flexDirection = "column";
  homeHead.style.justifyContent = "center";
  homeHead.style.alignItems = "center";
  homeHead.style.textAlign = "center"
  homeHead.style.color = "red";
 
  head.style.fontSize = "2rem";
  head.style.color = "red";

  homeFoot.style.color = "yellow";
  homeFoot.style.display = "flex";
  homeFoot.style.flexDirection = "column";
  homeFoot.style.alignItems = "center";
  homeFoot.style.justifyContent = "center";
  homeFoot.style.textAlign = "center";

  headText.style.fontSize = "1.1rem";

  homeBody.style.display = "flex";
  homeBody.style.flexDirection = "column";
  homeBody.style.justifyContent = "center";
  homeBody.style.textAlign = "center";

  return homeContainer;
};
