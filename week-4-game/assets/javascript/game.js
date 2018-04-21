// Declare variables
var wins;
var losses;
var goalNum;
var currentPts;
var rubyVal;
var sapphireVal;
var emeraldVal;
var amethystVal;

// Retrieve components from the document and store them in variables

// Function to set up the game
function StartGame()
{
	// Set wins and losses to 0
	wins = 0;
	losses = 0;

	startRound();
}

function startRound()
{
	// Set the player's points to 0
	currentPts = 0;

	// Set the randomized goal number (19 - 120), and give each crystal a value (1 - 12)
	goalNum = getRandomNumber(19, 120);

	rubyVal = getRandomNumber(1, 12);
	sapphireVal = getRandomNumber(1, 12);
	emeraldVal = getRandomNumber(1, 12);
	amethystVal = getRandomNumber(1, 12);

	// Display the values for wins, losses, goal number, and the player's points on the document
	$("#wins").text("Wins: " + wins);
	$("#losses").text("Losses: " + losses);
	$("#goal").text(goalNum);
	$("#score").text(currentPts);
}

// Function to generate a random number from a specified range
function getRandomNumber(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


// function to check if the player's score matches or exceeds the goal number
function checkScore()
{
	// If the player's score matches the goal number, the player wins, and a new round starts
	if (currentPts == goalNum) {
		wins++;
		startRound();
	}

	// If the player's score is higher than the goal number, the player, loses, and a new round starts
	else if (currentPts > goalNum)
	{
		losses++;
		startRound();
	}
}

// Click events for the crystals. When a crystal is clicked, it will add its point value to the player's score, and the score is compared to the goal number.

$("#ruby").on("click", function ()
{
	currentPts += rubyVal;
	$("#score").text(currentPts);
	checkScore();
});

$("#sapphire").on("click", function ()
{
	currentPts += sapphireVal;
	$("#score").text(currentPts);
	checkScore();
});

$("#emerald").on("click", function ()
{
	currentPts += emeraldVal;
	$("#score").text(currentPts);
	checkScore();
});

$("#amethyst").on("click", function ()
{
	currentPts += amethystVal;
	$("#score").text(currentPts);
	checkScore();
});

// Start the game
StartGame();