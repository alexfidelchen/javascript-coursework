/* OBJECTS - EXERCISE */

"use strict"

let user = {};
user.name = "John"; /* Adding the name property with the value "John" 
	to the object user. 
	*/
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);


// EXERCISE 2

let emptyObject = {};

for ( let key in emptyObject){
	console.log("but" + key);
}
/* The for...in loop checks if there's a property, if there's a
	single property, the for...in loop will activate and return true. 
*/

function isEmpty(object) {
	for(let key in object) {
		return false;
	}
	
	return true;
}

// Exercise 3, Yes, you just can't set user equal to another object. 

// EXERCISE 4 

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function calculateSalaries(object) {
	let sum = 0;
	for ( let key in object) {
		sum = sum + object[key];
	}
	return sum;
}

console.log(calculateSalaries(salaries));

// EXERCISE 5

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(object) {
	for( let key in object) {
		if ( typeof object[key] == "number"	) { // if typeof object[key] == true
			console.log("I'm in the if statement");
			object[key] = object[key] * 2;
		}
	}
}

multiplyNumeric(menu);
console.log(menu);