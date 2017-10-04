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
// Declare a function that takes no arguments but prints "I am a great function" to the console. Try running it after it has been declared.
// Declare a function that lets you choose which door to open of 3 doors (like the TV game show). Behind one of the doors is a goat, behind another 
// 		is a Jeep, and behind another is a can of worms. Alert the user which prize they got when a door number is passed in.




