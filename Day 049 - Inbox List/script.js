const openMessageBtn = document.querySelector(".notifications");
const allMessages = document.querySelector(".content");

openMessageBtn.addEventListener("click", () => {
  openMessageBtn.classList.toggle("hidden");
  allMessages.classList.toggle("hidden");
});

document.addEventListener("keydown", (e) => {
  e.preventdefault;

  if (e.key === "Escape" && openMessageBtn.classList.contains("hidden")) {
    openMessageBtn.classList.toggle("hidden");
    allMessages.classList.toggle("hidden");
  }
});
