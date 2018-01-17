// Function expressions and arrows. 

/*  Say you just want a function that computes a + b. 
	You could write it like below
*/

function add(a,b) {
	return a + b;
}

/* Or, you could write the same function in a shorter way using 
	an arrow function. 
*/

let add2 = (a,b) => a + b;
/* The arrow function is only one short line of code! What the above 
	function is saying is that create a function called add2, let 
	the function have the parameter a and b, and have the function 
	return a + b;
*/

// You can even have an arrow function that doesn't have parameters. 
let getGirlName = () => "joanna";

/* In an arrow function, the value after the arrow sign can be 
	a function body which will allow for a more complex function.
*/

	
console.log(add(2,3), add2(2,3), getGirlName());