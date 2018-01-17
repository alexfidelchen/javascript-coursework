/* SYMBOL TYPE */

// You create a symbol type using this. 
let id = Symbol();

/* To give a symbol type a symbol name, give the Symbol() function 
	an argument (put a value between its parenthesis). 
*/

/* Symbol types are guaranteed to be unique, even if two symbols 
	have the SAME symbol name. 
*/

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log( id1 == id2); // returns false. 

// Now let's store a symbol into an object. 

let user = {
	name: "John"
};

/* To use a symbol as an object's property, create the symbol and
	put it into a variable,then using square brackets use that variable 
	as a property name
*/
let idObject = Symbol("id");
/* Yes, property name is a variable, so you always have to 
	reference it using square brackets. 
*/
let stringTest = "Variable Test";
user[idObject] = "ID Value";
/* Variables used as property names are visible in the object 
	unless they are symbols. 
*/
user[stringTest] = "String is visible to reference";
// Symbols do not appear when they are returned by a function.
console.log(user);
/* Remember, to refer to any property names with variables
	you have to use square brackets. 
*/
console.log(user[idObject]);

/* If you want to place a variable with a symbol directly into 
	the object, place the variable inside the object with square 
	brackets around it. 
*/

let realName = Symbol("realName");

let spy = {
	spyName: "Strider",
	[realName] : "Henry Chau"
	
}

console.log(spy);

/* Again, since symbols are invisible to functions, so 
	for...in loop skip property names with symbols. 
*/

for ( let key in spy) {
	console.log(key, spy[key]);	
}

/* Object.assign() can see properties with symbols, so 
	Object.assign() will have all objects after the first 
	one give its properties away, even if they are symbols. 
*/
let newSpy = Object.assign({},spy);
console.log(newSpy[realName]);

/* To turn a symbol into a global symbol, use the Symbol.for() 
	function. 
*/

let globalSymbol = Symbol.for("globalSymbol");
let sameSymbol = Symbol.for("globalSymbol");
console.log(globalSymbol);
console.log(Symbol.keyFor(globalSymbol));
console.log( globalSymbol === sameSymbol);
