const steps = document.querySelectorAll(".content");
const nextBtn = document.querySelectorAll(".next-btn");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("btn-accounts")) {
      document.getElementById("step-1").classList.toggle("next-step");
      document.getElementById("step-2").classList.toggle("next-step");
    } else if (button.classList.contains("btn-messaging")) {
      document.getElementById("step-2").classList.toggle("next-step");
      document.getElementById("step-3").classList.toggle("next-step");
    } else if (button.classList.contains("get_started-btn")) {
      document.getElementById("step-3").classList.toggle("next-step");
      document.getElementById("step-1").classList.toggle("next-step");
    }
  });
});
