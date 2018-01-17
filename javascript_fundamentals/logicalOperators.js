// LOGICAL OPERATORS 

"use strict"

let a = true;
let b = false;
let result = a || b; 
// You may use logical operators outside of conditional statements. 

/* 
	The OR operator CONVERTS all nonboolean values into booleans 
	and checks if any of them are true; if one of them is, then 
	the OR operator is true and returns the first truthy value 
	before the conversion. 
	
	
*/

let c = 1
let d = 0;
let result2 = a || b;

let e = 1;
let f = true; 
let g = true;
let result3 = e || f || g ;

/* The OR operator does NOT necessarily return a true or false value, 
	it returns the first truthy value (true, nonzero number or
	nonempty string) from the left. If the OR operator is false, it 
	returns the last value. 
*/

// Below none of the values are truthy, so OR returns the right-most value. 
let h = null;
let i = false;
let j = undefined;
let result4 = h || i || j;

/* The AND operator returns the first falsy value, if none of the values 
	are falsy, then it returns the last value. 
*/

let k = true;
let l = null;
let m = 0;
let result5 = k && l && m;

/*  Below has no falsy (false, zero, null, undefined, empty string, NaN)
	values, so the last value is returned. 
*/

let n = 1;
let o = "bob";
let p = 24;
let result6 = n && o && p; // returns 24

/* AND is higher in the operation order than OR, so the AND 
	operator goes first.

	1 && 0 returns 0, so 5 || 0 returns 5. 
*/
let andOR = (5 || 1 && 0)


/* The NOT(!) operator converts the nonboolean values into
	a boolean then is changed to the opposite value. 
*/
let not1 = !1;
let not2 = !""; //"" is converted into false, then changed to true . 
let not3 = !false; /* If the value is already a boolean, just convert the 
	value. 
	*/



console.log(result,result2, result3, result4, result5, result6, andOR, not1, not2, not3);

/* EXERCISE 
1) 2
2) That code will output everything except alert(3). Returned 
	value is a mini window. 
3) null, the AND operator returns the first falsy statement. 
4) 3
7) alert('first') will go off, but not alert('second'), but alert('third') will. 
*/

// EXERCISE 5
let age = 100;
if ( age >= 14 && age <= 90) {
	// The due to the statements, the && operator will return true. 
	console.log("You're in between 14 and 90!");
} 

// EXERCISE 6 
if ( age < 14 || age > 90){
	console.log("You're either younger than 14 or older than 90!");
}
