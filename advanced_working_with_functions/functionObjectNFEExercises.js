// FUNCTION OBJECT NFE EXERCISES 

// EXERCISE 1 
// Solution note: Use the function property to keep count. 
function makeCounter() {
  // instead of:
  // let count = 0

  function counter() {
    return counter.count++;
  };

  counter.count = 0;
  
  counter.set = function(setTo) {
	  counter.count = setTo;
	  return counter.count;
  }
  
  counter.decrease = function() {
	  return counter.count--;
	  /* As the minus signs are after the count, the counter.decrease 
		will return the value BEFORE the decrease. The decrease still 
		occurs but it won't show until you call counter.decrease again. 
		*/
  }

  return counter;
}

let newCounter = makeCounter();
// returns the counter function. 

console.log(newCounter.set(100));
console.log(newCounter.decrease(), newCounter.count);

// EXERCISE 2 
/* My Solution: My sum function will have one property: the 
	totalSum property. It will keep track of the total 
	number of my function, I'm using a variable because I want it 
	to reset everytime I start a new chain of sum(). Everytime
	the function is called, add the argument to the totalSum.
	If there are still parameters left, call the sum() function
	again, otherwise just return totalSum. 
	
	My solution is partially correct, for it to work, you have 
		to use toString method at the end of the sum. 
*/

function sum(number) {
	let totalSum = number;
	
	
	function f(next) {
		/*
		if (next) {
			console.log("returned function");
			
		The if statement is unnecessary because the function won't
		run if there's no more parameters. 
		
		*/
			return sum(number + next);
	};
	
	f.toString = function() {
		return totalSum;
	}
	
	// Methods after the return statement are ignored. 
	
	return f;
}





console.log(sum(1)(2).toString());
console.log(sum(6)(-1)(-2)(-3).toString());
console.log(sum(0)(1)(2)(3)(4)(5).toString());
