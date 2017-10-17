// Load page
//$(document).ready(function() {

// Get elements

var timer = document.getElementById("counter");
var question_div = document.getElementById("question");
var choices_div = document.getElementById("answers");
var userPick;
var correctAnswer = 0;
var incorrectAnswer = 0;
var question = 0;
var count = 20; // 20 seconds per question

// Make an object with the questions and answers

    var marvelTrivia = [{
	question: "What is the Incredible Hulk's real name?",
	choices: ["Bucky Barnes", "Bruce Wayne", "Bruce Banner", "Steve Rogers" ],
	validAnswer: 2
}, {
	question:"Who is considered 'The First Avenger?'",
	choices: ["Iron Man", "Captain America", "Nick Fury", "Spiderman"],
	validAnswer: 1

}, {
	question:"Which co-creator of Marvel Comics makes regular cameo apperances in the films?",
	choices: ["Scott Summers", "Sebastian Stan", "Sam Jackson", "Stan Lee"],
	validAnswer: 3

}, {
	question:"Who played Peter Parker in 'Spider-Man: Homecoming?'",
	choices: ["Tobey Maguire", "Tom Holland", "Andrew Garfield", "Drake Bell"],
	validAnswer: 1

}, {
	question:"Which of these is NOT a member of the Fantastic 4?",
	choices: ["Reed Richards", "Pyro", "Sue Storm", "The Thing"],
	validAnswer: 1

 }, {
	question:"Where does Thor live?",
	choices: ["Midgard", "Jotenheim", "Asgard", "Valhalla"],
	validAnswer: 2

}, {
	question:"What powers Iron Man's suit?",
	choices: ["The Tesseract", "Arc Reactor", "Magnets", "The Mind Stone"],
	validAnswer: 1

}, {
	question:"What is Captain America's shield made of?",
	choices: ["Titanium", "Adamantium", "Carbonadium", "Vibranium"],
	validAnswer: 3

}

];

console.log(marvelTrivia);

// Need a question counter to track the question #

//var questionCounter = 0;

// Array containing user answers

//var userAnswer = [];

// Need a start button

// Need to display the question/possible answers

// Need to initiate the countdown 20 seconds per question

// Immediately move to the answer screen when an answer is selected

// Need to display the correct answer/reaction

// Need to move to the next question after displaying the answer 5 second delay

// Display total right/wrong answers

// Need a restart button

