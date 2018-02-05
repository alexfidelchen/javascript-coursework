/* REST PARAMETERS AND SPREAD OPERATOR */

console.log(Math.max(1, 9, 8, 17, 48, 57, 2, 4, 17, 3, 2, 6, 5));

/* Some functions can have an unlimited number of arguments. Today, 
	we are going to write a function that has an abitrary number 
	of arguments. 
	
	It's a dirty secret but any can function can have MORE arguments 
	than parameters. 
*/

function sum(a, b) {
	return a + b;
}

console.log( sum(1, 2, 3, 4, 5, 6));

/* It's just that if you have more arguments than parameters, any
	arguments beyond the parameters are ignored. 
	
	If the number of arguments exceed the number of parameters, 
	we can store the extra arguments in a array using the 
	REST PARAMETER. The rest parameter is represented with three 
	dots. Any argument after the dots will be placed into an array
	whose name is the parameter after the dots. 
*/

function sumAll(... args) {
	let sum = 0;
	console.log(args);
	/* Notice that all the arguments were put into an array called 
		args. 
	*/
	
	for (let arg of args) {
		sum = sum + arg;
	}
	
	return sum;
}

console.log(sumAll(1, 2, 3));

/* The rest parameter takes all the arguments after its parameter
	and returns them in an array. 
*/

function personJobs( firstName, LastName, ...jobs) {
	console.log(`${firstName} ${LastName}'s jobs in the past were ${jobs}`);
	console.log(jobs);
	
}

personJobs( "Alex", "Chen", "tutor", "web designer", "WordPress developer");
personJobs( "Richard", "Paek", "salesman", "founder", "customer service rep", "data analyst");

/* Each function has an arguments object that holds all of a functions 
	arguments. 
*/

function checkArguments(name, ...jobs) {
	console.log(arguments);
}

checkArguments( "Michael", "foreman", "qa tech", "graduate student");
/* The arguments object holds all the function's arguments. Each 
	argument takes up one property, even if the arguments are put 
	into one array by the rest parameter. 
*/

/* Suppose we have an array and want to put all of its elements 
	as its function's parameters, how would we do it? We could 
	place each array's element and put it into the function 
	manually.  f(arr[0],arr[1]...etc) but that strategy would 
	take a long time if there were a hundreds of elements in the 
	array. Perhaps we could use a for loop to fill that function's 
	arguments with array's elements, but there's an easier way 
	to fill the function. 
*/

let arr = [3, 5, 1];
let arr2 = [21, -100, 1000];

console.log(Math.max(...arr));
/* We can break up multiple arrays and put its elements as 
	a function's arguments. 
*/
console.log(Math.max(...arr, ...arr2));

/* It can also be used to break up a string */
function printChar(str) {
	for ( arg of arguments) {
		console.log(arg);
	}
}

printChar(..."Alex");