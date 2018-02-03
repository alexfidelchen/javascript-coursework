/* RECURSION AND STACK EXERCISES */

// EXERCISE 1 

function sumToFor(n) {
	let sum = 0;
	
	for (let x = 1; x <= n; x++) {
		sum = sum + x;
	}
	
	return sum;
}

function sumToRecursion(n) {
	
	if (n == 1) {
		return 1;
	} else {
		return n + sumToRecursion(n - 1);
	}
	// No need for variable. The value will be returned automatically. 
}

function sumToSequence(n) {
	let sum = 0;
	
	for (let x = 1; x <= n; x++) {
		sum = sum + (1 + (x - 1));
	}
	
	return sum;
}

console.log(sumToFor(1), sumToFor(4), sumToFor(100));
console.log(sumToRecursion(1), sumToRecursion(4), sumToRecursion(100));
console.log(sumToSequence(1), sumToSequence(4), sumToSequence(100));

/* The fastest variant is the for loop case. For loops compute 
	faster than a recursion. The slowest is the recursion. Recursions 
	is usually shorter code, but is slower to process because a execution 
	context is created every time a function makes a nested call (calls 
	itself or another function). 
	
	No, most JavaScript engines put a limit on the number of times 
		a function can call itself. 100,000 is over the limit. 
*/


// EXERCISE 2

function factorial(n) {
	return (n == 1) ? 1 : n * factorial(n - 1);
}

console.log(factorial(1), factorial(3), factorial(5));

// EXERCISE 3 

/* My solution: To ensure that the function is fast, we will use
	the for loop.
*/

function fib(n){
	if (n <= 1) {
		return n;
	} else {
		return fib(n - 1) + fib(n - 2);
	}
}


console.log(fib(3), fib(7));

/* The above Fibonacci sequence is too slow. We need a switch 
	to a loop-based function to avoid making a ton of calls. 
	
	My solution: Create an array with all the Finnachi numbers 
	up to n then add up the last two numbers in the array. 
*/


function fibLoop(n) {
	let fibNum = [0,1];
	
	for (let x = 2; x <= n ; x++) {
		fibNum[x] = fibNum[x - 1] + fibNum[x - 2];
	}
	
	return fibNum[n];
}

console.log(fibLoop(3), fibLoop(7));

/* SOLUTION: It takes a lot of time keep all the values before. 
	What you want to do is to only remember the two previous 
	values before you. 
*/

function fibSolution(n) {
	let a = 1;
	let b = 1;
	
	for (let x = 3; x <= n; x++) {
		/* shift the variables so you only save 
			the last two numbers. 
		*/
		c = a + b;
		a = b;
		b = c;
	}
	
	return c;
}

console.log(fibSolution(3), fibSolution(7), fibSolution(77));


// EXERCISE 4 

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printListRecursion(list) {
	console.log({value: list.value});
	if (list.next != null) {
		printListRecursion(list.next);
	} 
}

/* I could use a loop to print the list, but it would be 
	way easier just to print each item in the loop without 
	one. 
	
	The recursive solution is better. 
*/

// BELOW IS THE TUTORIAL'S SOLUTION 

function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
	// That's really clever, setting tmp equal to the next object. 
  }
}

/* Recursion is a better solution because its more flexible to
	and easier to read. 
*/

printList(list);
printListRecursion(list);

// EXERCISE 5 

/* My solution: Create a variable where you'll fill in with the 
	list. After that recurse through the functions until you 
	reach the inner-most list item element, from there add 
	the first element to the variable, then the second, third. 
	The order should be in reverse. 
	
	SOLUTION: The books wants me just to print out the values 
		of the single linked list, not the whole single linked 
		list. 
*/

console.log();

function reverseList(list) {

	
	if (list.next) {
	/* If statement breaks if list.next is null aka, when we're
		at the end of the set. 
	*/
		reverseList(list.next);
		
	} 
	
		console.log(list.value);
	
}

function reverseListLoop(list) {
	console.log(list);
	let values = [];
	while (list.next) {
		values.push(list.value);
		console.log(values);
		list = list.next;
	}
	
	values.push(list.value);
	
	
	for (let x = values.length - 1; x >= 0; x--) {
	// minus becuase we want to start from the back. 
		console.log(values[x]);
	}
	
	


	
}

/* SOLUTION: The solution presented in the book seems cheap. 
	It fees like it cheats by using an array. 
*/

reverseList(list);
reverseListLoop(list);