// TESTING WITH MOCHA 
describe("pow", function() {

  it("2 raised to power 3 is 8", function() {
    assert.equal(pow(2, 3), 8);
	// assert.equal(pow(2, 3), 9);
	/* So every it() function is a case. 
		You may have more than one test inside a case. 
		This is not good practice though. 
		
		EACH CASE SHOULD ONLY HAVE ONE IT STATEMENT
	*/
  });
  
  it("Calculates 3^3 correctly", function() {
	  assert.equal(pow(3, 3), 27);
  });
  
  /*
	You can write each case manually, since you're writing in 
	  JavaScript, you can write multiple tests using a for loop. 
  */
  
  
  // the makeTest() function creates tests. 
  function makeTest(x){
	  let expected = x * x * x;
	  it( x + " to the power of 3 is " + expected, function() {
		  assert.equal(pow(x, 3), expected);
	  });
  }
  
  makeTest(1); /* Make a test where we check if pow() calculates 
	1^3 correctly. 
	*/
	
  // Now we use a for loop to generate tests for us. 
  
  for( let i = 2; i <= 5; i++) {
	  makeTest(i);
  }
  
  /* Alright, so let's write more usual test cases so we can get 
	a better pow() function. 
*/
  
  it("For a negative n, the result is NaN", function() {
	  assert.isNaN(pow(2, -1));
	  // assert.isNaN the thing inside the parenthesis is or returns NaN. 
  });
  
  

});
/* Within the describe() function, you decide which function you
	want to test, then you use the it() function inside describe() 
	to name and create the tests you want to run on that function. 
	
	So to improve the spec (code that tests other code) 
	we need to throw in more test cases. 
	
	We can have more than one test in a case, or we can ensure 
	  each case has just one test. Use this one instead because 
	  the case terminates once it sees an error so you don't know 
	  if cases after the error are true. 
	  
	 
	Alright, so now let's write the actual implementation. 
	
	You can write each case manually, since you're writing in 
	JavaScript, you can write multiple tests using a for loop. 
*/

/* EXERCISE 
	1) This test is not good practice. You should only have one test
		per it statement. 
*/