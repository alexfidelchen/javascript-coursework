/* DESTRUCTURING ASSIGNMENT EXERCISES*/


/* EXERCISE 1 */

let user = {
  name: "John",
  years: 30
};

let { name, years: age, isAdmin = false} = user;
console.log(name, age, isAdmin);

/* Remember, when dealing with a object property, place 
	a space after the colon. 
*/
	
/* EXERCISE 2 */

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(Object.entries(salaries));
console.log( null < -1);

function topSalary(obj) {
	
	let topSalary = null;
	let topPerson = null;
	
	// let [person, salary] = ["John", 100];
	for( [person, salary] of Object.entries(obj)) {
		console.log(person, salary);
		if (topSalary < salary) {
			topSalary = salary;
			topPerson = person;
		}
		console.log(`Top Salary is ${topSalary}`);
		
	}
	
	return topPerson;
};

console.log(topSalary(salaries));

