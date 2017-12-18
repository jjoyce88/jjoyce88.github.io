// Preparing up the page
$("#question").hide();
$(".answer-button").hide();
$(".results").hide();
$("#comment").hide();

// Setting up variables
var currentRound = 0;
var roundsWon = 0;
var roundsLost = 0;
var playing = false;

// Creating the list of rounds, containing the questions and answers
var rounds = [
round1 = {
	question: "In Smash 4, which character has the fastest fall speed in the roster?",
	answer1: "Greninja",
	answer2: "Falco",
	answer3: "Zero Suit Samus",
	answer4: "Fox",
	correctAnswer: 4,
	comment: "He's not very heavy, but he sure is aerodynamic"
},

round2 = {
	question: "Which of these characters has the most aerial jumps?",
	answer1: "Pit",
	answer2: "Jigglypuff",
	answer3: "Charizard",
	answer4: "Little Mac",
	correctAnswer: 2,
	comment: "Jigglypuff can jump a total of 5 times in the air"
},

round3 = {
	question: "What character from Brawl was notoriously overpowered and dominated the game's competitive scene?",
	answer1: "Sonic",
	answer2: "Captain Falcon",
	answer3: "Meta Knight",
	answer4: "Wolf",
	correctAnswer: 3,
	comment: "With fast, high-priority attacks and great recovery options, Meta Knight is considered the best character in the game"
},

round4 = {
	question: "Which of the following stages is competitively legal in Smash 64?",
	answer1: "Dreamland",
	answer2: "Yoshi's Island",
	answer3: "Peach's Castle",
	answer4: "Kongo Jungle",
	correctAnswer: 1,
	comment: "In fact, Dreamland is only legal stage in that game"
},

round5 = {
	question: "Which stage has caused the most controversy concerning its competitive legality in Smash 4?",
	answer1: "Delfino Plaza",
	answer2: "Lylat Cruise",
	answer3: "Duck Hunt",
	answer4: "Pilotwings",
	correctAnswer: 2,
	comment: "The stage's legality is often questioned due to it having various glitches that could effect the results of a match"
},

round6 = {
	question: "What is Captain Falcon's most iconic move?",
	answer1: "Falcon Kick",
	answer2: "Raptor Boost",
	answer3: "\"The Knee\"",
	answer4: "Falcon Punch",
	correctAnswer: 4,
	comment: "\"Falcon... PAWNCH!\""
},

round7 = {
	question: "What character has the highest air speed in Smash 4?",
	answer1: "Yoshi",
	answer2: "Roy",
	answer3: "Wario",
	answer4: "Jigglypuff",
	correctAnswer: 1,
	comment: "With such high speed and a very good double jump, Yoshi has virtually unrivaled aerial mobility"
},

round8 = {
	question: "What character was planned to be a playable character since the first Smash Bros. game, but never made it in until a later installment due to time constraints?",
	answer1: "Olimar",
	answer2: "Bowser",
	answer3: "King Dedede",
	answer4: "Lucas",
	correctAnswer: 3,
	comment: "It took a while, but the king of Dreamland finally made it on the roster in Brawl, the third game in the series"
},

round9 = {
	question: "Who has the least traction in Smash 4?",
	answer1: "Palutena",
	answer2: "Corrin",
	answer3: "Ganondorf",
	answer4: "Luigi",
	correctAnswer: 4,
	comment: "In fact, he's so slippery that some moves are safe on his shield when they usually aren't because Luigi slides so far back"
},

round10 = {
	question: "What is the term for dashing backwards and immediately turning back around without any lag?",
	answer1: "Dash Turnaround",
	answer2: "Perfect Pivot",
	answer3: "Pivot",
	answer4: "Dash-Cancel",
	correctAnswer: 2,
	comment: "The technique is frame-perfect and difficult to master, but it can be a very useful tool for spacing"
},

round11 = {
	question: "Which of the following moves is used by more than one character?",
	answer1: "Inhale",
	answer2: "Chomp",
	answer3: "Pikmin Toss",
	answer4: "Sing",
	correctAnswer: 1,
	comment: "The move Inhale is shared by Kirby and King Dedede"
},

round12 = {
	question: "",
	answer1: "",
	answer2: "",
	answer3: "",
	answer4: "",
	correctAnswer: 3,
	comment: ""
},

round13 = {
	question: "",
	answer1: "",
	answer2: "",
	answer3: "",
	answer4: "",
	correctAnswer: 2,
	comment: ""
},

round14 = {
	question: "",
	answer1: "",
	answer2: "",
	answer3: "",
	answer4: "",
	correctAnswer: 4,
	comment: ""
},

round15 = {
	question: "",
	answer1: "",
	answer2: "",
	answer3: "",
	answer4: "",
	correctAnswer: 1,
	comment: ""
},

round16 = {
	question: "",
	answer1: "",
	answer2: "",
	answer3: "",
	answer4: "",
	correctAnswer: 2,
	comment: ""
},

round17 = {
	question: "",
	answer1: "",
	answer2: "",
	answer3: "",
	answer4: "",
	correctAnswer: 3,
	comment: ""
},

round18 = {
	question: "",
	answer1: "",
	answer2: "",
	answer3: "",
	answer4: "",
	correctAnswer: 1,
	comment: ""
},

round19 = {
	question: "",
	answer1: "",
	answer2: "",
	answer3: "",
	answer4: "",
	correctAnswer: 4,
	comment: ""
},

round20 = {
	question: "",
	answer1: "",
	answer2: "",
	answer3: "",
	answer4: "",
	correctAnswer: 2,
	comment: ""
}

];

// Setting up the timer object, as well as associated variables

var intervalId;

var timerRunning = false;

