/* ARRAY METHODS */

/* You can use the delete [something] operator to remove elements 
	from an array.  
*/
let states = ["Nevada", "California", "Arizona", "Oregon", "Utah"];
delete states[1];
console.log(states, states[1]);

/* Using delete [something] wells alright, but delete [something] 
	doesn't remove the empty element after it removes the element's
	value. 
*/


// It may be better to use array's splice() method instead. 

states.splice(1, 1); // ['Nevada, 'Arizona', 'Oregon', Utah','Maine']
states.splice(3, 1, "New York", "New Hampshire", "Vermont"); 
console.log(states);

/* splice()'s second parameter sets how many elements to delete. 
	The element that starts at the starting index number is included. 
*/

/* You may also use splice just to add elements, just set the 
	number of elements you want to remove to 0. 
	
*/
states.splice(0,0, "Alabama","Missouri");
/* If you add elements without removing any, the first element 
	has its index number at the starting index number (first 
	parameter). 
*/
states.splice(states.length,0,"Delaware");
/* If you want to add elements to the end, make sure that the 
	starting index number is equal to the array's length.
*/
console.log(states);

/* slice() creates and returns an array from a parent array. 
	This new array gets all the elements starting at an index 
	number and ending, but not including another index number. 
*/

let southernStates = states.slice(0,2);
console.log(southernStates);
/* Using a negative number as a parameter assumes that you're 
	starting from the end.
*/
let delaware = states.slice(-1); /* Get one element starting from 
	the back. 
	*/
console.log(delaware);
// Put two elements together with concat. 
let boxers1 = ["Mayweather", "Pacquiao", "Chavez"]
let boxers2 = ["Bradley", "De La Hoya", "Cotto"];
let allBoxers = boxers1.concat(boxers2);
console.log(allBoxers);
/* Concat's arguments do NOT have to be arrays, they 
	can also be values. 
*/
console.log(allBoxers.concat(["Ali","Foreman","Frazier"],"Thurman","Spence"));
/* indexOf() uses strict equality to find an element in an array, which 
	means falsely values like "" will not count as 0. 
*/

console.log([null,"", undefined].indexOf(0));

/* Remember how we had no way to look inside the properties 
	of an array of objects, now we do! With the find function. 
*/

let users = [
	{wins: 50, name: "Mayweather"},
	{wins: 59, name: "Pacquiao"}, 
	{wins:107, name: "Chavez"}
];

let find = users.find(function(element){
	return element.wins > 100;
});

let find2 = users.find(function(element){
	return element.name == "Pacquiao";
});

/* You want to add an element to the end of the array, use 
	square brackets and use the array's length as the index number.
*/
users[users.length] = {wins:50, name:"Tyson"};

console.log(find);
console.log(users);

let filter = users.filter(function(element){
	return element.wins == 50;
});
console.log(filter);

/* The map() function does something to each element in the array, 
	puts the results into another array and returns it. 
*/

let map = users.map(function(element) {
	return element.wins;
});

console.log(map); // [50, 59, 107, 50]
console.log(allBoxers.sort());
console.log(allBoxers);

let nameList = 'Toru, Noako, Nagasawa';
/* the split() function takes the function its attached to, 
	splits into pieces, puts the pieces into a array and 
	returns that array. 
*/
console.log(nameList.split(", "));
/* Again, use the empty element to split the string into 
	an array of characters. 
*/

let numArray = [1, 2, 3, 4, 5, 6];

let reduceMe = numArray.reduce(function(sum, currentElement) {
	return sum + currentElement;
});	

console.log(reduceMe);

/* Remember that an array is an object, so if you use typeof on
	an array, you'll get an object. So what if you want to check 
	if something is an array? Use the Array.isArray() method. 
*/

console.log( typeof states);
console.log ( Array.isArray([]));
console.log ( Array.isArray("Pacquiao"));