

/* DESTRUCTURING ASSIGNMENT allows you to take all the 
	values from an object or array and put them into 
	variables. 
	
	DESTRUCTURINGING ASSIGNMENT allows an object or array 
	to easily give a copy of its values to a bunch of 
	variables. 
*/

let arr = ["Alex", "Chen"];

/* Below is destructuring assignment. So array is giving 
	its values to these variables below. 
*/
let [firstName, lastName] = arr;
/* So now when we want to get a value, we don't have to 
	an array and an index number to get it. 
*/
console.log(firstName, lastName, arr);
console.log(firstName.split(''));

let string = "Connor Callahan";
let [stringFirst, stringLast] = string.split(" ");
console.log(stringFirst);


/* It appears that the syntax for destructuring assignement is 
	writing the syntax for an array backwards. 
	
	The syntax appears to be writing the elements of an array, 
		then setting it equal to an existing array. 
		
	The destructuring syntax may also be used on strings as well
*/

let [a,b,c] = ["Rian", "Kevin", "Justin"];
let [one, two, three] = new Map( [["Pacquiao","Phillipines"], ["Mayweather", "USA"], ["Marquez", "Mexico"]]);
console.log(c, three);

/* Of course you may want certain elements in your array to be 
	set to a variable. For elements in the array that you do NOT 
	want to set to a variable, leave a blank space in destructuring
	syntax. 
	
	If you do NOT want to an array's element to be copied to 
	a variable, just put a blank space where element's variable 
	should be. 
*/

let boxers = [ "Pacquiao", "Morales", "Marquez", "Barrera"];
let [ GenSan, SanDiego, Guadalajara, ] = boxers;

/* As long as you can asign a value to it, the data on the 
	left side can be anything, like for example an object property. 
	
	Destructuring syntax is also a quick way to add properties to 
	an object. This could take the place of using a forEach or 
	for of loop. 
*/
let propertyValues = [ "Richard", "25", "Asian", "Data Analyst"];
let richard = {};
[richard.name, richard.age, richard.race, richard.job] = propertyValues;
// The property names are NOT variables, so don' add "let"
console.log(richard);

/* destructuring syntax can also be used to break up properties from 
	object.entries(). 
*/

for ( let [key, value] of Object.entries(richard)) {
	console.log(`${key}: ${value}`);
}

// ...rest is kind of like split(). 

/* If variables aren't assigned to a value, they will just 
	be undefined. 
*/

let [ undefined1, undefined2 ] = [];
console.log( undefined1, undefined2); // both variables return undefined. 

/* To avoid having undefined values when using destructuring syntax, 
	you can use default values. 
*/

let [ default1 = "John", default2 = "James"] = [, "Brooklyn"];
// Of course, arrays can have blank spaces too. 
console.log(default1, default2);

/* As mentioned before, destructuring syntax can be used on object.
	It's very similar using destructuring syntax with an array, 
	except that the variable names have to be the same as the keys 
	inside the object. 
	
*/

let {var1, var2} = {var1: 3, var2: 5};
console.log(var1, var2);
let {var3, var4} = { ketchup: 3, mustard: 5};
console.log(var3, var4);

/* The properties do NOT have to match the order of the variables, 
	as long as the variables have the same names as the object's 
	property names, order doesn't matter. 
*/

console.log();
let {boy, girl} = {girl: "Laura", boy: "Derek"};
console.log(boy, girl);

caseyAffleck = {
	brother: "Ben Affleck",
	wife: "Summer Phoenix",
	son: "Indiana"
}

/* Setting the brother variable with by implicitly 
	stating the object caseyAffleck. 
*/

let {brother} = caseyAffleck;
console.log(brother);

/* If you want a property to copy its value to a variable of a
	DIFFERENT name you have to use a colon point that value to
	that variable. 
	
	If you want a property to copy its value to a different-named 
	variable, have the same-name variable 
	
	You can indirectly have a property give its value to a different-named 
	variable by using a colon. 
	
*/

