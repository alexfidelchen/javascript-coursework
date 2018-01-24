/* ARRAY METHODS EXERCISES */


/* EXERCISE 1 */
// Using "str" to avoid possible string keyword?
function camelize(str) {
	upperCaseArray = capitalize(str.split("-"));
	
	return upperCaseArray.join("");
	/* To join all the characters without a separator, leave an 
		empty space. 
	*/
	
}

function capitalize(array) {
	for(let x = 1; x < array.length ; x++) {
		
		array[x] = array[x][0].toUpperCase() + array[x].slice(1);
		/* If slice() doesn't have a second parameter, the return 
			string gets all the characters after the index number. 	*/
		
	}
	
	return array;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));


/* EXERCISE 2 */
function filterRange(arr, a, b) {
	return arr.filter( function(element){
		return ( element >= a && element < b);
	});
}

console.log( filterRange([1,2,3,4,5,6], 0, 10));
console.log( filterRange([5,3,8,1], 1, 4));

/* EXERCISE 3 */
function filterRangeInPlace(arr, a, b) {
	for( let x = 0; x < arr.length; x++) {
		arr[x] = ( arr[x] >= a && arr[x] <= b) ? arr[x] : 0;
		
		if(arr[x] == 0) {
			arr.splice(x,1);
		}
	}

}

console.log();
console.log("EXERCISE 3");
let changeMe = [5,3,8,1];
filterRangeInPlace(changeMe,1,4);
console.log(changeMe);

/* EXERCISE 4 */
function compareNumbers(a, b) {
			  if (a < b) {
				return -1;
				/* By returning -1, you're telling a to an index 
				number lower than b.
				*/
			  } else if (a > b) {
				return 1;
				/* By returning 1, you're telling a to be an index 
					number higher than b. 
				*/
			  }
			  // If neither, a == b 
			  return 0;
			  /* By returning 0, a and b don't change index numbers 
				(don't move). 
			*/
			}
let arrEx4 = [5, 2, 1, -10, 8];

/* Calling the function without parenthesis gets the function itself, 
	it does NOT call the function. 
*/
console.log(arrEx4.sort(compareNumbers).reverse());

/* EXERCISE 5 */

function copySorted(arr) {
	return arr.filter(function(element){
		
		return element;
		/* Use the filter method with no filter to create a copy 
			of the array. 
		*/
	}).sort();
}

let arrEx5 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arrEx5);
console.log(arrEx5);
console.log(sorted);

/* EXERCISE 6 */
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(function(element){
				return element.name;
			});
			
console.log(names);

/* EXERCISE 7 */

let john7 = { name: "John", surname: "Smith", id: 1 };
let pete7 = { name: "Pete", surname: "Hunt", id: 2 };
let mary7 = { name: "Mary", surname: "Key", id: 3 };

let users7 = [ john7, pete7, mary7 ];
function mapUsers(array) {
	
	return array.map(function(element) {
		return element = {
			fullName: element.name + " " + element.surname,
			id: element.id
		};
	});
}

let usersMapped = mapUsers(users7);
console.log(usersMapped);
console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

/* EXERCISE 8 */

console.log();
console.log("EXERCISE 8");

function compareNames(a, b) {
			  if (a.name < b.name) {
				return -1;
				/* By returning -1, you're telling a to an index 
				number lower than b.
				*/
			  } else if (a.name > b.name) {
				return 1;
				/* By returning 1, you're telling a to be an index 
					number higher than b. 
				*/
			  }
			  // If neither, a == b 
			  return 0;
			  /* By returning 0, a and b don't change index numbers 
				(don't move). 
			*/
}

let john8 = { name: "John", age: 25 };
let pete8 = { name: "Pete", age: 30 };
let mary8 = { name: "Mary", age: 28 };
let users8 = [ john, pete, mary ];

console.log(users8.sort(compareNames));
console.log(users8[1].name);

/* EXERCISE 9 */

console.log();
console.log("EXERCISE 9");
arr9 = [1, 2, 3];

function shuffle(arr) {
	
	let shuffled = [];
	let length = arr.length;
	
	for( let x = 0; x < length; x++) {
		
		let random = parseInt(Math.random() * arr.length);

		shuffled[x] = arr[random];
		arr.splice(random,1);
		console.log(arr,x);
		// Once the element is used, its removed from the array.
	}
	
	return shuffled;
}

/* EXERCISE 10 */
let john10 = { name: "John", age: 25 };
let pete10 = { name: "Pete", age: 30 };
let mary10 = { name: "Mary", age: 29 };

let arr10 = [ john, pete, mary ];

function getAverageAge(users) {
	let allAges = users.reduce(function(sum,user) {
		return sum + user.age;
	},0);
	
	return allAges/users.length;
}

console.log(getAverageAge(arr10));

/* EXERCISE 11 */

console.log();
console.log("EXERCISE 11");

function unique(arr) {
	
	let result = []

	arr.forEach( function(element) {
		if( !(result.includes(element))) {
			result.push(element);
		}
	});
	
	return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));


