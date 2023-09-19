const questionNum = document.getElementById("question-number");
const question = document.getElementById("question-content");
const nextBtn = document.getElementById("next");
const quizContent = document.getElementById("quiz");
const answers = document.getElementById("answers");
const startBtn = document.getElementById("start-quiz");
const startPage = document.getElementById("startquiz");

let totalScore = 0;

let quizzes = [
  {
    quizNum: "Question 1",
    quizQuestion: "What is the main purpose of HTML in web development?",
    optionA: "A. Manipulating data on the server.",
    optionB: "B. Creating and controlling animations.",
    optionC: "C. Structuring content on the web.",
    optionD: "D. Managing databases.",
    correctAnswer: "C. Structuring content on the web.",
  },
  {
    quizNum: "Question 2",
    quizQuestion:
      "Which of the following describes CSS's role in web development?",
    optionA: "A. Server-side scripting.",
    optionB: " B. Storing data.",
    optionC: "C. Styling and layout of web content.",
    optionD: "D. Processing form submissions.",
    correctAnswer: "C. Styling and layout of web content.",
  },
  {
    quizNum: "Question 3",
    quizQuestion: "What is the main purpose of HTML in web development?",
    optionA: "A. Manipulating data on the server.",
    optionB: "B. Creating and controlling animations.",
    optionC: "C. Structuring content on the web.",
    optionD: "D. Managing databases.",
    correctAnswer: "C. Structuring content on the web.",
  },
  {
    quizNum: "Question 4",
    quizQuestion: "Which of the following is a JavaScript framework?",
    optionA: "A. Bootstrap",
    optionB: "B. Angular",
    optionC: "C. SASS",
    optionD: "D. Apache",
    correctAnswer: "B. Angular",
  },
  {
    quizNum: "Question 5",
    quizQuestion: "Which of the following is not a JavaScript data type?",
    optionA: "A. String",
    optionB: "B. Number",
    optionC: "C. Table",
    optionD: "D. Boolean",
    correctAnswer: "C. Table",
  },
  {
    quizNum: "Question 6",
    quizQuestion:
      "Which event fires whenever a button is clicked in JavaScript?",
    optionA: "A. onhover",
    optionB: "B. onclick",
    optionC: "C. onbutton",
    optionD: "D. onpress",
    correctAnswer: "B. onclick",
  },
  {
    quizNum: "Question 7",
    quizQuestion: "How do you create a function in JavaScript?",
    optionA: "A. function = myFunction()",
    optionB: "B. function:myFunction()",
    optionC: "C. define myFunction()",
    optionD: "D. function myFunction()",
    correctAnswer: "D. function myFunction()",
  },
  {
    quizNum: "Question 8",
    quizQuestion: "How can you add a comment in JavaScript?",
    optionA: "A. <!--This is a comment-->",
    optionB: "B. // This is a comment",
    optionC: "C. -- This is a comment --",
    optionD: "D. ** This is a comment **",
    correctAnswer: "B. // This is a comment",
  },
  {
    quizNum: "Question 9",
    quizQuestion: "What will the following code return: Boolean(10 > 9)?",
    optionA: "A. NaN",
    optionB: "B. False",
    optionC: "C. True",
    optionD: "D. Undefined",
    correctAnswer: "C. True",
  },
  {
    quizNum: "Question 10",
    quizQuestion: "What is the correct way to write a JavaScript array?",
    optionA: "A. var colors = (1:'red', 2:'green', 3:'blue')",
    optionB: "B. var colors = 'red', 'green', 'blue'",
    optionC: "C. var colors = ['red', 'green', 'blue']",
    optionD: "D. var colors = {1:'red', 2:'green', 3:'blue'}",
    correctAnswer: "C. var colors = ['red', 'green', 'blue']",
  },
  {
    quizNum: "Question 11",
    quizQuestion: "JavaScript is a ___ -side programming language.",
    optionA: "A. Client",
    optionB: "B. Server",
    optionC: "C. Both client and server",
    optionD: "D. None",
    correctAnswer: "C. Both client and server",
  },
  {
    quizNum: "Question 12",
    quizQuestion: "How do you declare a JavaScript variable?",
    optionA: "A. variable carName;",
    optionB: "B. var carName;",
    optionC: "C. v carName;",
    optionD: "D. declare carName;",
    correctAnswer: "B. var carName;",
  },
  {
    quizNum: "Question 13",
    quizQuestion: "Which operator is used to assign a value to a variable?",
    optionA: "A. *",
    optionB: "B. -",
    optionC: "C. =",
    optionD: "D. X",
    correctAnswer: "C. =",
  },
  {
    quizNum: "Question 14",
    quizQuestion: "What will the code `alert(typeof NaN)` display?",
    optionA: "A. 'undefined'",
    optionB: "B. 'number'",
    optionC: "C. 'NaN'",
    optionD: "D. 'object'",
    correctAnswer: "B. 'number'",
  },
  {
    quizNum: "Question 15",
    quizQuestion:
      "Which of the following is not a reserved word in JavaScript?",
    optionA: "A. interface",
    optionB: "B. private",
    optionC: "C. throws",
    optionD: "D. program",
    correctAnswer: "D. program",
  },
  {
    quizNum: "Question 16",
    quizQuestion:
      "How do you call a function named 'myFunction' in JavaScript?",
    optionA: "A. call function myFunction()",
    optionB: "B. myFunction()",
    optionC: "C. call myFunction",
    optionD: "D. Execute myFunction()",
    correctAnswer: "B. myFunction()",
  },
  {
    quizNum: "Question 17",
    quizQuestion:
      "Which of the following methods can be used to get the length of an array named 'myArray'?",
    optionA: "A. myArray.size()",
    optionB: "B. myArray.len()",
    optionC: "C. myArray.length()",
    optionD: "D. myArray.length",
    correctAnswer: "D. myArray.length",
  },
  {
    quizNum: "Question 18",
    quizQuestion:
      "Which built-in method removes the last element from an array and returns that element?",
    optionA: "A. shift()",
    optionB: "B. pop()",
    optionC: "C. push()",
    optionD: "D. none of the above",
    correctAnswer: "B. pop()",
  },
  {
    quizNum: "Question 19",
    quizQuestion: "Which of the following can't be a JavaScript variable name?",
    optionA: "A. _private",
    optionB: "B. $sign",
    optionC: "C. 2names",
    optionD: "D. jsFunction",
    correctAnswer: "C. 2names",
  },
  {
    quizNum: "Question 20",
    quizQuestion:
      "How to write an `if` statement for executing some code if 'i' is NOT equal to 5?",
    optionA: "A. if i =! 5 then",
    optionB: "B. if (i != 5)",
    optionC: "C. if i <> 5",
    optionD: "D. if i not= 5",
    correctAnswer: "B. if (i != 5)",
  },
  {
    quizNum: "Question 21",
    quizQuestion: "Which of the following is not an ECMAScript (ES6) feature?",
    optionA: "A. Promises",
    optionB: "B. Multithreading",
    optionC: "C. Arrow functions",
    optionD: "D. Classes",
    correctAnswer: "B. Multithreading",
  },
  {
    quizNum: "Question 22",
    quizQuestion:
      "What method can be used to parse a JSON string into a JavaScript object?",
    optionA: "A. JSON.stringify()",
    optionB: "B. JSON.decode()",
    optionC: "C. JSON.parse()",
    optionD: "D. JSON.toJS()",
    correctAnswer: "C. JSON.parse()",
  },
];

