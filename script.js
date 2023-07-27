const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "<h2>Tab 2 Content</h2>",
      "<h2>Tab 2 Content</h2>",
      "<h2>Tab 2 Content</h2>",
      '<a href="https://www.google.com" >Visit Google</a>'
  ]
];

const btnAbout = document.getElementById("About");
const btnWork = document.getElementById("Work");
const btnEducation = document.getElementById("Education");
const btnProjects = document.getElementById("Projects");
const tabContent = document.getElementById("tab-content");

function displayContent(items) {
  let listContent = "";
  for (const item of items) {
    listContent += `<li>${item}</li>`;
  }
  const list = document.createElement("ul");
  tabContent.innerHTML = ""; // clear existing content
  list.innerHTML = listContent; // insert new content
  tabContent.append(list);
}

function highlightButton(btn) {
  // Clear all existing styling / highlights
  btnAbout.className = "";
  btnWork.className = "";
  btnEducation.className = "";
  btnProjects.className = "";
  btn.className = "active"; // set new style / highlight
}

function handleClick(event) {
  const btnId = event.target.id;
  const tabContent = document.getElementById('tab-content');

  highlightButton(event.target);
  
  if (btnId === "About") {
    tabContent.style.backgroundImage = 'url("edu.png")';
    displayContent(content[0]);
  } else if (btnId === "Work") {
    tabContent.style.backgroundImage = 'url("work.avif")';
    displayContent(content[1]);
  } else if (btnId === "Education"){
    tabContent.style.backgroundImage = null;
    displayContent(content[2]);
  } else if (btnId === "Projects"){
    tabContent.style.backgroundImage = null;
    displayContent(content[3]);
  }
}

displayContent(content[0]); // initially show this content
tabContent.style.backgroundImage = 'url("edu.png")'; //initially show this background image

btnAbout.addEventListener("click", handleClick);
btnWork.addEventListener("click", handleClick);
btnEducation.addEventListener("click", handleClick);
btnProjects.addEventListener("click", handleClick);
