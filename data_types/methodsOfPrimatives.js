/* METHODS OF PRIMATIVES */

/* 
	Each primative has a corresponding object. 
	
	You can create numbers, strings and booleans using their 
	corresponding object, aka you can create a string from the 
	String object. 
*/
	
// You can create a string with the String object. 
var barney = new String("Barney Rubble");
console.log(barney);
	
/* As barney is a string, you can properties to it like any 
	other object. 
	
	null and undefined do NOT have wrapper object, so if you try to 
	use property or method on null or undefined, you get an error.
	
	null and undefined do NOT have a corresponding object to wrap 
	around them when they use a property or object. 
	
	Null and undefined are NOT wrapped with objects when they use 
	a property or method, so doing so gives an error. 

*/

var nullWrapperTest = null;
console.log(nullWrapperTest.test); // returns an error. 

/* EXERCISES 
1) NO, because the string str is a primative so it cannot have
	properties. 
	
	More formally, yes the string is wrapped around with an object, 
	but a wrapper object only lasts ONE LINE, then the 
	object turns back into a primative. All properties from the
	wrapper object is removed. A NEW wrapper object is created 
	everytime you access a property or method. 
*/