let { wife: w, son: s} = caseyAffleck;
/* So this says have the wife property's value to the new variable 
	w and have the son property's value go to s. "wife" is NOT a 
	variable. 
*/
console.log(w,s);

/* Just like arrays, when we use destructuring syntax with objects 
	the variables can have default values. 
*/

console.log();
// You can have default value to a variable of a different name. 
let {brother: bro = "ben" } =  caseyAffleck;
let {spouse = "Summer"} = caseyAffleck
console.log(bro, spouse);

/* Now for objects, you can actually create a new object out 
	of the properties you didn't use. You do it with the rest 
	operator. 
*/

let family = {
	father: "Dean",
	mother: "Kaitlynn",
	daughter1: "Marlee",
	son: "Corbin",
	daughter2: "Charlee"	
};

/* 
let {father: dad, mother, ...rest} = family;

Don't worry about three dot notation, it's not fully 
	supported yet. 
*/

/* In all the statements above, we created new variables and gave 
	them values from objects, but what if we want to give values 
	to existing values?
*/

let dad, mom;

/* If you write the code like this, you'll get an error. 

{ father: dad, mother: mom} = family;

*/

/* If you going to give a value to existing variables, you have to 
	put parenthesis around the code statement. 
*/

({ father: dad, mother: mom} = family);
console.log(dad, mom);

/* One even have objects and arrays copy their values to other OBJECTS. 
	If the object giving the values has objects and arrays inside it, 
	it has no problems giving those objects and arrays as well. 
	
*/

let options = {
	
	size: {
		width: { thisWorked: true},
		height: 200
	},
	
	items: ["Cake", "Cupcake"],
	
	extra: true
	
	
}

/* So now we are going to use the destructuring syntax to have an 
	object copy its values to objects as well as variables. 
	
	And again for a variable or object to get a value from the object, 
	the variable or object has to have the same name as a variable or 
	object inside the object. 
	
	The object already has a value. 
	
	For some reason destructuring syntax does not create the new 
		object size, perhaps because size is already defined?
		
	Confirmed the size object was not created because its already 
	been defined. 
*/

let {
	size: {
		width,
		height
	} , 
	
	items, 
	
	extra, 
	
	result = "tasty"
} = options;

/* Again, notice that the objects and variables receiving the 
	values are the same name as objects and values inside the 
	object. Now they have the values from inside the object and 
	I can call the objects and variables to prove it.

	Say one of the values in the giving object is an object. If 
	you values from that inner object, you have to match the structure 
	from that object. 
*/

console.log(width, items, result);

/* Suppose you have a function with a ton of parameters and that 
	function takes a lot of arguments of a specific object. How 
	would you write that function so its easy to use?
*/

/* You shouldn't write it like this */

function thisStinks( title = "Untitled", width = 200, height = 100, items = []) {
}

/* Because there are so many parameters to fill in and you would have to fill them 
	in by scratch. But if you add curly brackets around the parameter. 
*/

function thisRocks({ title = "Untitled", width = 200, height = 100, items = [] } = {}) {	
	return `${title} ${width} `;
}

/* This is great! Because all you need to do is to put a SINGLE object as a parameter 
	and values will go into place because you're using destructuring syntax! 
*/

let cake = {
	title: "cake",
	width: 23,
	height: 23, 
	items: ["flour","sugar","eggs","vanilla"]
	
}

console.log(thisRocks(cake));
console.log(thisRocks({}));
console.log(thisRocks());


/* 
	If this rocks doesn't have an arguments, then it will just 
	use all of its default values 
	
	Remember, if you want to use the functions default values, you 
	have to throw in the empty object as an argument. thisRocks() 
	DOES have arguments and you need to define them otherwise your 
	program will get an error... unless we give thisRocks a default 
	object. 
	
	function thisRocks{ title = "Untitled", width = 200, height = 100, items = [] } = {}
	
*/







