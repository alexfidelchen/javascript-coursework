/* RECURSION AND STACK */


/* Sometimes you can solve a problem through a recursion aka by 
	having the function call itself. 
*/
function pow(x, n) {
	
	return (n == 1) ? x : x * pow(x, n - 1);
}

/* Without the return keyword, the x will still be equal to 2.
	Functions return values, and since the function in the statement 
	returns a value it still doesn't break that rule. 
	
	So as the function does a recursion, it creates a series of 
	nested functions that each return a value. 
	
	Once one of one of the funtion's return a concrete value, 
	a chain reaction starts where the inner-most function returns 
	a value, which causes its "parent" to return a value, etc...
	
	Once the inner-most function returns a value, a chain reaction 
		starts where you go up each function until you get a value.
		
*/

console.log(pow(2, 3));

/* You could of also wrote by using an iteration, aka using a 
	for loop, but that code would be longer. 
	
	We can understand execution context a little better if we 
	do an example. 
	
	Suppose we are executing the function below. 
	
		function pow(x, n) {
		  if (n == 1) {
			return x;
		  } else {
			return x * pow(x, n - 1);
		  }
		}
		
	And x = 3, n = 2, then at the start of execution, 
	aka when we call the function pow(2,3) the execution context is 
	
	Context: {x = 3, n = 2, at line 1}
	
	So n is greater than 1, so we skip over the statement inside 
		the if statement, eventually return x * pow(x, n - 1). 
		Now, if this function was executing inside the browser 
		the function will be placed on hold and the nested 
		function will run, during the hold the outside function 
		will have this execution context. 
	
	Context: {x = 3, n = 2, at line 5}
	
*/ 

/* Say we have the following company. Looks like the 
	company object has two properties with each property 
	representing a department in the company. The value 
	of each property is an array of objects with all 
	the employees in that department. 
*/

let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

/* Let's say you wanted to get the salary of every employee in
	the company. You could try an iteration, but that code isn't 
	flexible if the company decides salary property to future
	deeper levels in the object. 
	
	You can use a recursion to find all the salaries in a company. 
	
	Remember, you want your functions to be verbs and specific as 
	possible. 
*/

/* Becuase each property in the object is a department, except for 
	the properties inside the array. 
*/

function sumSalaries(department) {
	
	let totalSum = 0
	
	if (Array.isArray(department)) {
		console.log(department.reduce((sum, person) => sum + person.salary,0));
		return department.reduce((sum, person) => sum + person.salary, 0);
	} else {
		let totalSum = 0
		for (let subDepartment of Object.values(department)) {
		// You want the property value, not the property key
			totalSum = totalSum + sumSalaries(subDepartment);
		}
		
		return totalSum;
		
		
	}

}

console.log(sumSalaries(company));

/* Say we store an ordered list of objects. Of course, would be
	a good choice for that. It's ordered and can hold objects. 
	But there's a problem with arrays. The shift() and unshift() 
	(delete and add elements) operations take a (relatively)
	long time to complete because you have to reorder the elements
	after you add or remove one, the time to complete takes longer 
	if the array is especially big. 
*/

/* So a linked list is a good alternative to an array. Elements
	can be add and removed easily from them. 
*/

let list = { 
	value: "first",
	next: {
		value: "second",
		next: {
			value: "third",
			next: {
				value: "forth",
				next: null
			}
		}
	}
}
// Notice how you slowly make the brackets on the bottom. 

/* Since a linked list element (object with the properties value 
	and next) is an object, you can get/set properties to it 
	like an object. 
*/


// This gets me the third value. 
console.log(list["next"]["next"].value);

// Not surprisingly, you can break the list apart. 
let list2 = list.next.next;
console.log(list2);

/* You can cut a list apart by setting a next value in the list
	to null. So maybe that's what the tutorial means when it says 
	its easy to remove elements from the list. 
*/
list.next = null;
console.log(list);

/* You can create add a new element to the list by setting the 
	list equal another object that has its next property attached 
	to the list. 
*/

list = { value: "zero", next: list};
console.log(list);

// Of course, we can join lists together as well. 
list.next.next = list2;
console.log(list);

/* If we want to remove elements that are not at the start or
	end of the list, we set the first element I want to remove
	to the first element we want to keep. 
*/

let list3 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

/* Remove all elements between 1 and 4. So the first element I want 
	to remove is 2, and the first element I want to keep is 4. 
	Thus the following code. 
*/

list3.next = list3.next.next.next;
console.log(list3);

