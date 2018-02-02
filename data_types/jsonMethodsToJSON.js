/* JSON METHODS, TOJSON */

/* JSON, or JavaScript Object Notation, makes it easy to send
	JavaScript objects or values over the internet. 
*/

let student = {
	name: "John",
	age: 30, 
	isAdmin: false, 
	courses: ["html", "css", "js"],
	wife: null
};

/* To turn an object into JSON format, use the stringify() 
	method. 
*/

let json1 = JSON.stringify(student);


console.log(json1);
console.log(student);
console.log(typeof json1);

/* Objects and values that are written in JSON (JavaScript Object Notation)
	are sometimes called JSON-encoded, serialized, stringified, or if its 
	an object a marshalled object. 
*/

let json2 = JSON.stringify(["Joanna", "Bree", "Yilin", "Rachel"]);
let json3 = JSON.stringify(null);
// Single quotes are now double quotes. 
let json4 = JSON.stringify('doubleQuotes');
console.log(json2, typeof json2);
console.log(json3, typeof json2);
console.log(json4, typeof json2);

/* Other programming languages use JSON as well, due to this flexibility, 
	JSON can NOT convert JavaScript-specific features, aka JavaScript-specific
	features cannot be written in JSON. If you try to convert JavaScript-specific 
	features into JSON, nothing happens.  
	
	Things that cannot be converted in JSON are:
	- Symbolic properties (properties with symbols as property names). 
	
	Features that cannot be converted to JSON IN THE CHROME BROWSER are:
	- Methods (functions inside objects)
	- Properties with the value undefined. 
*/

let user = {
	greet(){
		console.log("Greetings!");
	},
	array1: ["Miggy", "Mia", "Gabby"],
	[Symbol("id")]: 123,
	notDefined: undefined
}

let json5 = JSON.stringify(user);
console.log(user);

/* Nested objects can be converted to JSON */

console.log();
student['son'] = {
	name: "John Jr.",
	age: 2,
	isAdmin: false,
	courses: null, 
	wife: null
}

console.log(student);
console.log(JSON.stringify(student));
/* Again notice that the property names and strings are in 
	double quotes. 
*/

/* Values and objects converted to JSON can NOT have 
	circular referencing, aka an object indirectly 
	referring to itself. If you try, you'll get an error. 
*/

let egg = {
}

let circle = {
	chicken: egg,
	whoCares: "Not me", 
	doesSheCare: false,
	couples: {male: "Anthony", female: "Alexa"}
}

egg["chicken"] = circle;


console.log();
console.log(circle);

/* You'll get an error if you try to convert an object 
	with circular referencing. 
	
	console.log(JSON.stringify(egg));
*/

/* Fortunately, if we have an object that has circular reasoning, 
	we can remove it from an object by selecting which properties 
	we want inside the object. To do that, place all the properties 
	you want to be converted to JSON in an array with the property 
	names in double quotes. 

*/

let json6 = JSON.stringify(circle, ["whoCares", "doesSheCare", "couples"]);
console.log(json6);
/* Notice that the that the couples property has an empty object; that's 
	because you need to the properties of nested objects to your array 
	of properties you want. 
	
	Nested objects have to have their properties in the array of properties 
	you want, otherwise the object will be empty. 
*/


let json7 = JSON.stringify(circle, ["whoCares", "doesSheCare", "couples", "male", "female"]);
console.log(json7);

/* Notice that this array is pretty long. Instead of using an
	array, we could use a function to choose every function we 
	want in the JSON object. 
*/

/* That's interesting, they use the question mark operator to 
	shorten what to do when you get the circular reference 
	to a single line. 
	
	Instead of an array, we can use a function to select which 
	properties we want in the JSON object. The function will 
	be applied to every property, aka every key: value pair 
	the returned value will replace the property's current 
	value in the JSON object. This function is also applied 
	to properties of objects inside objects. 
	
	The "this" keyword return the object the current property 
	is in, so in the case below, it will return circle. The 
	first object returned by this will be a "wrapper object"
	or an object with an empty key and the object as its value. 
*/
console.log();
console.log("// FIRST USE OF THIS");
let json8 = JSON.stringify(circle, function(key, value) {
							 console.log(this);
							return (key == "chicken") ? null : value;
						}
);
console.log();
console.log(json8);

/* stringify()'s third parameter tells stringify() to start a new 
	line with each property and indent by the chosen number of spaces. 
	Even nested objects will indent their properties. 
*/

console.log();
console.log("// SECOND USE OF THIS");
let json9 = JSON.stringify(circle, function(key, value){
								return (key == "chicken") ? null: value;
							}
, 4);
console.log(json9);

/* The number of spaces in a string doesn't change the JSON object's 
	properties, it just makes the JSON object look cleaner when you 
	print the JSON. 
*/

/*	One thing we could do is simplify a nested object to a number 
	if its converted to JSON. 
	
	toJSON() is the method that runs if the object is converted
		into JSON; this runs instead of the object turning to 
		JSON. 
		
	If an object has a toJSON() method, that method runs when 
		an object is converted into JSON. 
		
*/

let room = {
	number: 23,
	toJSON() {
		return this.number;
	}
}

/* You can just put a variable as a property and 
	the variable's value will be the property value. 
*/

let meetup = {
	name: "Las Vegas Demo Day",
	room
}

console.log(JSON.stringify(meetup));
console.log(JSON.stringify(room));

/* Remember, in this case, this refers to the current object, 
	so its referring to room, thus returns room.number. 
*/


/* Remember, JSON.parse() converts a JSON back into a object or 
	value. 
*/
console.log(student);
console.log();
json10 = JSON.stringify(student, (key, value) => value, 3);
console.log(json10);
object1 = JSON.parse(json10);
console.log(object1);

/* Theres no such thing as a JSON object as all values in JSON 
	are strings. 
*/

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

let object2 = JSON.parse(schedule, function(key, value) {
						conosle.log(key,value);
						if (key == "date") {
							return new Date(value);
						}
						return value;
					}
);



console.log(object2.meetups[1].date.getFullYear());