var timer = {

	time: 0,
	secondsElapsed: 0,
	runTime: 0,
	endFunction: function()
	{
		console.log("default timer function");
	},

	// Function to restart the timer
	reset: function()
	{
		timer.time = 0;
		timer.secondsElapsed = 0;
		timer.runTime = 0;
		clearTimeout(intervalId);
		timerRunning = false;
		$("#timer-display").html("");
	},

	// Function to start the timer
	start: function(seconds, doOnStop)
	{
		if(!timerRunning)
		{
			timer.runTime = seconds;
			timer.endFunction = doOnStop;
			intervalId = setInterval(timer.count, 17.25);
			timerRunning = true;
		}
	},

	// Function to stop the timer
	stop: function()
	{
		timer.reset();
		timer.endFunction();
	},

	// Function to increment the time
	count: function()
	{
		timer.time ++;

		timer.secondsElapsed = timer.convertToSeconds(timer.time);

		$("#timer-display").html(timer.runTime - timer.secondsElapsed);

		if(timer.runTime - timer.secondsElapsed < 0)
		{
			timer.stop(timer.endFunction);
		}
	},

	// Function to convert the time to seconds
	convertToSeconds: function(t)
	{
		return Math.round(t / 60);
	}
};

//
$("#start-button").on("click", function()
{
	$("#start-button").hide();
	$("#question").show();
	$(".answer-button").show();
	startRound();
});

// Setting the functions of the 4 answer buttons
$("#answer-1").on("click", function()
{
	if(playing)
	{
		var message = "";
		if(rounds[currentRound].correctAnswer == 1)
		{
			message = "Correct!";
			revealAnswer(message, 1);
			winRound();
		}

		else
		{
			message = "Incorrect!"
			revealAnswer(message, 1);
			loseRound();
		}
	}
});

$("#answer-2").on("click", function()
{
	if(playing)
	{
		var message = "";
		if(rounds[currentRound].correctAnswer == 2)
		{
			message = "Correct!"
			revealAnswer(message, 2);
			winRound();
		}

		else
		{
			message = "Incorrect!"
			revealAnswer(message, 2);
			loseRound();
		}
	}
});

$("#answer-3").on("click", function()
{
	if(playing)
	{
		var message = "";
		if(rounds[currentRound].correctAnswer == 3)
		{
			message = "Correct!"
			revealAnswer(message, 3);
			winRound();
		}

		else
		{
			message = "Incorrect!"
			revealAnswer(message, 3);
			loseRound();
		}
	}
});

$("#answer-4").on("click", function()
{
	if(playing)
	{
		var message = "";
		if(rounds[currentRound].correctAnswer == 4)
		{
			message = "Correct!"
			revealAnswer(message, 4);
			winRound();
		}

		else
		{
			message = "Incorrect!"
			revealAnswer(message, 4);
			loseRound();
		}
	}
});

// A function that sets up the next round
function startRound()
{
	// If there are no more rounds left, end the game
	if(currentRound >= rounds.length)
	{
		gameEnd();
		return;
	}

	$("#comment").hide();

	// Reset button colors
	$("#answer-1").attr("class", "left-btn answer-button guess-left");
	$("#answer-2").attr("class", "right-btn answer-button guess-right");
	$("#answer-3").attr("class", "left-btn answer-button guess-left");
	$("#answer-4").attr("class", "right-btn answer-button guess-right");

	// Set text for question and answers
	$("#question").text(rounds[currentRound].question);
	$("#answer-1").text(rounds[currentRound].answer1);
	$("#answer-2").text(rounds[currentRound].answer2);
	$("#answer-3").text(rounds[currentRound].answer3);
	$("#answer-4").text(rounds[currentRound].answer4);

	playing = true;

	timer.start(30, timeUp);
}

function revealAnswer(message, guess)
{
	$("#question").text(message);
	$("#comment").text(rounds[currentRound].comment);

	if(rounds[currentRound].correctAnswer === 1)
	{
		$("#answer-1").attr("class", "left-btn answer-button guess-left-correct");
		if(guess === 1)
		{
			$("#comment").show()
		}
	}
	else
	{
		$("#answer-1").attr("class", "left-btn answer-button guess-left-incorrect");
	}

	if(rounds[currentRound].correctAnswer === 2)
	{
		$("#answer-2").attr("class", "right-btn answer-button guess-right-correct");
		if(guess === 2)
		{
			$("#comment").show()
		}
	}
	else
	{
		$("#answer-2").attr("class", "right-btn answer-button guess-right-incorrect");
	}

	if(rounds[currentRound].correctAnswer === 3)
	{
		$("#answer-3").attr("class", "left-btn answer-button guess-left-correct");
		if(guess === 3)
		{
			$("#comment").show()
		}
	}
	else
	{
		$("#answer-3").attr("class", "left-btn answer-button guess-left-incorrect");
	}

	if(rounds[currentRound].correctAnswer === 4)
	{
		$("#answer-4").attr("class", "right-btn answer-button guess-right-correct");
		if(guess === 4)
		{
			$("#comment").show()
		}
	}
	else
	{
		$("#answer-4").attr("class", "right-btn answer-button guess-right-incorrect");
	}
}

function winRound()
{
	roundsWon ++;
	roundEnd();
}

function loseRound()
{
	roundsLost ++;
	roundEnd();
}

function timeUp()
{
	revealAnswer("Time's up!")
	roundsLost ++;
	roundEnd();
}

function roundEnd()
{
	playing = false;
	timer.reset();
	currentRound ++;
	timer.start(5, startRound);
}

function gameEnd()
{
	$(".answer-button").hide();
	$("#question").text("You've reached the end of the quiz! Congratulations!");
	$("#correct").text(roundsWon);
	$("#incorrect").text(roundsLost);
	$(".results").show();
}
