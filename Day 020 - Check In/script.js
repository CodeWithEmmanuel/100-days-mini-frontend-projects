let currentContent = document.getElementById("container");
const toggleDark = document.getElementById("dark-mode");
const toggleLight = document.getElementById("light-mode");

let darkMode = function () {
  currentContent.style.backgroundColor = "#3A4C7C";
  currentContent.style.color = "#B7BFE2";
  document.body.style.backgroundColor = "#222222";
};

let lightMode = function () {
  currentContent.style.backgroundColor = "";
  currentContent.style.color = "";
  document.body.style.backgroundColor = "";
};

toggleDark.addEventListener("click", darkMode);

toggleLight.addEventListener("click", lightMode);