let currentQuiz = 0;
let pickAnswer = true;

let nextQuestion = function () {
  pickAnswer = true;
  if (currentQuiz < quizzes.length) {
    questionNum.innerText = quizzes[currentQuiz].quizNum;

    question.innerText = quizzes[currentQuiz].quizQuestion;

    let options = document.getElementsByClassName("option");
    for (i = 0; i < options.length; i++) {
      options[i].style.backgroundColor = "";
      options[i].style.color = "";
      options[0].innerText = quizzes[currentQuiz].optionA;
      options[1].innerText = quizzes[currentQuiz].optionB;
      options[2].innerText = quizzes[currentQuiz].optionC;
      options[3].innerText = quizzes[currentQuiz].optionD;
    }
    console.log(currentQuiz);
  } else {
    alert(`End of Quiz, your score is ${totalScore}`);
  }
};
nextBtn.addEventListener("click", nextQuestion);

let selectAnswer = function () {
  console.log(currentQuiz);
  let option = document.getElementsByClassName("option");
  for (let i = 0; i < option.length; i++) {
    let selectedAnswer = option[i];

    selectedAnswer.addEventListener("click", function () {
      let theCorrectAnswer =
        selectedAnswer.innerText === quizzes[currentQuiz].correctAnswer;

      if (currentQuiz <= quizzes.length) {
        if (pickAnswer === true && theCorrectAnswer === true) {
          console.log(selectedAnswer.innerText);
          console.log(quizzes[currentQuiz].correctAnswer);
          console.log(theCorrectAnswer);
          selectedAnswer.innerText = "Correct";
          selectedAnswer.style.backgroundColor = "#37FF1C";
          selectedAnswer.style.color = "#030841";
          totalScore += 1;
          pickAnswer = false;
          return (currentQuiz += 1);
        } else if (pickAnswer === true && theCorrectAnswer === false) {
          console.log(selectedAnswer.innerText);
          console.log(quizzes[currentQuiz].correctAnswer);
          console.log(theCorrectAnswer);
          selectedAnswer.innerText = "Wrong";
          selectedAnswer.style.backgroundColor = "#F80000";
          selectedAnswer.style.color = "#e3e5f6";
          pickAnswer = false;
          return (currentQuiz += 1);
        }
      }
    });
  }
};

window.addEventListener("DOMContentLoaded", selectAnswer);

let startQuiz = function () {
  console.log("Start");
  startPage.style.display = "none";
  quizContent.style.display = "block";
  nextQuestion();
};

startBtn.addEventListener("click", startQuiz);
