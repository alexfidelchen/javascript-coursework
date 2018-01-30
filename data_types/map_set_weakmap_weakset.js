/* MAP, SET, WEAKMAP, WEAKSET */

/* To create a new map, an object where the property names 
	can be any value, you need to create it from a constructor. 
*/

let firstMap = new Map();
// Create a map.

/* Since a map is an object, you can add properties to it, 
	and since its a map, property names can be any data type 
	you want. 
*/

firstMap.set("This is a string", "str1");
firstMap.set(3, 9);
firstMap.set(2, "Roger Ebert");
/* This is ok because maps allows any datatype for property names, 
	the property value can be anything you want. 
*/

/* In maps, two keys with the same value but two different datatypes will 
	be considered DIFFERENT, thus will be different properties. 
	
	Unlike objects, keys are not converted to strings. 
*/
firstMap.set('1', 9); 
firstMap.set(1, "Mon mon mon");
firstMap.set(true, "This is true");
console.log(firstMap);

let object1 = {
	true : "awesome",
	'length' : 2
}

console.log(object1);
// Even objects can be keys 
let alex = { name: "Alex" } 
// Let's count the number of times a person visits the store. 
// Remember, you have to create a map from the map constructor. 
let visitsCountMap = new Map();
visitsCountMap.set(alex, 123);
// So the alex object went to the store 123 times. 
console.log(visitsCountMap,visitsCountMap.get(alex));
/* Looks like you can't use square brackets to get properties 
	from maps. 
*/
/* Maps can chain methods (a method because its a function inside
	an object). 
*/
console.log();
console.log( firstMap.set(false, "This is false").set('id', 3303));

/* You can actually create maps from arrays, just use the array
	as a parameter when creating a new map. 
	
*/

let secondMap = new Map( [
	[1, "Ike"],
	[2, "Titania"],
	[true, "This is true"],
	[false, "This is false"],
	['length', 4]
]);
console.log();
console.log(secondMap);

/* It's possible to create to create a map from an 
	object, but you need to turn it into a array first using 
	the Object.entires() method. 
*/

let forEntries = {
	Lord : "Ike",
	Paladin : "Titania",
	Knight: "Gatrie",
	Mage : "Soren"
};

let mapEntries = new Map(Object.entries( forEntries ));
console.log();
console.log(forEntries);
console.log(mapEntries);

console.log( mapEntries.keys(), mapEntries.values() );
// keys() and values() return a mapIterator object

/* You're supposed to use keys() and values() with 
	a for of loop. 
	
	Since the map already has an iterator (function used 
	by the for of loop), a map can use a for of loop at 
	the start. You should just specify whether you want 
	to use the for of loop on the map's keys, property 
	values or the properties. 
	
*/

console.log();
for (let title of mapEntries.keys()) {
	console.log(title);
}

/* If you want to iterate through the the property values, use 
	the values() method. 
*/

console.log();
for (let name of mapEntries.values()) {
	console.log(name);
}


console.log();
/* A SET is an object where each property value is used only 
	once per object. 
	
	Just like maps, you create sets by using a constructor. 
*/

let set1 = new Set();
/* You probably cannot explicitly create a set because JavaScript 
	will probably think its an object. 
*/

// Lets add a couple of properties to the object. 
set1.add(42);
set1.add("Marceline");
set1.add(null);
console.log(set1.add( { name: "Anakin", job: "Jedi Knight"}) );
console.log(set1.add(42));
/* Notice when you try to add a property value that's already in 
	the set nothing happens. 
*/

// It's possible to create a set from an array. 
let set2 = new Set(["Pacquiao", "Mayweather", "Marquez", "Pacquiao"]);
/* If any of the values repeat, repeated value is removed from the 
	set. 
*/
console.log(set2);
console.log(set2.delete("Mayweather"));
console.log(set2);
console.log();
console.log(set1.entries());

/* You can iterate through a set the same way as a map. Sets can 
	use the for of loop from the start, so sets are iterable. 
*/

console.log();
for (let boxer of set2) {
	console.log(boxer);
}

/* you can also use a forEach loop to iterate through the values as 
	well. 
*/

console.log();
set2.forEach((currentBoxer, current, set2) => console.log(currentBoxer));

/* WeakMaps and WeakSets follow different rules than maps and sets. 
	For maps, the keys must be objects. 
*/

let john = { name: "John" };

let weakMap1 = new WeakMap();
console.log(weakMap1.set(john, "..."));
console.log(weakMap1.get(john));
john = null;
console.log(weakMap1.get(john));
/* The only way to remove an object from a map or set is through 
	a variable, you wouldn't be able to reference the key any
	other way. 
*/
console.log(weakMap1);

/* A possible use of a WeakMap is to hold information while 
	an object exists and to delete itself when the object is gone. 
	
	For example, suppose a we want to keep a visit count a user 
	while he's in the store, once he leaves the store, we can 
	remove his visitor count. 
*/

console.log();
let store = new WeakMap();
let connor = { name: "Connor" };
store.set( connor, 18);
console.log(store.get(connor));
connor = null; 
console.log(store.get(connor));

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
]

console.log();
let weakSet1 = new WeakSet(messages);
console.log(weakSet1);
// weakSet1.add("doesn't work"); Get an error if you run this. 



