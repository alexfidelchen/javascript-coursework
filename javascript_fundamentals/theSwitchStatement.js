// THE SWITCH STATEMENT 

let a = 4;

switch (a){
	case 3:
		console.log("Too small");
		break;
	case 4:
		console.log("Exacto!");
		break;
	case 5:
		console.log("Too big");
		break;
	default:
		console.log("I don't know what value this is");
}

/* So the switch statement may be a cleaner way to check for 
	a variable's value than using multiple if/else-if statements. 
	
	A switch statement is broken up into cases, aka values, if a
	variable matches one of those values and its datatype, then 
	the switch statement does the code attached to that value. 
	If the variable doesn't match any of the values, then the 
	code inside default is run. 
	
	syntax: 
	
	switch ([variable to be checked]){
		case [If the variable is equal to...] if the variable matches a value attached to 
		a case, 
			
	}
*/

/* If you don't throw breaks into the switch statement, the statement
	will just keep going AND RUN ALL CODE AFTER THAT VALUE OR EXPRESSION, 
	even if it doesn't match the case. 
	
*/
console.log("");

switch (a){
	case 3:
		console.log("Too small");
	case 4:
		console.log("Exacto!");
	case 5:
		console.log("Too big");
	case 100:
		console.log("Way too big");
	default:
		console.log("I don't know what value this is");
}

console.log() // Empty console.log for empty space. 

/* Can't use it to comparison operators with cases?, case has to be an 
	explicit value?
	
// This doesn't work

let b = 1110;	
switch (b){
	case b < 100:
		console.log("Your number is less than 100");
		break;
	case b > 100:
		console.log("Your number is greater than 100");
		break;
	default:
		console.log("Your number is not greater than 100, or less than 100, so it must be 100!");
}

*/

/* Cases can share code so you don't have to rewrite code over again, to do it,
	write all the cases that are sharing code on top of each other.
	
	- If you want values or expressions to share code, put them on
		top of each other. 
*/

console.log();

let c = 4;

switch(c){
	case -100:
		console.log("Way too small");
		break;
	case 2 :
	case 3 :
		console.log("Close, keep trying");
		break;
	case 4:
		console.log("Yes! That's correct!");
		break;
	default:
		console.log("I don't know what number that is");
}
	