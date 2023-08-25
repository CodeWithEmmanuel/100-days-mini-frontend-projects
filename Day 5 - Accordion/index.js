const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const currentlyOpen = document.querySelector(".accordion-content.open");
    const content = header.nextElementSibling;
    const indicator = header.querySelector(".accordion-indicator");

    if (currentlyOpen && currentlyOpen !== content) {
      currentlyOpen.style.maxHeight = null;
      currentlyOpen.classList.remove("open");
      currentlyOpen.previousElementSibling.querySelector(
        ".accordion-indicator"
      ).textContent = "+";
    }

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove("open");
      indicator.textContent = "+";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("open");
      indicator.textContent = "-";
    }
  });
});
