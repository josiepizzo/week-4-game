$(document).ready(funtion(){

crystals = ['assets/images/diamond-blue.png', 'assets/images/diamond-green.png', 'assets/images/diamond-pink.png', 'assets/images/diamond-yellow.png'];

var counter = 0;
var wins = 0;
var losses = 0;
$("#win").text(wins);
$("#loss").text(losses);

newCrystal();
newGame();

function newCrystals(){
	// code ...
	var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.floor((Math.random()*12);
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);
}s

});
//funtion newGame(argument){
	// code ...
//}
