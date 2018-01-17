// OPERATORS 
"use strict"
console.log(+true, +"", +"will");
console.log("3" - "2");
/* When a "+" sign is placed in front of a non number, it 
	converts that value into a number or gives NaN. 
*/

let a,b,c;
a = b = c = 3 + 3;


console.log(a,b,c);
let commaExample = (1 + 1, 2 + 2, 3 + 3); /* Only the last one is set
	equal to the variable. The other two expressions are calculated but 
	they're not used. 
	*/
console.log(commaExample);
a++; // incrementing a variable. 
a++;
console.log(a);


/* Exponential operator "**" doesn't work in node, 
	which is whatever since I got Math.pow()
*/

/* 
It's totally possible to chain the assignment operator (equals
	signs) together. 
*/
