$(document).ready(function(){

var counter = 0;
var guessTotal = 0;
var wins = 0;
var losses = 0;

//var showScore = document.getElementById('yourScore');

//Generates random number to match
window.onload = generateRandomNumber;
function generateRandomNumber(){
    var n = 120;
    number = Math.floor(Math.random()*n)+19;
    document.getElementById("randomNumber").innerHTML = number;
    }

//Generates random number for crystals
	var blue = Math.floor((Math.random() * 12) + 1);
	var green = Math.floor((Math.random() * 12) + 1);
	var pink = Math.floor((Math.random() * 12) + 1);
	var yellow = Math.floor((Math.random() * 12) + 1);    

//Click events for crystal.
	$(".blueCrystal").click(function() {
		update(blue);
	});
	$(".greenCrystal").click(function() {
		update(green);
	});
	$(".pinkCrystal").click(function() {
		update(pink);
	});
	$(".yellowCrystal").click(function() {
		update(yellow);
	});

// The reset function is called when you win or lose a game.
	function reset() {
		// Generates a new number to guess.
		number = Math.floor((Math.random() * 120) + 19);

		// Generates new values for the crystals.
		blue = Math.floor((Math.random() * 12) + 1);
		red = Math.floor((Math.random() * 12) + 1);
		yellow = Math.floor((Math.random() * 12) + 1);
		green = Math.floor((Math.random() * 12) + 1);
		
		// Resets the total guess to 0.
		guessTotal = 0;

		// Displays the guess total.
		$(".guessdisplay").html(guessTotal);
	};

	// This function updates the user's total guess. 
	function update(color) {
		// Increases the total guess by the value of the chosen crystal.
		guessTotal += color;

		// Removes the old total and replaces it with the new total. 
		$(".guessdisplay").empty();
		$(".guessdisplay").append(guessTotal);

		// Checks to see if you win or lose.
		if (guessTotal > number) {
			// Adds a loss.
			losses++;
			// Displays updated losses.
			$("#loss").html(losses);
			// Calls the reset function to reset the game.
			reset();
			
		} else if (guessTotal == number) {
			// Adds a win.
			wins++;
			// Displays the updated wins.
			$("#win").html(wins);
			// Calls the reset function to reset the game.
			reset();

		};
	};
}); //ends js file


