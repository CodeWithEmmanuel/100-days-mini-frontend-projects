let text = document.getElementById("text");
let count = document.querySelector("#count");
let wordCount = document.querySelector("#word-count");
let charCount = document.querySelector("#char-count");

//count the number of words and characters from input
count.addEventListener("click", () => {
  //get text input from text area
  let inputInit = text.value;

  //remove line breaks and empty spaces from text input
  let input0 = inputInit.replace(/\n\n/g, " ");
  let input1 = inputInit.replace(/\n/g, "");
  let input = input0.replace(/\n/g, "");

  //get all the words and characters from text input into an array
  let wordsArr = input.split(" ");
  let charArr = [...input1];

  //display number of words and number of characters in text input
  wordCount.textContent = `${wordsArr.length} Words`;
  charCount.textContent = `${charArr.length} Characters`;
});
