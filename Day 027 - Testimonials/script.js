const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");
const reviewsContent = document.getElementById("reviews-content");
const reviews = document.getElementsByClassName("review");
const dots = document.getElementsByClassName("dots");

let currentReview = 0;

let swipeFront = function () {
  reviews[currentReview].style.display = "none";

  dots[currentReview].style.backgroundColor = "#000000";

  currentReview += 1;

  if (currentReview >= reviews.length) {
    currentReview = 0;
  }
  reviews[currentReview].style.display = "block";

  dots[currentReview].style.backgroundColor = "#ffffff";
};

let swipeBack = function () {
  reviews[currentReview].style.display = "none";

  dots[currentReview].style.backgroundColor = "#000000";

  currentReview -= 1;

  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  reviews[currentReview].style.display = "block";

  dots[currentReview].style.backgroundColor = "#ffffff";
};

nextBtn.addEventListener("click", swipeFront);

backBtn.addEventListener("click", swipeBack);
