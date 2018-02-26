// THE "NEW FUNCTION" SYNTAX

/* Since functions are objects, you can create them from constructors.
	So a sum function below can be creating using constuctors.
	
	You'll rarely going to use this, but if you do, its from
		converting strings from servers into functions. It 
		allows you to create functions when you don't know 
		what code inside it is. 
*/
function sum(a, b) {
	return a + b;
}

let sumFromObject = new Function('a', 'b', 'return a + b;');
let noParameters = new Function('console.log("This function has no parameters")');
/* If you want a function with no parameters, just put the code
	inside the parenthesis. 
*/

/* When you create a new function from a constructor, all the 
	parameters have to be strings. 
*/

console.log(sumFromObject(1,5));
noParameters();

/* Generally, when you run a function its LE references to the 
	LE right outside its parenthesis. This is NOT true for functions
	created from constructors, their LE references the GLOBAL LE, 
	which means functions from constructors cannot reference variables 
	right outside their function. 
	
	The reason why is before Professional JavaScript code is executed, 
		it goes through a minifier which changes all LOCAL VARIABLES in 
		the code to shorter names ( userName becomes a) to reduce file 
		size. There was the potential that function created from strings 
		may still refer to variables before the name change, the developers 
		of ESMAScript made sure to set these function's outer LE to the global
		LE whose variables don't change. 