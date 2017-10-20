// Load page
//$(document).ready(function() {

// Get elements

var timer = document.getElementById("counter");
var questions = document.getElementById("question");
var multChoice = document.getElementById("answers");
var start = document.getElementById("start_button");
var userPick;
var correctAnswer = 0;
var incorrectAnswer = 0;
var question = 0;
var count = 20; // 20 seconds per question

// Need a start button

$("#start_button").click(function() {
    $('#question').html("<h3>" + trivia.question + "<br></h3>" + "<h4><br>" + trivia.choices + "</h4>");
    $("#start_button").hide();
    $('#countdown').html("<h1>Time Remaining: " + count + "</h1><hr>")
		var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
			timer()
				count=count-1
  				if (count <= 0)
  				{
     			clearInterval(counter);
     				//counter ended, go to next question
     			return;
  				}
	//Do code for showing the number of seconds here
  			timer() 
  				count=count-1;
  				if (count <= 0)
  				{
     			clearInterval(counter);
     			return;
  				}
			$("#countdown").innerHTML=count + " seconds";
		
}); 

// Make an object with the questions and answers

    var marvelTrivia = [{
	question: "What is the Incredible Hulk's real name?",
	choices: ["a: Bucky Barnes", 
			  "<br>b: Bruce Wayne", 
			  "<br>c: Bruce Banner", 
			  "<br>d: Steve Rogers" ],
	validAnswer: 2
}, {
	question:"Who is considered 'The First Avenger?'",
	choices: ["a: Iron Man", 
			  "<br>b: Captain America", 
			  "<br>c: Nick Fury", 
			  "<br>d: Spiderman"],
	validAnswer: 1

}, {
	question:"Which co-creator of Marvel Comics makes regular cameo apperances in the films?",
	choices: ["a: Scott Summers", 
			  "<br>b: Sebastian Stan", 
			  "<br>c: Sam Jackson", 
			  "<br>d: Stan Lee"],
	validAnswer: 3

}, {
	question:"Who played Peter Parker in 'Spider-Man: Homecoming?'",
	choices: ["a: Tom Holland", 
			  "<br>b: Tobey Maguire", 
			  "<br>c: Andrew Garfield", 
			  "<br>d: Drake Bell"],
	validAnswer: 0

}, {
	question:"Which of these is NOT a member of the Fantastic 4?",
	choices: ["a: Reed Richards",
			  "<br>b: Pyro", 
			  "<br>c: Sue Storm", 
			  "<br>d: The Thing"],
	validAnswer: 1

 }, {
	question:"Where does Thor live?",
	choices: ["a: Midgard", 
			  "<br>b: Jotenheim", 
			  "<br>c: Asgard", 
			  "<br>d: Valhalla"],
	validAnswer: 2

}, {
	question:"What powers Iron Man's suit?",
	choices: ["a: The Tesseract", 
			  "<br>b: Arc Reactor", 
			  "<br>c: Magnets", 
			  "<br>d: The Mind Stone"],
	validAnswer: 1

}, {
	question:"What is Captain America's shield made of?",
	choices: ["a: Titanium", 
			  "<br>b: Adamantium", 
			  "<br>c: Carbonadium", 
			  "<br>d: Vibranium"],
	validAnswer: 3

}

];

console.log(marvelTrivia);

//Let's get a question to display on screen:

for (i = 0; i < marvelTrivia.length; i++) { 
	var trivia = marvelTrivia[Math.floor(Math.random()*marvelTrivia.length)];
	console.log(trivia);
	
	
	var answer = trivia.validAnswer;

	console.log(answer);
}

/*           for (var i = 0; i < choices.length; i++) {
                var button = $('<#button>');
                button.text(answer[i]);
                button.attr('data-id', i);
                $('#multChoice').append(button);
            }  

    	if (userPick === answer) {
		$('#multChoice').text("Correct!!! The correct answer was: " + answer);

	}

}
*/
//Need a question counter to track the question #

var questionCounter = 0;

//Array containing user answers

var userAnswer = [];

// Need to display the question/possible answers

// Need to initiate the countdown 20 seconds per question

// Immediately move to the answer screen when an answer is selected

// Need to display the correct answer/reaction

// Need to move to the next question after displaying the answer 5 second delay

// Display total right/wrong answers

// Need a restart button

