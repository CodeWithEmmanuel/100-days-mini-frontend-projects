const list = document.querySelectorAll("li");
const listItems = [...list];

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("completed");
  });
});
