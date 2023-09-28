let mainContent = document.querySelector("#main");
let votingContent = document.querySelector("#voting-content");
let voteAllBtn = document.querySelector("#view-all-btn");
let voteBtn = document.querySelectorAll(".container-content");
let voteHeader = document.querySelector("#vote-header");
let currentChallenge = document.querySelectorAll(".current-challenge");
let voteNowBtn = document.querySelector("#vote-button");

// Show all challenges when view all is clicked
voteAllBtn.addEventListener("click", () => {
  mainContent.classList.toggle("view-all");

  if (mainContent.classList.contains("view-all")) {
    voteAllBtn.textContent = "View All";
  } else {
    voteAllBtn.textContent = "Show Less";
  }
});

//open voting page
for (let i = 0; i < currentChallenge.length; i++) {
  voteBtn[i].addEventListener("click", () => {
    mainContent.classList.toggle("challenge-vote");
    votingContent.classList.toggle("all-challenges");
    voteHeader.textContent = `${currentChallenge[i].textContent}`;
  });
}

// Cast Vote
voteNowBtn.addEventListener("click", () => {
  alert(`Your Vote for ${voteHeader.textContent} is successful`);
  mainContent.classList.toggle("challenge-vote");
  votingContent.classList.toggle("all-challenges");
});
