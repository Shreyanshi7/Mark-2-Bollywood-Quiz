var readlineSync = require('readline-sync');
var score = 0;

function welcome() {
  var userName = readlineSync.question("Whats your name?");
  console.log("Welcome " + userName + ", to the Bollywood Quiz!");
console.log("-------------------------------------------------")
}

var arr = [
  {
    question: 'Name a movie where Shahrukh Khan was the villain?',
    answer: 'Darr'
  },
  {
    question: 'Name the director of the film Satya?',
    answer: 'Ramgopal Verma',
  },
  {
    question: ' What is the name of Ritesh Deshmukh character in "Dhamaal"?',
    answer: 'Roy'
  },
  {
    question: 'Who plays the female lead in the movie Fashion?',
    answer: 'Priyanka Chopra'
  },
  {
    question: 'Which city hosts Bollywood?',
    answer: 'Mumbai'
  }
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right");
    score++;
  } else {
    console.log("Wrong");
  }
  console.log("Current score:", score);
}

function playNow() {
  for (i = 0; i < arr.length; i++) {
    play(arr[i].question, arr[i].answer);
  }
}


function finalScore() {
  console.log("Your final score is:", score);
}

welcome();
playNow();
finalScore();