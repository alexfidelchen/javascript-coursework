/* ARRAY EXERCISES */

/* EXERCISE 1) 
	fruits.length is going to show 4 because fruits and shoppingCart
	refer to the same array.  
*/

// EXERCISE 2 

let styles = ["Jazz","Blues"];
styles[2] = "Rock-n-Roll";
styles[Math.floor((styles.length - 1)/2)] = "Classics";
console.log(styles.shift());
// shift() means "first one off". 
styles.unshift("Rap");
// Not push() becuase push() is last one off. 
styles.unshift("Reggae");

/* EXERCISE 3)
	arr[2] will call the function that prints out 
	the array, because "this" refers to the current array. 
		
*/

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2]();

// EXERCISE 5

function getMaxSubSum(array) {
	
	let king = []
	king[0] = array[0];
	
	for( let x = 0; x < array.length; x++) {

		let contender = [];
		 contender[0] = array[x] ;
		
		for (let y = x; y < array.length; y++) {
			contender[y - x] = array[y];
			
			console.log(contender,king);
			
			if (getSum(contender) > getSum(king)) {
				console.log(`contender: ${getSum(contender)}`,`king: ${getSum(king)}`);
				king = contender.slice();
				console.log(king);
			}	
		}
		
		if ( x == (array.length - 1)) {
			if (getSum(contender) > getSum(king)) {
				console.log(`contender: ${getSum(contender)}`,`king: ${getSum(king)}`);
				king = contender;
			}
			
		}
	}
	
	return king;
}

function getSum(array) {
	let sum = 0;
	for (num of array) {
		if ( num == undefined){
			num = 0;
		}
			sum = sum + num;
		}
	return sum;
}

console.log(getMaxSubSum([1, 2, 3]));