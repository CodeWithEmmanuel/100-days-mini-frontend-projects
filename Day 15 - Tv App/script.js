const menuButton = document.getElementById("menu-icon");
const menuItems = document.getElementById("sidebar");
const nonMenuItems = document.getElementById("content");

let showMenu = function () {
  const width = window.innerWidth;

  if (width <= 600) {
    menuItems.style.display = "block";
    nonMenuItems.style.opacity = "0.4";
    console.log("show menu");
  }
};

menuButton.addEventListener("click", showMenu);

let closeMenu = function () {
  const width = window.innerWidth;

  if (width <= 600) {
    menuItems.style.display = "none";
    nonMenuItems.style.opacity = "1";
    console.log("close menu");
  }
};
menuItems.addEventListener("click", closeMenu);
