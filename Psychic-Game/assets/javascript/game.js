// Declare variables
var wins = 0;
var losses = 0;
var remainingGuesses = 13;
var guesses = "";
var randLetter = "";

// Get all necessary components from the document
var winCount = document.getElementById("wins");
var lossCount = document.getElementById("losses");
var guessCount = document.getElementById("guessesLeft");
var lettersGuessed = document.getElementById("lettersGuessed");

// Create a string of all possible letters
var allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Function to pick a random letter from the character string
function pickLetter()
{
	var index = Math.floor(Math.random() * Math.floor(26));
	randLetter = allLetters.charAt(index);
	if(!isValid(randLetter))
	{
		pickLetter();
	}
}

// Function to compare two letters
function compare(letter1, letter2)
{
	if(letter1.toUpperCase() === letter2.toUpperCase())
	{
		return true;
	}
	return false;
}

// Function to check if the letter entered is valid (is a letter, letter has not been guessed yet)
function isValid(letter)
{
	if((!allLetters.includes(letter.toUpperCase())) || (guesses.includes(letter.toUpperCase())))
	{
		return false;
	}
	return true;
}

// Function to start a new round
function nextRound()
{
	remainingGuesses = 13;
	guesses = "";
	pickLetter();
	update();
}

// Function to update the document
function update()
{
	winCount.innerHTML = "Wins: " + wins;
	lossCount.innerHTML = "Losses: " + losses;
	guessCount.innerHTML = "Guesses Left: " + remainingGuesses;
	lettersGuessed.innerHTML = guesses;
}

// Function to guess a character when a key is pressed
document.addEventListener("keypress", function(event)
{
	var keyPressed = event.key;
	if(isValid(keyPressed))
	{
		guesses = guesses + keyPressed.toUpperCase() + " ";
		remainingGuesses --;
		if(compare(keyPressed, randLetter))
		{
			wins ++;
			nextRound();
		}
		else
		{
			if (remainingGuesses <= 0)
			{
				losses ++;
				nextRound();
			}
		}
	}
	update();
});

update();