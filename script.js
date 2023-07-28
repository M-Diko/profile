const content = [
  [
    "<h4 style='text-align:center'>Applied Mathematics and Computer Science major currently working as a Junior Automation Tester for Adapt IT Education division. I work with Python and selenium to write test automation scripts, I do manual application software testing as well. I am currently working on a Javascript and C# courses to broaden my skills.</h4>",
    "<h4 style='text-align:center'>As an aspiring junior frontend software JavaScript developer, I am passionate about creating visually engaging and user-friendly web applications. With a solid foundation in HTML, CSS, and JavaScript</h4>",
    "React Native (build native mobile apps with React)",
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
    '<img style="display: block; margin: 0 auto;border-radius: 50%;width:200px;height:200px;" src="assets/uj.jpg" alt="uj" />',
    "<h3 style='text-align:center'>UNIVERSITY OF JOHANNESBURG</h3>",
    "<p style='text-align:center'>BSc Mathematical Sciences</p>",
    "<p style='text-align:center'>Majoring in Applied MAthematics and Computer Science</p>",
    "<br>",
    '<img style="display: block; margin: 0 auto;border-radius: 50%;width:200px;height:200px;" src="assets/stadio.png" alt="stadio" />',
    "<h3 style='text-align:center'>STADIO</h3>",
    "<p style='text-align:center'>Post Graduate Certificate in Education</p>",
    "<p style='text-align:center'>Specializing in Mathematics FET and SP Teaching</p>",
    "<br>",
    '<img style="display: block; margin: 0 auto;border-radius: 50%;width:200px;height:200px;" src="assets/Udemy.jpg" alt="udemy" />',
    "<h3 style='text-align:center'>UDEMY ONLINE CERTIFICATIONS </h3>",
    "<p style='text-align:center'>Post Graduate Certificate in Education</p>",
    "<p style='text-align:center'>Specializing in Mathematics FET and SP Teaching</p>",
    "<p style='text-align:center'>Post Graduate Certificate in Education</p>",
    "<p style='text-align:center'>Specializing in Mathematics FET and SP Teaching</p>",
    "<p style='text-align:center'>Post Graduate Certificate in Education</p>",
    "<p style='text-align:center'>Specializing in Mathematics FET and SP Teaching</p>"
  ],
  [
    "<h2 style='text-align:center'>BELOW ARE THE LIST OF FRONT END PROJECTS I AM BUSY WITH.</h2>",
      '<a href="https://www.google.com" ><h2>English to Korean Translater</h2></a>',
      '<a href="https://m-diko.github.io/100DaysOfCode_Proj8_ToDoList/" ><h2>TO DO LIST</h2></a>',
      '<a href="https://m-diko.github.io/BankingApp/" ><h2>BANK APP</h2></a>',
      '<a href="https://m-diko.github.io/ChatBot-Skeleton-/" ><h2>CHATBOT SKELETON</h2></a>',
      '<a href="https://m-diko.github.io/portfolio/" ><h2>MY PORTILIO</h2></a>',
      "<h6 style='text-align:center'>evidence of my work can be found in my github profile</h6>"
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
    //tabContent.style.backgroundImage = 'url("assets/edu.png")';
    displayContent(content[0]);
  } else if (btnId === "Work") {
    //tabContent.style.backgroundImage = 'url("assets/work.avif")';
    displayContent(content[1]);
  } else if (btnId === "Education"){
    //tabContent.style.backgroundImage = null;
    displayContent(content[2]);
  } else if (btnId === "Projects"){
    //tabContent.style.backgroundImage = null;
    displayContent(content[3]);
  }
}

displayContent(content[0]); // initially show this content
//tabContent.style.backgroundImage = 'url("assets/edu.png")'; //initially show this background image

btnAbout.addEventListener("click", handleClick);
btnWork.addEventListener("click", handleClick);
btnEducation.addEventListener("click", handleClick);
btnProjects.addEventListener("click", handleClick);
