// FUNCTION OBJECT NFE

/* In JavaScript, functions are considered objects; as such, 
	functions can be used like objects. Every function is the
	descendant of Function and its parent Function prototype.
	Every function gets all the properties and methods from
	Function and Function prototype. 
	
	For example, one Function's properties is the name property. 
*/

function someName() {
}

console.log(someName.name);

/* So the name property is "smart", so it even works for if a
	function is equal to a variable. 
*/

let anotherFunction = function() {}

console.log(anotherFunction.name);

/* Essentially, object methods hold functions too so the methods
	get the name property from the Function object. 
*/

let joe = {
	speak(){},
	walk: function() {}	
	
}

console.log(joe.speak.name);
console.log(joe.walk.name); /* walk, because the name property uses the 
	key as the function's name. 
	*/
	
/* So the length property returns the number of parameters a
	function has. 
*/
console.log();
console.log(someName.length);

function lotOfParameters(a,b,c,d,e,f) {}
console.log(lotOfParameters.length); // 6

// Again, as functions are objects, you can add properties to them. 
function sayHi(){
	
	console.log("hi");
	/* Can't put initialize the counter property inside because the 
		property will reset. 
	*/
	sayHi.counter++;
}

/* Notice how a function references the its object property inside 
	the function. 
*/

sayHi.counter = 0;
/* Here's we're giving a starting value to the property. Just remember 
	to do this otherwise the property is NaN. 
*/

sayHi();
sayHi();
console.log(sayHi.counter);

/* Sometimes there's an advantage of using the function like 
	an object; property values are easier to change than variables 
	outside an object, so if you make the counter a property instead 
	of a variable, you'll be able to change the property later. 
*/
function makeCounter() {
  // instead of:
  // let count = 0

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
console.log();
console.log("hi");
counter.count = 20;
console.log(counter());
console.log(counter());

/* So remember how we created functions by attaching a function 
	to a variable? Well, it turns out that you can attach a function 
	with a name to a variable as well.
*/

let firstNFE = function nfe(name) {
	console.log("First NFE prints " + name);
}

/* Named functions attached to variables are called NAMED FUNCTION 
	EXPRESSIONS. 
*/

firstNFE("Sor Rungisvai");

/* Pretty much, named function expressions give us a way to get 
	function expressions to call themsleves. 
*/

let sayHi2 = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // Now all fine
  }
};

let welcome = sayHi2;
sayHi2 = null; // Just ignores it?

welcome();

/* When you use functions as an object, you'll realize hat they 
	have a lot of properties. 
*/