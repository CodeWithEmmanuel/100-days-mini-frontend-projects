const searchIcon = document.getElementById("search-icon");
const contactsIcon = document.getElementById("contacts-icon");
const searchBar = document.getElementById("search-box");
const topBar = document.getElementById("top-bar");

let showSearch = function () {
  searchIcon.style.display = "none";
  contactsIcon.style.display = "none";
  searchBar.style.display = "block";
};

let closeSearch = function () {
  searchIcon.style.display = "block";
  contactsIcon.style.display = "block";
  searchBar.style.display = "none";
};

searchIcon.addEventListener("click", showSearch);
contactsIcon.addEventListener("click", showSearch);

const inbox = document.getElementById("container");
const goToChat = document.getElementsByClassName("chats");
const startChat = document.getElementById("chat-box");

let openChat = function () {
  inbox.style.display = "none";
  startChat.style.display = "grid";
};

for (let i = 0; i < goToChat.length; i++) {
  goToChat[i].addEventListener("click", openChat);
}

const sendMessage = document.getElementById("send-message");
const yourMessage = document.getElementById("message");
const chat = document.getElementById("chat-area");

let newMessage = function () {
  let messageEntry = document.createElement("p");
  messageEntry.innerText = yourMessage.value;
  messageEntry.style.textAlign = "right";
  chat.appendChild(messageEntry);
  yourMessage.value = "";
};

sendMessage.addEventListener("click", newMessage);

const goBack = document.getElementById("back-to-inbox");

let backToInbox = function () {
  inbox.style.display = "grid";
  startChat.style.display = "none";
};

goBack.addEventListener("click", backToInbox);
