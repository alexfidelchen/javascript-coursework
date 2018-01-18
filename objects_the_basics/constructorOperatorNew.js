/* CONSTRUCTOR, OPERATOR "NEW" */

// We can create a lot of objects using a constructor. 

// A constructor is a function that creates objects 

function User(name) {
	this.name = name;
	this.isAdmin = false;
}

/* Notice that our constructor is capitalized. To use 
	the constructor, use the "new" operator which creates 
	a new object. 
*/

let user = new User("Jack");

/* "this" happens to work correctly when we're working with
	constructors and not with functions that return an object, 
	why?
	
	because 
*/


/* Alright, so an empty object is added. Both cases, objects are 
	returned. It could be that "this" is referencing an object 
	therefore is a little different. 
	
	- As this object is constructed, "this" follows different rules. 
	
	function User(name) {
	this = {
		this.name = name;
		this.isAdmin = false;
	};
	
	return this;
}
*/

/* By using new.target, we can write constructors where you don't 
	need to have "new" in front of the constructor to create a new 
	object. 
*/

function User(name) {
	if (!new.target) {
		return new User(name);
	}
	
	this.name = name;
}

let alex = User("Alex");
let jeremy = new User("Jeremy");

console.log(alex);
console.log(jeremy);

/*
	
	If your function has a return statement, it will just return 
	the object created by the constructor unless the function returns
	a different object. 
*/

function Animal(name) {
	this.name = name;
	return 8; 
	/* Returns the object created by constructor, even though the 
		function returns 8. 
	*/
}

/* To create an object using a constructor, put the "new" operator
	in front of it. 
*/

/* fakeOut() looks like its going to return a animal, 
	or a person, but it actually returns a ice cream! 
*/

function fakeOut(name){
	this.name = name;
	return {
		iceCreamFlavor : "Chocolate"
	};
}

let lion = new Animal("Lion");
console.log(lion);

let matthew = new fakeOut();
console.log(matthew);

// We can also write create objects with methods using constructors. 

// You create functions with "function", let is for variables. 
function Human(name) {
	this.name = name;
	/* Since methods are properties, you can add methods like 
	properties. 
	
	the "this" in front of the method is really important, 
	otherwise, JavaScript will think that the function is 
	a function inside the constructor. 
	*/
	this.eatCookie = function() { /* if just eatCookie, 
		[object name].eatCookie returns an error. 
		*/
		console.log(this.name + " eats a cookie!");
	}
}

let conan = new Human("conan");
conan.eatCookie();


/* EXERCISES 
1) No, because there is no deep search for objects. 
	Correct answer, YES. If both constructors return the same 
	external object, then it's possible. 
*/

/* If you return an object from the same variable, then it's 
	possible for them to equal to each other. 
*/
let emptyObject = {};

function A() {
	return emptyObject;
}

function B() {
	return emptyObject;
}

console.log("Is it possible for an object from A equals an object from B?");
console.log(new A() == new B());

/* EXERCISE 4 */
console.log(("2 + 2").split(" "));