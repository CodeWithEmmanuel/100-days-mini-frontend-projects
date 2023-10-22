const modeBtn = document.querySelector(".mode");

modeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const bodyEl = document.querySelector("body");

  bodyEl.classList.toggle("light-mode");

  if (bodyEl.classList.contains("light-mode")) {
    modeBtn.textContent = "Dark Mode";
  } else {
    modeBtn.textContent = "Light Mode";
  }
});
