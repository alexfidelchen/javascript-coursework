//COMPARISONS

"use strict"

console.log( "Ed" > "Joe", "Alex" > "Al", "A" < "a", "j" > "Alexander Fidel Shih-Che Chen");
/* When you compare two strings, keep comparing 
	letters until the letters is farther in the alphabet
	than the other. If all the letters are equal, then 
	longer string is greater, otherwise they are exactly 
	the same and thus equal. 
	
	For Ed and Joe, "J" is clearly farther in the alphabet 
		than "E", so Joe is greater than Ed and the comparison 
		is false. 
		
	For Alex and Al, they have the same letters, but Alex is longer 
		so Alex is greater than Al, thus the comparison is true. 
		
	
*/

console.log("9" > "5", 5 == "5"); /* "9" and "5" are converted to 9 and 5, 
	then compared. 
	
	"09" > "5" gives false because I'm comparing two strings; perhaps 
	because 5 is greater than 0 as a string. 
	*/
	
console.log(+"5");
console.log("1" == 1, "1" === 1);
/* The strict equality operator (the triple equals sign) does
	NOT convert the values being compared and just checks if they 
	are equal, so in the case above, "1" is strictly equal to 1, but 
	they would be equal if one of the values were converted. 
*/
console.log("");
console.log("null and undefined");
console.log(null == undefined, null === undefined);
/* null and undefined are equal by the double equals sign, but 
	not the triple equals sign. 
*/

/* EXERCISE 

1) True
2) false, "p" is FARTHER IN THE ALPHABET. 
3) Also true because we have two strings so we compare by character 
	until one character is greater. Since 2 > 1, "2" > "12". 
4) True
5) False, null and undefined are exceptions to the rule. 
6) \n is just white space, so remove them, so we are left with 
	null == "0". They are two different datatypes, so we convert 
	both into numbers, null STAYS null in the equality operator, "0" becomes 0, so the 
	comparison is true. 
7) The strict equality operator does NOT convert the values being compared, 
	so they are definitely false. 