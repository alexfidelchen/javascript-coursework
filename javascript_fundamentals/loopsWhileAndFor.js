// LOOPS: WHILE AND FOR 

"use strict"

// The while loop is one way to write a loop. 
let i = 0
while(i < 5){
	console.log("This message is repeated with a while loop!");
	i++;
}


/* The while loop converts variables and expressions into boolean 
	and sees if its true or false. So as a consequence, we can 
	have while loops with a conditional statement of just one 
	variable. 
*/

console.log(""); // whitespace to split prompts. 

let x = 3;
/* So in the case below, while will convert x into a boolean; x
	will always be true until it becomes 0, which, since it's a 
	falsy value, will convert to false, ending the while loop. 
*/
while(x){
	console.log("The conditional statement was this loop is just one variable!");
	x--;
}

/* Another, and probably more readable way of writing this, is
	with the NOT operator. 
	
	while(x != 0){
	console.log("The conditional statement was this loop is just one variable!");
	x--;
	}

*/

console.log("");

for (let i = 0; i < 3; i++){
	console.log("This for loop ran 3 times");
}

/* According to javascript.info, a for loop is broken up into 4 parts:
	- begin: Where you declare variable and set its value.  
	- condition: The condition checked before every loop iteration 
		(trip around the loop), if the condition is false, the loop 
		stops. 
	- step: The incrementer. Goes up after each iteration (each trip 
		around the loop). 
	- body: body of the loop. 

*/

/* In JavaScript, you do NOT have to write every part of the for loop 
	for it to work. 
*/

console.log("");
// The initial variable can be declared outside the parenthesis. 
let y = 0;
for (; y < 2; y++){
	console.log("This is a for loop without a variable declared inside its parenthesis");
}

/* You may even remove the incrementer and place it inside the loop;
	the for loop essentially becomes a while loop. 
*/

console.log("");
let z = 0
for(; z < 4;){
	console.log("This for loop is written with initial variable and an incrementer inside its parenthesis");
	z++;
}

/* If you're going to write for loop with pieces missing, you have
	to at least have the for loop's semicolons there. 
*/

/* We can end a loop early using the "break" keyword. This is useful 
	when we want to end a loop early before potential errors can happen. 
*/

let value; 
let sum = 0;

console.log(value);
console.log(Number(value));
console.log(value == null);


while (true){
	if (value == null){
	// undefined is only equal to null. 
		console.log("No value inputted! Breaking loop now!");
		break;
	}
	sum = sum + value;
	console.log(sum);
}


/* Instead of exiting the whole loop, we can exit the current 
	iteration by using the continue directive (keyword). 
*/

for (let i = 0; i < 10; i++){
	if (i % 2 == 0){
		continue;
		/* continue stops the current run and goes to the
			next one as long the condition is still true.
			
			For this if statement, for every even number, 
			stop the current run and go to the next number, 
			the code only prints odd numbers. 
		*/
	}
	console.log(i);
	
	
}

/* You could write the above code without a continue statement, 
	but it may be less readable if it gets more complex. 
*/


// Suppose we are trying to find the value at a specific coordinate. 


/* Using a label to break/continue out of a loop or run, allows 
	us to break through a nested for loops (loops within 
	loops) or loops with lots of layers. 
*/
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

	let value;
	
    // if an empty string or canceled, then break out of both loops
    if (!value){
		console.log("We're breaking out of both loops!");
		break outer;
		
	}	
	console.log("value at ("+ i + "," + j + ")" + "is" + value);
  }
}

// Variation using inner loop. 
	
outer: for (let i = 0; i < 3; i++) {

  inner: for (let j = 0; j < 3; j++) {

	let value;
	
    if (!value){
		console.log("We're breaking out of one loop!");
		console.log("value at ("+ i + "," + j + ")");
		continue inner;
		// I just move to the next j value. 
		
	}	
  }
}

/* EXERCISE 
1) 1, because when i = 0, the while loop stops. 
2) No, the prefix form does NOT include an alert with 0 in it. 
3) The conditional statement is checked later, so the initial 
	variable will be the same. 
*/


