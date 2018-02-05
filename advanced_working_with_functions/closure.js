/* CLOSURE */

hi();

let martian = "UFO";

function hi() {
	console.log("Hi");
}

/* 
	Because the global lexical environemnt adds functions when 
		the script starts running, function can be used BEFORE 
		THEY ARE DEFINED IN THE CODE. 
*/


/* Remember, functions usually have parameters, so when a 
	Lexical Environment is created for the function (created 
	when it runs), those parameters are added to the environment 
	as well. 
	
*/

function greet(name) {
	console.log( `Hi ${name}`);
}

/* So let's look at this function's Lexical Environment. The 
	Lexical Environment holds the parameter name and its 
	value when the Lexical Environment is created (when 
	the function runs). 
	
	ENVIRONMENT RECORD 
	name: "John"
	
	Remember, part of a Lexical Environment also points to 
	the Lexical Environment (the object that holds the variables
	and functions you have access to) outside its curly brackets. 
	The environment record of that object is 
	the following 
	
	ENVIRONMENT RECORD:
	hi: function 
	martian : "UFO"
	
	- hi is on top because its added when the script 
		starts executing.
*/


greet( "John");


/* So when we want access to martian, JavaScript checks the 
	current object's functions and variables, realizes its not 
	there then checks the outer object's group and finds it there. 
*/


/* Functions that are returned by an outer functions are still 	
	considered nested functions, because the inner function is 
	inside a function. 
	
	Remember, its totally possible for a function to return 
		another function. 
*/

function makeCounter() {
	let count = 0;
	
	return function(){
		return count++;
	}
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());


/* Remember to add parenthesis to the variable so 
	you get the value RETURN by the function instead 
	getting the function itself. 
	
	It appears that every time you call makeCounter() you're 
		resetting count, why does it keep going up?
		
		- You only count makeCounter() once! Its returned 
			function is called multiple times. 
		
	
	Question1) No, you could if it was an object but since you 
		can't call the variable inside the function I don't 
		think you can change it, unless you change the return 
		function so it sets it back to zero or write another 
		nested function.
		
	Question2) Don't they have to share the same count? The 
		count would always be one if the count was different. 
		
	- Each time counter() is run a NEW LE is created. LE are 
		NOT shared by calls to the function. 
*/

/* Within the makeCounter() function, the returned function is 
	add to its LE, and that returned function gets the property 
	[[Environment]] which refers to LE of the function they're 
	in. The returned function's LE has no variables. 
	
	- Note that the returned fuction has NOT been called, so 
	it does NOT get a LE. 
	
	Notice that even though the returned function increases 
	the count variable, the actual increase in count happens 
	in the LE that count is in, so in another object. 
	
	- Even in the code it looks like the returned function increases
		the count, the increase in count actually happens in the object 
		that count. 
*/

let phrase = "Hello";
if (1) {
	let user = "John";
	console.log(`${phrase}, ${user}`);
	
}

/* The if statement above runs the user variable then goes to the
	outer LE to get the phrase variable. 
*/

(function() {
	console.log("This is a immediately-invoked function expression.");
})();

/* Remember an immediately-invoked function expression is a function 
	that is created then immediately run. 
*/

