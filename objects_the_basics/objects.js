/* OBJECTS */

"use strict"

// There are two ways to make an object. 
let user = new Object();
// You can create an object using an Object() constructor. 
let userLiteral = {};
/* Creating an object using figure brackets is called  
	"object literal". 
*/

let userLiteral2 = {
	name: "Jon",
	age: 30,
	"likes cats" : true
	/* You may even have properties that has space in between 
	  them, but have to be in quotes. 
	*/
}

// You grab properties from an object using dot notation. 
console.log(userLiteral2.age);

/* Remember, you can just add properties to can object using either 
  index notation or dot notation. 
*/

userLiteral2.livesIn = "California";
userLiteral2.isAdmin = true;

console.log(userLiteral2);

/* You can even have functions that create objects by returning 
	them. 
*/

function makeUser( nameInput, ageInput ) {
	return {
		name: nameInput, // inputted name
		age: ageInput,
		holding: null
		// For properties with empty values, use null. 
	};
}

let robb = makeUser("Robb", 25);
console.log(robb);

console.log( "age" in robb );
console.log( "isAdmin" in robb);

/* There's a way to do something to each key (property name) in
	an object with a "for...in" loop. */
	
for(let key in robb) {
	console.log("The property is " + key + " and its value is " + robb[key]);
}


/* The variable used in the for...in loop is arbitrary, it could 
	be "bob" and "donut", it doesn't matter. 
	*/
for(let bob in robb) {
	console.log("The property is " + bob + " and its value is " + robb[bob]);
}

/* Suppose you set a newly created variable to another variable 
	that holds an object. The old variable does NOT create a copy 
	of the object for the new variable, they now SHARE the same object. 
*/

/* When you set a variable equal to another variable holding an
	object, the variables now SHARE the object, so any changes 
	you do to the object affect both variables; as a result 
	you change the object with either variable. 
*/

let hob = robb; 
console.log(hob);
hob.name = "hob";
console.log(hob,robb);
// You can make changes to the object with either variable. 
console.log();
console.log(hob == robb, hob === robb);
/* If two variables share the same object, they are equal 
	and strictly equal. 
*/

let bill = makeUser("hob", 25);
console.log(bill);

/* Two variables with objects are only equal if they 
	share the same object. Two variables that have two 
	objects with the properties and values are NOT considered 
	equal!!
*/
console.log(bill == hob, bill === hob);

console.log();
// You can even assign objects to constant variables. 
const userConst = {
	name: "Alex",
	birthday: " 4/24/1992"
}

userConst.name = "Michael";
/* You can actually change the constant variable's object properties,
	you just can't change the object itself. 
userConst = {
	name: "Lani",
	birthday: " 5/19/1964"
}
*/
console.log(userConst);

/* If we want to copy an object's properties into another 
	object, we can use Object.assign(). 
	
	syntax: Object.assign([object to copy propeties into],[object that gives a copy of its properties],
							[2nd object to give its properties to the first object], [3rd object...]);
							
	Object.assign() takes the properties of all the objects after
	the first one and put it into the first object. The function 
	return the first object with its new properties. 
*/
console.log();
let tom = {}; 
Object.assign(tom,hob);
console.log(tom);

/* An even shorter way of assigning properties to empty object is this. 
let tom = Object.assign({}, hob);
*/

// Again, you can have objects inside of objects
let userWithObject = {
	name : "Alex", 
	sizes: {
		height: 173, 
		shoeSize : 10
	}
}

console.log(userWithObject);

