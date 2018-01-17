// CONDITIONAL OPERATORS 

if (1){
	console.log("1 is converted to true, so the if statement is true");
	/* An if statement if the value 1 is considered true, because if statements 
		convert values inside the parenthesis into boolean, then checks if its 
		true or false. 
	*/
}

let year = 2018

if( year == 2016){
} else if (year == 2017){
} else if (year == 2018){
	console.log("It's 2018!");
}
// You may have an if statement with else ifs but no else. 

let mollyAge = 17;

let adult = (mollyAge >= 18) ? "yes" : "no";

console.log(adult);

let asian = "Japanese";


let whichAsian = (asian == "Chinese") ? "Oh, you're Chinese!" : 
	(asian == "Filipino") ? "That's cool! You're Filipino!" :
	(asian == "Japanese") ? "Wow! You're Japanese!" : "Which Asian are you?";
	
	
// The question mark operator does NOT have to written all on one line.  

/* If you want to use multiple question mark statements, use a question mark 
	statements as one of the values. 
*/

console.log(whichAsian);

/* I could put all these question mark operators inside console.log
	and skip storing them into a variable, but that logic would be really 
	nasty. 
*/

let director = "Link";
directorAge = 57;

console.log( (directorAge == 57) ? ((director == "Linklater") ? 
	"Oh, you're Richard Linklater!" : "Opps, I thought you were someone else") : "Who are you?");
	
/* You may even put a question mark operator as the first value
	of another question mark operator. 
*/


/* EXERCISE 

1) Yes, because nonempty strings are always converted into true, 
	even if they have a falsy statement inside it. 
*/

// EXERCISE Rewrite 'if' into '?'

result = (a + b < 4) ? 'Below' : 'Over';