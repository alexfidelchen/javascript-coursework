/* NUMBERS */

/* e notation allows use to write numbers with lots of zeroes in 
	a short and consise manner. To use, write a number, then the 
	letter "e" then the number of zeroes you want after the number 
	you chose. 
	
*/
let million = 1e6;
let twentySixMillion = 26e6
console.log(million,twentySixMillion);

/* e notation is also a very good way of writing very small numbers, 
	writing a negative number after e tell the computer how many 
	number TO THE LEFT of the number that you want. 
*/

/* If the number after e is negative, then the zeroes are placed 
	TO THE LEFT of the number, but the decimal point is placed 
	right after the first zero. 
*/
let tenth = 1e-1;
let thousandth = 1e-3;
console.log(tenth,thousandth);

/* Numbers can be written using hexadecimal, binary and octal as 
	well, just remember to prefix them so JavaScript knows you're 
	writing this way. 
	
	Start your hexadecimal numbers with "0x" so JavaScript knows 
	you're writing a hexadecimal number. 
	
	Start with "0b" for binary and "0o" for octal. 
	
	If a number is written in hex, binary or octal, JavaScript will 
	convert them into integers. 
*/

let hexadecimal = 0xff; // 255 written in hex. 
/* If you're going to write a binary number, start the number 
	with "0b". 
*/
let binary = 0b11111111;
let octal = 0o377;
console.log(hexadecimal,binary,octal);

/* [number].toString() converts a number its attached to, to a
	string that's written in binary or hexadecimal. 
*/

let num = 255;
let num2 = 2;
console.log(num.toString(16));
// Convert the num into a string written in hexadecimal. 
console.log(num.toString(2), 2..toString(2));
// Convert num into a string written in binary. 
/* num is wrapped with an the Number object so it can use 
	the toString() method. 
*/
console.log(Math.floor(3.9),Math.round(3.3));

/* If you want to round the number to the nearest digit, use 
	use toFixed(). 
*/

let roundThis = 3.7261 
// Below says round after two digits right of the decimal point. 
console.log(roundThis.toFixed(2));

/* 	If a huge number (like more than a trillion) goes over the
	52 digits set aside for holding the number's digits, you may
	just get infinity. 
*/

let bigNumber = 2e500;
console.log(bigNumber);

let decimalNumber = 0.1;
/* When numbers are stored in memory, they are stored in binary form. 
	Whole numbers are stored pretty easily in binary form, but for 
	some reason, computers have a hard time storing decimal numbers 
	in binary form. 
	
	- Decimal numbers have a hard time getting stored in memory, because 
		decimal numbers in binary form are really long and messy. 
		
console.log(decimalNumber.toString(2)); /* returns 0.00011001...
	returns a REALLY long list of 0's and 1's. 
	*/
console.log(0.1.toFixed(18));
console.log(0.1 + 0.2);

/* You can fix imprecision from decimal numbers by using toFixed() and 
	telling it to round after the final decimal. 
*/

console.log((0.1 + 0.2).toFixed(1));

/* You can always test if someting a number or not by using 
	isNaN(). 
*/

console.log(isNaN("type"),NaN == NaN,isFinite("42"));
// NaN is NOT equal to anything, so NaN returns false. 

/* In the past, we generally converted strings into numbers by using 
	"+" or Number() to convert the numbers, but these functions don't 
	work if the number has a unit attached to it. 
*/
console.log( Number("100px")); // Returns NaN

/* Fortunately, you can use parseInt() or parseFloat() to get a
	number when its attached to a unit or currency. 
	
*/

console.log( parseInt("100px"), parseInt("$100"),parseFloat("12.2px"));

console.log(Math.random());

console.log(6.35);

/* EXERCISE 2 
	2) Could it possibly be beccause due to imprecisions in the
		decimal	number? We could multiply the number to ensure 
		its a whole number. 
		
		SOLUTION: There are imprecision when you store a decimal 
		number as binary then call it back as a decimal number.
		
		You can fix the imprecision brought on by 
		
		
	EXERCISE 4
	4) Because of the imprecision of adding 0.2, you'll always go 
		over 10. 
		
		
*/
console.log( 6.35.toFixed(20) );
console.log(0 == null);

/* EXERCISE 5
	CREATE A RANDOM NUMBER BETWEEN THE MIN AND MAX.
	
	- To ensure a minimum value, we have to add that value 
		to the function, to get the maximum value, we do 
		(max - min) so that min + (max - min) = max, for 
		everything in between we do min + Math.random()(max - min);
	*/
function random(min, max) {
	return min + Math.random() * (max - min);
	
}

console.log(random(5,10));

/* EXERCISE 6
	CREATE A RANDOM INTEGER BETWEEN THE MIN AND INCLUDING MAX.
	
	- just parse the resulting random number into an integer and add 
		1 to the max so you can include the maximum number (The random 
		number will go over the maximum until parseInt() removes decimal 
		part. 
		
		- The probabily of number appearing is uniform because parseInt 
			does NOT round the numbers as to give one number a chance to 
			appear more often. 
*/

function randomInt(min, max) {
	return parseInt(min + Math.random() * ((max + 1) - min));
	
}

console.log(randomInt(5,10));