// CODING STYLE 

//Fix all the bad style choices in the code below. 

"use strict";

function pow(x, n) {
  let result = 1; /* Put a space between variables and code that 
    does the function's work. 
	*/
  
  for(let i = 0; i < n ;i++) {
	  result *= x;
	  }
	  /* Put a space between the code that does the function's 
		work and the return statement. 
	*/
  return result;
}

let x = prompt("x?",'');
let n = prompt("n?",''); // missing semicolon. 

if ( n <= 0) { // Bracket should be on the same line as the parenthesis
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
  return;
}
  // avoid nesting using a return statement. 
  alert(pow( x, n ));
}