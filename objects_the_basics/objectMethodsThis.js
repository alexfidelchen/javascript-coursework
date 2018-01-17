/* OBJECT METHODS, "THIS" */

"use strict" 

let user = {
	name: "John",
	age: 30
};

/* As a method is a property, you add methods the same way as 
	properties. 
*/

user.greet = function() {
	console.log("Hello!");
};

user.greet();

/* Of course, the function can be created before the method 
	if you want to do that. 
*/

function eat(food) {
	console.log(this.name + " ate " + food);
}

user.eat = eat;

user.eat("corn");

/* Adding a method like a property is one way of giving a user a
	method, but the shorter way of writing methods is to put the
	function inside the object. This shorter way is usually the
	preferred way.  As a method is also a function inside an object,
	these functions inside the object are also methods.  
	
	- We can write methods by putting functions inside the object. 
*/



let dog = {
	name: "Spot",
	ageDogYears: 3,
	
	/* Do NOT add "function" before bark, just write the function
		name and javascript will figure it out. 
	*/
	bark() {
		return "woof!"
	},
	
	getName() {
		return this.name; /* Return this current object's 
			name.
		*/
	}
}


console.log(dog);
console.log(dog.bark());
console.log(dog.getName());
let cat = dog;
console.log(cat.getName());

/* You can even use the this keyword for functions without objects,
	in this case "this" will return undefined (in strict mode). 
*/

function useThis() {
	console.log(this);
}

useThis();

let objectWithArrow = {
	name : "Object with Arrow Function", 
	useArrowFunction(){
		let arrow = () => this.name;
		return arrow();
	}, 
	/* Ok, looks like you can't use arrow functions directly, 
		you have to put it in a regular function. 
		
		arrow2 = () => return this.name;
	*/
}

console.log(objectWithArrow.useArrowFunction());

/* Well, it's not directly using the "this" keyword, so I'm guessing 
	undefined?
*/

let userExercises = {
  name: "John",
  go: function() { console.log(this.name); }
  // "this" refers to the current function. 
};

userExercises.go();

/* EXERCISE 2, 
	3) This is different because once its attached to a variable, 
		"this" is not attached to the variable anymore. 
		- 
	4) I don't think you're supposed to use a operator to run an 
		object. 
		
		SOLUTION) Because we have to direct reference the "this" keyword. 
*/


/* EXERCISE 3 
	"this" is not referring to a object, so its undefined. However, 
		write a function and ask it to return "this" it gives a function.
	
	two things, 
	
	When an object with "this" is attached to a variable, "this" 
	becomes undefined. 
	
	user.ref.name is literally saying "this.name", which doesn't
	any sense. 
*/


// EXERCISE 4 

let calculator = {
	leftValue : 0,
	rightValue : 0,
	
	read(left,right) {
		this.leftValue = left;
		this.rightValue = right;
	},
	sum() {
		return leftValue + rightValue;
	},
	mul() {
		return leftValue * rightValue;
	}
	
};


// EXERCISE 5 
let ladder = {
  step: 0,
  up() {
    this.step++;
	return this;
  },
  down() {
    this.step--;
	return this;
  },
  showStep: function() { // shows the current step
    console.log( this.step );
  }
};

ladder.up().up().down().showStep()

