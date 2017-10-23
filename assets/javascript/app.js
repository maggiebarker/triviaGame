// Load page
$(document).ready(function() {
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
    question:"Which co-creator of Marvel Comics makes regular cameo appearances in the films?",
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
    question:"Dr. Strange uses which relic to bend time?",
    choices: ["Astral Planes",
    "Eye of Agamotto",
    "Cloak of Levitation",
    "Dormammu"],
    correctAnswer: "Eye of Agamotto",
    img: "./assets/images/doctorstrange.jpg"
  }, {
    question:"Thor is the crown prince of which realm?",
    choices: ["Midgard",
    "Jotenheim",
    "Asgard",
    "Valhalla"],
    correctAnswer: "Asgard",
    img: "./assets/images/asgard.jpg"
  }, {
    question:"What energy source powers Iron Man's suit?",
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
//Track unanswered questions as incorrect
    incorrectAnswer++
    $("#question").empty();
    $("#question").append("<h1>Time's Up!</h1")
    count = 20;
    wrongRight()
// Need to move to the next question after displaying the answer 3 second delay
    setTimeout(nextQuestion, 3000)
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
//Put questions in the question div and count the questions asked
  $("#start_button").hide();
  trivia = marvelTrivia[question]
  $('#question').html("<h3>" + trivia.question + "</h3><br>");
  questionsAsked++
//Turn the answers into buttons
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
  //stop the clock
  clearInterval(theClock);
  //reset the clock variable
  count = 20;
  //increment so we can have next question
  question++
  //gets new question and stops script when all questions have run
  if (questionsAsked < marvelTrivia.length){
  	renderQuestion()
  }else{
  	score();
  }
}

function wrongRight() {
  var answerDOM = $("#answers");
  var questionDOM = $("#question");
  //clear the answer div
  answerDOM.empty();
  //Need to display the correct answer/reaction
  answerDOM.append("<h3>The correct answer is "+ marvelTrivia[question].correctAnswer + "</h3>");
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
    console.log(questionsAsked + " asked");
//Check for correct answer
  if (clickedBtn == trivia.correctAnswer ) {
    rightAnswer++
// Immediately move to the answer screen when an answer is selected
    $("#question").empty()
    $("#question").append("<h1>Correct!</h1")
    console.log(rightAnswer + " right; " + incorrectAnswer + " wrong");
//Call our function that displays the correct answer
    wrongRight()
    //wait a few seconds then load next question
    setTimeout(nextQuestion, 3000)
  }else if(clickedBtn != trivia.correctAnswer) {
    incorrectAnswer++
    $("#question").empty()
    $("#question").append("<h1>Incorrect!</h1")
    console.log(rightAnswer + " right; " + incorrectAnswer + " wrong");
//After displaying answer reaction, move to next question
    wrongRight()
    setTimeout(nextQuestion, 3000)
  }
});

//Display total right/wrong answers and restart
function score(){
	$("#countdown").empty()
	$("#question").empty()
	$("#answers").empty()
	$("#question").append("<h1>Final Score:<h1>" + rightAnswer + "/10</h>");
	  var gif = "src='./assets/images/another2.gif'";
	$("#answers").html("<img "+ gif + "/>");	
	restart();
	}

function restart(){
//Dynamically create a reset button
	 var resetBtn = $("<button>");
	   resetBtn.addClass("btn btn-basic btn-block");
	   resetBtn.text("Click to play again!");
//Place the reset button in the countdown div
	$("#countdown").append(resetBtn, "<hr>");
//onclick event bringing the first page of the game back
	$(resetBtn).click(function() {
  	 	location.reload();	  		
	});
  }
});