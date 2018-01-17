// TYPE CONVERSIONS

let stringNumber = "6" / "2";
let stringPerson = "Will" / "Davis";

let numericalString = "123";
let nonNumberString = "Jack Dempsey"; //Number(nonNum...) returns NaN
let boolean1 = true; // Number(boolean1) returns 1
let convertBoolean = "0";
let addStrings = "Soul" + "Calibur";

console.log(stringNumber, stringPerson, Number(numericalString), Number(nonNumberString)
	, Number(boolean1));

console.log(Boolean(convertBoolean),Number(undefined));
/* Boolean() will return "true" for all strings, even strings 
	that have falsy statements in them. 
*/

console.log("Soul" - "Edge");
console.log(null + "Edge");
console.log(undefined + "Edge");
console.log(7/0);



/* 
Exercise Answers:
1) 10
2) -1
3) When there's a mathematical operator, the things involved gets 
	converted into an number, 1. 
4) 2
5) 6
6) "45px"
7) "$45"
8) 2
9) NaN
10) infinity 
11) "-9\n5"
12) "\n" is a new line character, which is essentially a white space. 
	Since all white space is wiped out by number conversion, " -9\n" 
	becomes " -9  " then -9
13) 1, when null gets converted into a number it becomes 0. 
14) NaN
*/