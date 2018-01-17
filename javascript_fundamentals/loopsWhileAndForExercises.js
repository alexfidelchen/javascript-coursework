// WHILE FOR EXERCISES 

// Output even numbers in the loop. 

for(let x = 2; x <=10; x++){
	if ( x % 2 != 0){
		continue;
	}
	console.log(x);
}

console.log("");

// Convert for loop to while loop. 
let i = 0;
while(i < 3) {
	console.log(i);
	i++;
	
}

console.log("");
console.log(4 % 2);
console.log("");

// Checks for prime number (Maybe use in github?) 

let upTo = 20;
for (let x = 2; x <= upTo; x++){
	for(y = 2; y <= x; y++){
		if ( (x != y) && (x % y == 0)){
			//console.log( x + " Continue is used!");
			break;
		} else if (y == x) {
			console.log(x);
		}
	}
}