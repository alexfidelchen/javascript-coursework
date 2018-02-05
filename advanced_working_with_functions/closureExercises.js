/* CLOSURE EXERCISES */

/* EXERCISE 1) Yes, they're independent, counter2() will return 
	0, then 1. The outer LE (makeCounter()'s LE) is deleted after 
	counter()'s run, so a new count is created when counter2() is 
	invoked (starts executing). 
	
	EXERCISE 2) Yes, the constructor created a Counter object and
		this object is not deleted after you're done executing a method. 
		
	SOLUTION: Remember, methods can share the same outer LE. When
		when the object is created, both methods are in the same 
		LE. The method's LE may disappear after they're done
		executing, but the outer LE still exists because the 
		object is still referenced. 
		
		The object is still referenced so its LE is still there. 
		
	EXERCISE 3) "Hello, John"
	
	SOLUTION: FALSE. You'll get an error because the global space 
	does not have access to sayHi(). You're using sayHi() outside 
	its Outer LE, so you can't use it. 
		
	
*/

// EXERCISE 4 

/* My solution: Create a nested function that returns a and 
	adds it to b. The inner function should return a + b because 
	it would have access to b. 
	
	SOLUTION: I was on the right track, where I messed up is that 
	I assumed what was returned is function() not function aka 
	function with parenthesis. So when I return a function, the 
	outer parenthesis activates the returned function. 
*/

function sum(a){
	
	
	return function (b) {
		return a + b;
	}
}

console.log(sum(1)(-2));

// EXERCISE 5

/* Questions: How do I select the current element? 

	My solution: Ah! You get the current element by 
		returning a function. 
*/
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log();
function inBetween(a,b) {
	
	return function(c) {
		return c >= a &&  c <= b;
	}
}

function inArray(arr){
	
	return function(a) {
		return arr.includes(a);
	}
}

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

// EXERCISE 6

/* My solution: You can't just put the argument directly into
	sort()'s function, the function inside short will read it as a string. 
	
	SOLUTION: Ugh, I could have used square brackets so I can
		search the object my property 
*/

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];


function byField(field) {
	switch (field) {
		
		case "name" :
			users.sort((a, b) => a.name > b.name ? 1 : -1);
			break;
		case "age" :
			users.sort((a, b) => a.age > b.age ? 1 : -1);
			break;
		case "surname" :
			users.sort((a, b) => a.surname > b.surname ? 1 : -1);
			break;
	}
}

function byFieldSolution(field) {
	users.sort((a, b) => a[field] > b[field] ? 1 : -1);
}

let john = { name: "John", age: 20, surname: "Johnson" };

console.log(john["name"]);
console.log(users.sort(byFieldSolution('surname')));

/* Even if I return a function, nothing would happen. 
*/

// EXERCISE 7 

/* My solution: It should be a for loop instead of a while 
	loop, the while loop keeps increasing until it reaches 
	10, which is why all the values are 10. 
*/

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10 ; i++) {
	  let shooter = function() {
		console.log(i);  
	  }
	  
	  shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); 

