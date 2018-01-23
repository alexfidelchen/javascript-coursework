/* STRINGS */


/* If you want to your single or double quote to span multiple 
		lines, use newline character "\n"
*/

let fireEmblemCharacters = "Marth\nRoy\nIke";
console.log(fireEmblemCharacters);

/* You can even include symbols and characters into strings using 
	the "\u" character. 
*/

console.log("\u{20331}");

console.log("I'm ready");

// Special characters add to the string length and count as 1 character. 
console.log(fireEmblemCharacters.length) // 13 characters 

let positionTest = "abcdefg"; 

console.log(positionTest[0],positionTest[1],
		positionTest[positionTest.length - 1], "positionTest"[2]);
/* 
	You can get a character at a specific position using 
	square brackets. Just attach the square brackets to the 
	end of a variable holding a string or directly to a string 
	itself. 
	
	(positionTest.length - 1) because positioning starts at 0. 
	If you use square brackets and the character you request
	is outside the string, then [string][] returns undefined. 
	
	Using the string with square brackets does the same thing 
	as using the charAt() function, but the string with chracter
	brackets is more modern. 
*/

/* You can use the for...of loop to do something to each character 
	in the string. 
*/

for (let character of positionTest) {
	console.log(character);
}

/* Once the string is created, you cannot change the characters 
	inside the string. You'll need to create a new string if you 
	want to do that. 
*/

let cannotChange = "Hilbert";
cannotChange[0] = "D"; // Doesn't do anything. 
console.log(cannotChange);
cannotChange = "Dilbert"; // Now it's changed. 
console.log(cannotChange); 

/* You could change the characters inside the string by breaking 
	down the string like below. 
*/

let changeMe = 'Hi';
changeMe = 'h' + changeMe[1]; 

/* But this is only is efficient if your string is short. It's 
	a nightmare if its long. You could use the same technique 
	to add on characters to the string. 
*/

cannotChange = cannotChange + "o";
// Remember, you can reuse variables. 
console.log(cannotChange);

/* As expected, toUpperCase() and toLowerCase() upper and lower 
	case a string. You can upper or lower case a single character 
	by getting the character using square brackets. 
*/
let firstLetter = 'mayweather';
firstLetter = firstLetter[0].toUpperCase() + "ayweather";
console.log(firstLetter);

/* Usually, indexOf() gives the index number of the first instance 
	of the given character. 
*/

console.log("Mister Fox".length);

/* indexOf() usually returns the index number of the FIRST time 
	it sees a character, but theres a way to write a function 
	that returns each instance of a character. 
*/

// You can use indexOf() to find STRINGS within a string. 

let saying = "sly as a fox, as strong as an ox";

console.log(saying.indexOf("as"));

/* Recall that indexOf() returns -1 if it doesn't find a match 
	inside the string. You can use to your advantage when you 
	write if statements. 
*/

if (saying.indexOf("as") != -1) {
  	console.log(`we found the "as" `);
	
}
/* Notice that we cannot just say "if (saying.indexOf("as"))", 
	because indexOf() returns a number and that number may not 
	be 0 or 1. 
*/

/* includes() checks if a character or string is inside the 
	string and returns true if it is. 
*/

console.log(saying.includes("as"));
let sliceMe = "Maximus" 
console.log(sliceMe.slice(0,3))
console.log(sliceMe.slice(1));
console.log( "a" > "z", "a" > "Z", );

