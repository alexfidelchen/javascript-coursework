// GARBAGE COLLECTION 

let user = {
	name: "John"
}
/* User refers to an objects */

/* Now let's supposed that we change 
	user's value to null. 
*/

user = null; 

// Then old object, the one with John, becomes unreachable. 

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;
  // Looks like woman.husband and man.wife are added on properties. 

  return {
    father: man,
    mother: woman
  }
  // Returns an object with the father and mother properties. 
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});

console.log(family);

delete family.father;
delete family.mother.husband;

/* So after family is created, the object with the name "John"
	is unreacheable (not referenced anymore), 
*/
	