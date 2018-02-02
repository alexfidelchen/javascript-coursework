/* JSON METHODS TO JSON EXERCISES */

// EXERCISE 1

let user = {
  name: "John Smith",
  age: 35
};

let json1 = JSON.stringify(user);
let user2 = JSON.parse(json1);
console.log(user2);

// EXERCISE 2

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

room["occupiedBy"] = meetup;
meetup.self = meetup;

console.log(meetup);
console.log();

let json2 = JSON.stringify(meetup, function(key, value) {
										//console.log();
										console.log(key,value);
										if (key != "" && value == meetup) {
											return undefined;
										}
										return value;
									}
)
/* You want to return undefined when the value is equal to meetup 
	because properties with the value of undefined are ignored 
	by stringify(). Maybe the function runs before the object is 
	converted to JSON. 
	
	Due to wrapper objects, you need key != "", otherwise meetup 
	will return undefined and there will be no object to iterate 
	though. 
*/

console.log(json2);
