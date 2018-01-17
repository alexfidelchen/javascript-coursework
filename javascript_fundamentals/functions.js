// FUNCTIONS 

/* Functions can modify outer variables (variables outside 
	functions) by calling the function and having code that 
	modifies that variable. 
*/

let userName = 'John';

function changeToBob() {
	userName = "Bob";
	// Variables can hold values of any datatype. 
}


changeToBob();
// Call the function to change the username from "John" to "Bob". 
console.log(userName);

/* If a function creates a variable that has the same name as a
	variable outside of it , any changes to the local variable 
	will NOT affect the variable outside the function. 
	
	If you create two variables with the same name, one inside the
	function, one outside of it, all changes to the inside variable 
	do not affect the outside one. 
*/

let userName2 = "Amy";

function doesNotChangeName(){
	let userName2 = "Amy";
	userName2 = "Lauren";
}

console.log(userName2); // Name doesn't change. 

/* We can give parameters a default value in case they aren't 
	given a argument (value). 
*/

function matchMaker(boy = "Connor" ,girl = "Kayla"){
	console.log(boy + " <3 " + girl);
}

matchMaker("Alex","Joanna");

// could I use variables as arguments?

let boy1 = "Michael";
let girl1 = "Kelsey"; 
matchMaker(boy1,girl1); //Yes you can. 

/* You can use return and not return any value. If you don't 
	return anything, the function returns "undefined".
*/

function matchMaker2(boy = "Connor" ,girl = "Kayla"){
	console.log("matchMaker2() is ending early.");
	return;
	console.log(boy + " <3 " + girl);
}

let value = matchMaker2();

console.log(value);


/* We can name our matchMaker function better by starting the 
	function's name with a verb. 
*/

let matchBoyGirl = matchMaker;
/* You can set functions equal to each other using the 
	notation above. 
*/

// We can name our matchMaker function better 

matchBoyGirl("Chewbee","Kimly");

/* In general functions should only do one thing, that one thing it does 
	may be big, so sometimes its good to split that thing into smaller 
	parts. Breaking up a function into smaller function makes it
	easier to debug. 
	
	For example, suppose we have a function that shows all the
		prime numbers up to n; the first thing you would you 
		need to determine if a number is prime, then display 
		that it's prime. You can split the determination of 
		prime and the display of prime into two functions. 
*/

// checkIfPrime and showPrime are together 

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}

// checkIfPrime and showPrime is split up
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!checkIfPrime(i)) continue;

    alert(i);  // a prime
  }
}

function checkIfPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}

/* EXERCISE 

1) No, if the age is or under 18, return confirm(...) will 
	always be reached. 
	
*/

// EXERCISE 2 

let age = 17;
function checkAge(age){
	return (age > 18) ? true : false;
}
// You can return an expression that gives you a value. 

function checkAge2(age){
	return (age > 18) || false;
}
// Parenthesis added for better readability. 

console.log(checkAge(age), checkAge2(age));