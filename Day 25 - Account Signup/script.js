let accountStep = document.getElementById("account-content");
let interestsStep = document.getElementById("interests-content");
let interestStepHeading = document.getElementById("step-heading");
let profileStep = document.getElementById("Profile-content");

const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");

let previous = function () {
  interestsStep.style.display = "none";
  interestStepHeading.style.display = "none";
  accountStep.style.display = "block";
  profileStep.style.display = "none";
  backBtn.style.display = "none";
  nextBtn.style.display = "none";
};

let next = function () {
  interestsStep.style.display = "none";
  interestStepHeading.style.display = "none";
  accountStep.style.display = "none";
  profileStep.style.display = "block";
  backBtn.style.display = "flex";
  nextBtn.style.display = "none";
};

backBtn.addEventListener("click", previous);
nextBtn.addEventListener("click", next);
