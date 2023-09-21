const continueBtn = document.getElementById("continue-btn");
const progressBar = document.getElementById("course-progress");
const progressLevel = document.getElementById("progress-percent");

let increaseProgress = function () {
  let currentLevel = Number(progressBar.getAttribute("value"));

  if (currentLevel < 100 && currentLevel >= 0) {
    currentLevel += 10;
  }
  progressValue = currentLevel.toString();
  progressLevel.innerText = `${progressValue}%`;
  progressBar.setAttribute("value", `${progressValue}`);
};

continueBtn.addEventListener("click", increaseProgress);
