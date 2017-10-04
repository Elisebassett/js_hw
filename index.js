//Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings (concatenation).
var cat = 3;
var dog = 4;
console.log(cat + dog);

// Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

var cheese_platter = [["Manchego", "La Tur", "Parmigiano Reggiano"], ["Membrillo", "Fruit Compote", "Honeycomb"]]
console.log('If you want a delightful cheese platter, I recommend pairing ' + cheese_platter[0][0] + ' and ' + cheese_platter[1][0] + ".");

// Write a script that checks if a variable captured from a js prompt is less than 100. 
// 		If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.

var favoriteNumber = prompt('What is your favorite number? Think carefully.... the fate of the world is in your answer');
	if (favoriteNumber < 100) {
		alert('You killed the human race. Less than 100 are immune to the killer virus that is ravaging the planet. Thanks a lot.');
	} else {
		alert('We can work with this.... with this many people immune to the killer virus that is ravaging the planet, I think we can find the cure in time to save the human race. Phew!');
	}

// Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.
function typeYourNameHere(name) {
	alert('You said your name is ' + name + '. Sorry ' + name + '. Your name is Stacy now. Be free Stacy. Be free.');
}
typeYourNameHere('Casey');

// Declare a function that takes no arguments but prints "I am a great function" to the console. Try running it after it has been declared.
function validation() {
	console.log('I am a great function');
}

validation()

// Declare a function that lets you choose which door to open of 3 doors (like the TV game show). Behind one of the doors is a goat, behind another 
// 		is a Jeep, and behind another is a can of worms. Alert the user which prize they got when a door number is passed in.



function bigWinner(door) {
	
	if (parseInt(door) === 1) {
		alert('WINNER WINNER GOAT DINNER! YOU JUST WON A GOAT PIE! To claim please visit www.definatelynotascam.com and give us your social security number.');
	} else if (parseInt(door) === 2) {
		alert('YOU JUST WON A BROKEN DOWN JEEP!!!! OMG JEALOUS!');
	} else if (parseInt(door) === 3) {
		alert('You just won a can of worms... for you ALL EXPENSE PAID FISHING TRIP TO HAWAII!!!! also your wife is cheating on you. YOU ALSO GET TO STAY AT A 5 STAR HOTEL!!!!!');
	}
}

var door = prompt('YOU ARE BIG WINNER!! There are three doors! 1, 2, or 3. Behind each door is a prize! Which one do you choose?');
bigWinner(door);


