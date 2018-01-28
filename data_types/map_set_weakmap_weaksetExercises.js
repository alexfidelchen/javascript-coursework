/* MAP, SET, WEAKMAP, WEAKSET EXERCISES */

/* EXERCISE 1 */

function unique(arr) {
	
	let result = [];
	
	let uniqueValues = new Set(arr);
	console.log(uniqueValues);
	// Check if the uniqueValues actually has unique values. 
	
	for ( value of uniqueValues) {
		
		result.push(value);
		// Check if the values are actually getting pushed on. 
		console.log(result);
	}
	
	return result;
}


let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values));

/* EXERCISE 2 */

function aclean(arr) {
	
	let result = [];
	let sorted = [];
	arr.forEach(function(elem) {
		sorted.push(alphapetize(elem).toLowerCase());
	});
	
	sorted = Array.from(new Set(sorted));
	console.log(sorted);
	console.log();
	
	/* This solution doesn't work because the arrays are not 
		the same size. 
		
		Broken code below 
		
	sorted.forEach(function(elem,currentIndex) {
		let index = currentIndex;
		while(alphapetize(arr[index]).toLowerCase() != sorted[index]){
			console.log(arr[index],sorted[index]);
			index++;
		}
		result.push(arr[index]);
		console.log(result);
	});
	
	*/
	

	
	return sorted;
}

function alphapetize(elem) {
	return elem.split('').sort().join("");
}

let arr2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr2));

/* SOLUTION: Store variations to the the word in a map, where 
	the key is the alphapetized string and the word is the value. 
	If the anagram happens to come up, it will override the current 
	word, so you don't get an anagram of that word. 
	
	The problem with my solution is that there is no way to "unscramble" 
	the words once you find the unique words. 
*/

/* EXERCISE 3  */

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: numbers.push is not a function
keys.push("more");

/* The problem with keys.push() is that keys is not an array, it's 
	a mapIterator object. You need to use Array.from() to get an array. 
*/

/* EXERCISE 4 
	
	Use a WeakMap, each text object can be attached to "was it read" object, 
	then get removed if the message was read. 
	
	Solution: Incorrect. A WeakMap makes the text object and "was it 
		read" into a property; this adds properties to the text object
		which is bad news if someone else is managing the code. 
		
		A WeakSet keeps does NOT attach values to the text objects so 
		the all the objects stay the same. You can check if a message 
		has been read putting all the read messages into a WeakSet. 
*/

/* EXERCISE 5

	WeakMap, because you want to store a date with each text object. 
	And the date will dissapear once the message text object is gone. 

 */

