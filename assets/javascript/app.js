// Make an object with the questions and answers
var marvelTrivia = [{
    question: "What is the Incredible Hulk's real name?",
    choices: ["Bucky Barnes",
    "Bruce Wayne",
    "Bruce Banner",
    "Steve Rogers" ],
    correctAnswer: "Bruce Banner",
    img: "./assets/images/hulk.jpg"
  }, {
    question:"Who is considered 'The First Avenger?'",
    choices: ["Iron Man",
    "Captain America",
    "Nick Fury",
    "Spiderman"],
    correctAnswer: "Captain America",
    img: "./assets/images/captainamerica.jpg"
  }, {
    question:"Which co-creator of Marvel Comics makes regular cameo apperances in the films?",
    choices: ["Scott Summers",
    "Sebastian Stan",
    "Sam Jackson",
    "Stan Lee"],
    correctAnswer: "Stan Lee",
    img: "./assets/images/stanlee.jpg"

  }, {
    question:"Who played Peter Parker in 'Spider-Man: Homecoming?'",
    choices: ["Tom Holland",
    "Tobey Maguire",
    "Andrew Garfield",
    "Drake Bell"],
    correctAnswer: "Tom Holland",
    img: "./assets/images/tomholland.jpg"

  }, {
    question:"Which of these is NOT a member of the Fantastic 4?",
    choices: ["Mr. Fantastic",
    "Pyro",
    "Invisible Woman",
    "The Thing"],
    correctAnswer: "Pyro",
    img: "./assets/images/fantastic4.jpg"

  }, {
    question:"Where does Thor live?",
    choices: ["Midgard",
    "Jotenheim",
    "Asgard",
    "Valhalla"],
    correctAnswer: "Asgard",
    img: "./assets/images/asgard.jpg"

  }, {
    question:"What fuel source powers Iron Man's suit?",
    choices: ["The Tesseract",
    "Arc Reactor",
    "Magnets",
    "The Mind Stone"],
    correctAnswer: "Arc Reactor",
    img: "./assets/images/arcreactor.jpg"

  }, {
    question:"What is Captain America's shield made of?",
    choices: ["Titanium",
    "Adamantium",
    "Carbonadium",
    "Vibranium"],
    correctAnswer: "Vibranium",
    img: "./assets/images/vibranium.jpg"

  }, {
    question:"Which film featured the first appearance of the Black Panther?",
    choices: ["Thor: Ragnarok",
    "The Avengers: Age of Ultron",
    "Captain America: Civil War",
    "Iron Man 3"],
    correctAnswer: "Captain America: Civil War",
    img: "./assets/images/blackpanther.jpg"

  }, {
    question:"Which infinity stone gives Vision his power?",
    choices: ["Mind Stone",
    "Soul Stone",
    "Power Stone",
    "Time Stone"],
    correctAnswer: "Mind Stone",
    img: "./assets/images/vision.jpg"

  }
];
console.log(marvelTrivia);
// Load page
//$(document).ready(function() {

// Get elements

var userPick;
var rightAnswer = 0;
var incorrectAnswer = 0;
var question= 0;
var questionsAsked = 0;
var theClock;
var count = 20; // 30 seconds per question
var questionCounter = 0;
var userAnswer = [];
var trivia;

// Need a start button

$("#start_button").click(function() {
  renderQuestion()
  console.log(questionsAsked + " asked")
});

function timer() {
	theClock = setInterval(twentySeconds, 1000);
};

function twentySeconds() {
  if (count === 0) {
    clearInterval(theClock);
    count = 20;
    wrongRight()
// Need to move to the next question after displaying the answer 4 second delay
    setTimeout(nextQuestion, 4000)
  }
  if (count > 0) {
    count--;
  }
  $("#countdown").html("<h1>Time Remaining: " + count + "</h1><hr>");
};

function renderQuestion() {
  $("#countdown").html("<h1>Time Remaining: " + count + "</h1><hr>");
  var answerDOM = $('#answers');
  answerDOM.empty()
  timer();
  //grab the id of where we are putting this stuff
  $("#start_button").hide();
  trivia = marvelTrivia[question]
  $('#question').html("<h3>" + trivia.question + "<br></h3>");
  questionsAsked++
  // answerDOM.append(trivia.choices[0])
  for (var i = 0; i < trivia.choices.length; i++) {
    var answerBtn = $("<button>");
    answerBtn.addClass("btn-group-vertical");
    answerBtn.attr("data-answer", trivia.choices[i]);
    answerBtn.text(trivia.choices[i]);
    answerDOM.append(answerBtn);
  }
}

// Need to initiate the countdown 20 seconds per question
function nextQuestion() {
//   questionsAsked++

  //stop the clock
  clearInterval(theClock);
  //reset the clock variable
  count = 20;
  //increnment so we can have next question
  question++
  //gets new question
  renderQuestion()
}

function wrongRight() {
  var answerDOM = $("#answers");
  var questionDOM = $("#question");
  //clear the answer div
  answerDOM.empty();
  //questionDOM.empty()
  // Need to display the correct answer/reaction
  answerDOM.append("<h3>The correct answer is "+ marvelTrivia[question].correctAnswer + "</h3>");
  //the correct answer is
  //show them the right img
  var img = $("<img>");
  img.attr("src", marvelTrivia[question].img)
  answerDOM.append(img)
}

//user clicks on a button
$('#answers').on("click", ".btn-group-vertical", function(){
  clearInterval(theClock);
  //grab the button
  //get the value
  var clickedBtn = $(this).attr("data-answer")
    console.log(clickedBtn);
  //  questionsAsked++
    console.log(questionsAsked + " asked");
  // then see if button they clicked on is the answer or not
  if (clickedBtn == trivia.correctAnswer ) {
    rightAnswer++
// Immediately move to the answer screen when an answer is selected
    $("#question").empty()
    $("#question").append("<h1>Correct!</h1")
    console.log(rightAnswer + " right");
    //if it was tell user they got it correctAnswer
      //clear the answer div
      //tell them what the correct answer
      //show them the right img
    wrongRight()
    //wait a few seconds then load next questions
    setTimeout(nextQuestion, 4000)
  }else if(clickedBtn != trivia.correctAnswer) {
    incorrectAnswer++
    $("#question").empty()
    $("#question").append("<h1>Incorrect!</h1")
    console.log(incorrectAnswer + " wrong");
    //if it was not the correct answer
    //tell them they got it wrong;
    //wait a few seconds then load next questions
    wrongRight()
    setTimeout(nextQuestion, 4000)
  }else if(clickedBtn == 0) {
  	incorrectAnswer++
  	$("#question").empty()
    $("#question").append("<h1>Incorrect!</h1")
  	console.log(incorrectAnswer + " no choice")
  }


// Display total right/wrong answers and restart
/*function score(){
	questionsAsked = 10
	  	$("#countdown").empty()
		$("#question").empty()
		$("#answers").empty()
		$("#answers").append("<h4>Right: " + rightAnswer + "<br>Wrong: " + incorrectAnswer + "</h4>");
		}*/
	});

//function restart()


