/* ARRAYS */

let girls = ['Joanna', 'Yilin', 'Bree'];

/* In the latest version of JavaScript, we can add an element 
	to an array with square brackets instead of using the push()
	method. 
	
	Just like an object, you can add elements to the array by 
	using square brackets, just make sure that the index number
	is right outside the array, otherwise you will get a lot of 
	empty elements between former last element and the newly added 
	element. 
*/

girls[3] = 'Dawn'; /* There's plenty of empty elements between the 
	former last element and the this element. 
	*/
console.log(girls);

/* Arrays can store elements of any data type, it can even store 
	functions. 
*/
let arrayWithFunction = [1, "Joe", true, function(){ return "hello!"; }];

console.log(arrayWithFunction[3]());

/* Instead of forEach(), you can use the for...of loop to 
	do something to every value in the array. 
*/

for(let girl in girls) {
	console.log(`Hi ${girl}!`);
	
}

/* the length property in an array works exactly how you think it 
	would, but you can actually change the length's value and 
	the array will shorten it self down to the new length!.
*/

let cousins = ["Ariel", "Kevin", "Rian", "Dan Dan", "Stacy", "Chewbee", "Justin", "Pia", "Mia"];
/* Changing the array's length to a smaller value will shorten 
	the array to that length. 
*/
console.log(cousins.length);
cousins.length = 3;
console.log(cousins);

console.log([] + 1);
// Empty arrays are NOT converted to strings. 
console.log([1] + 1);
/* When hit with the plus sign, the arrays are treated as STRINGS,
	so all the operands are treated as strings. 
*/

let testString = "adsfsdf";
console.log( typeof testString == "string");