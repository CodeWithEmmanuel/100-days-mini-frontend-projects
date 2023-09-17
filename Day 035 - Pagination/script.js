// const backBtn = document.getElementById("back-btn");
// const nextBtn = document.getElementById("next-btn");
// const num = document.getElementsByClassName("num");

// let goNext = true;
// let activeNum = 0;
// let notActiveNum;

// nextBtn.addEventListener("click", () => {
//   if (activeNum > 0 && activeNum <= num.length) {
//     notActiveNum = activeNum - 1;
//   } else notActiveNum = activeNum;

//   if (notActiveNum === activeNum) {
//     num[activeNum].style.color = "#ffffff";
//     num[activeNum].style.backgroundColor = "#98e6e1";
//     num[activeNum].style.borderRadius = "100%";
//     num[activeNum].style.transform = "scale(1.3)";

//     activeNum++;
//   } else if (activeNum < num.length && goNext === true) {
//     num[activeNum].style.color = "#ffffff";
//     num[activeNum].style.backgroundColor = "#98e6e1";
//     num[activeNum].style.borderRadius = "100%";
//     num[activeNum].style.transform = "scale(1.3)";

//     num[notActiveNum].style.color = "";
//     num[notActiveNum].style.backgroundColor = "";
//     num[notActiveNum].style.borderRadius = "";
//     num[notActiveNum].style.transform = "";

//     activeNum++;
//   }
// });

// backBtn.addEventListener("click", () => {
//   if (activeNum >= 0 && activeNum <= num.length) {
//     activeNum -= 1;
//     notActiveNum = activeNum + 1;
//   }

//   num[activeNum].style.color = "#ffffff";
//   num[activeNum].style.backgroundColor = "#98e6e1";
//   num[activeNum].style.borderRadius = "100%";
//   num[activeNum].style.transform = "scale(1.3)";

//   num[notActiveNum].style.color = "";
//   num[notActiveNum].style.backgroundColor = "";
//   num[notActiveNum].style.borderRadius = "";
//   num[notActiveNum].style.transform = "";
// });

const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const num = document.getElementsByClassName("num");

let activeNum = 0;

nextBtn.addEventListener("click", () => {
  if (activeNum >= 0 && activeNum < num.length - 1) {
    num[activeNum].style.color = "";
    num[activeNum].style.backgroundColor = "";
    num[activeNum].style.borderRadius = "";
    num[activeNum].style.transform = "";

    activeNum++;

    num[activeNum].style.color = "#ffffff";
    num[activeNum].style.backgroundColor = "#98e6e1";
    num[activeNum].style.borderRadius = "100%";
    num[activeNum].style.transform = "scale(1.3)";
  }
});

backBtn.addEventListener("click", () => {
  if (activeNum > 0 && activeNum < num.length) {
    num[activeNum].style.color = "";
    num[activeNum].style.backgroundColor = "";
    num[activeNum].style.borderRadius = "";
    num[activeNum].style.transform = "";

    activeNum--;

    num[activeNum].style.color = "#ffffff";
    num[activeNum].style.backgroundColor = "#98e6e1";
    num[activeNum].style.borderRadius = "100%";
    num[activeNum].style.transform = "scale(1.3)";
  }
});
