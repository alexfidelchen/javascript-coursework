/* ITERABLES */

/* We can understand iterables (things that can use the for of loop) 
	better if we create an object. 
*/

let range = {
	from: 1,
	to: 5
}

/* Objects do not start as iterable, they need to add the 
	Symbol.iterator to make them that way. 
	
	Objects do not start as iterable. When you call a for of 
		loop, you have to tell the object what to do. 
	
*/

/* When range object calls a for of loop, it calls the Symbol.iterator 
	Remember, a symbol is a hidden property inside an object and properties 
	may hold functions. 
	
	So when an object calls a for of loop, its calling the function inside 
	the Symbol.iterator symbol (hidden property). 
	
	For the for of loop to work correctly, the Symbol.iterator must return 
	an interator aka an object with the next() method to get its value, 
	because when the for of loop wants to get the next value, it looks 
	at next(). 
*/

/* range is calling this symbol */
range[Symbol.iterator] = function() {
	
	// Looks like you're returning an object... 
	return {
		/* Looks like the current and last properties 
		help the for of loop figure out where it is in the loop. 
		*/
		current: this.from,
		last: this.to, 
		
		/* What do you do to the next value? */
		next() {
			if (this.current <= this.last) {
				// Return an object. 
				return {
					done: false, 
					value: this.current++
			}} else {
					return {
						done: true
					}
				}
			}
			
		}	
	}
	

for (let num of range) {
	console.log(num);
}

/* Pretty much, objects are not naturally interable, aka you cannot 
	use a for of loop on an object from the start. You have to give 
	the object an interator so it can use the for of loop, and the 
	iterator has to written in a certain way. Looks like you have to 
	create a function that returns an iterator to use it. 
	
	Of course, since a symbol is an object property, symbols can be
	methods and can be written in method shorthand as well. 
*/

/* A general object can't use the for of loop until its function
	is written. 
	
	Fortunately, strings have their for of function (the function 
	the for of loop uses) already written, so you can use the for of 
	loop on it automatically. 
*/
console.log();
for (let char of "test") {
	console.log(char);
}

/* Since interators are stored in symbols, they are hidden from functions 
	unless they are called directly. But here, we are going to call 
	the iterator directly just to show we can do it. 
*/

let str = "Hello";
/* Use square brackets here to avoid possible confusion from 
	using the dot operator. 
*/

let iterator = str[Symbol.iterator]();
// Grab the object with the iterator function.

console.log();
while (true) {
	let result = iterator.next();
	if (result.done) {
		break;
	}
	// Value of current character. 
	console.log(result.value);	
	
}

let arrayLike =  {
	0: "Hello",
	1: "World!",
	length: 4
	/* If an array-like is used to create an array, the length 
		sets the number of elements in an array. If the length 
		is higher than the number of properties (excluding length) 
		in the array-like, the remaining elements are not surprisingly 
		undefined. 
	*/
};

let arr = Array.from(arrayLike);
/* It appears that when you create an array from an iterable, 
	the elements are the elements from the iterator aka the 
	values returned by the function the for of loop uses.

	The elements from the iterable seem to come from the 
	for loop function. 
*/
let arr2 = Array.from(range);
console.log(arr, arr2);

// You can apply a funciton prior to adding the elements to the array.

let arr3 = Array.from(range, num => 2 * num );
console.log(arr3);





