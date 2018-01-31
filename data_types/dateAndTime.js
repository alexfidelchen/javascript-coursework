/* DATE AND TIME */

/* As expected, you create a new Date object through a constructor. 
	
	When you're talking about a specific object, the name is lower-cased, 
	but when you're talking about a built-in object like the Array object 
	or the String object or the Date object, the object's name is capitalized. 
*/

let date1 = new Date();
let date2 = new Date(24 * 3600 * 1000);



console.log(`${date1} ${date2}`);

/* So if you call the object, the Date object will return the time 
	and date at central time. 
	
	Calling the Date objects using ticks returns the date and time 
	of my current time zone. 
	
	Creating an date object with the argument 0 gives the time and
	date of Jan 1st 1970 after 0 milliseconds. 
	
*/

/* You can get a Date object to display a specific date by using 
	putting in a date as an argument. The arugment has to be in 
	year-month-day format. 
	
	- The year has to have 4 digits. 
	
*/
let date3 = new Date("2018-1-30");
let date4 = new Date("2018-1-30");
console.log(date3, date4);

/* Another way to set the date of a Date object is through 
	multiple parameters. The first parameter is date, then 
	each parameter after that is a smaller measure of time. 

	The parameter starts with year, then becomes an increasingly 
	smaller measure of time. 
	
	The farther you go to the right, the smaller the measure 
	of time. The first parameter is year. 
	
	new Date(year, month, day, hour, minute, second, millisecond). 
	The smallest unit of time in the Date object is millisecond. 
	
	- Note that time is adjusted to central time. 
*/

let date5 = new Date(2018, 1, 24, 1, 34, 12, 1);
console.log(date5, date5.getYear(), date5.getMonth());
console.log();
console.log(date1); 
// The "0Z" at the end of the string means 0th time zone?
console.log(date1.getDate());
console.log(date5.getHours());
console.log(date5.getUTCHours());

/* When a Date object holds a date and time, the date and 
	time are assumed to be at the LOCAL time zone. To get it 
	at central time, use the UTC variant. 
*/

/* As expected, you can set the date of Date objects you previously 
	created. To do so, use setFullYear(), setMonth(), etc...
	
	You can set a Date objects's date and time using set methods. 
*/

console.log();
console.log(date5);
date5.setFullYear(2010);
date5.setHours(10);
date5.setMilliseconds(500);
/* Some set methods can set the more than their method name describes, 
	setFullYear() sets the year but also can do month and date. 
*/
date5.setFullYear(2011,10,12);
// Remember, the months are numbered and starts at 0. 
console.log(date5);

/* Since the get functions return a number, you could apply 
	expressions onto them. 
*/
date5.setFullYear( date5.getFullYear() + 1);
console.log(date5.getFullYear());

/* If your date you put down happens to not exist, the Date object 
	will correct it to the corresponding date in the next month. 
*/
console.log();
date5.setMonth(10,38); /* Since the day November 38 doesn't exist, 
	the Date object corrects it giving it the corresponding date 
	in the next month. 
*/
console.log(date5);

/* Obviously, there is no 0th day in any month, so set a date with 
	the 0th day, You'll get the last day of the previous month. 
*/
console.log();
date5.setFullYear(2010,2,0);
console.log(date5);

/* Just like how primative data types can be converted to numbers, 
	the Date object can be converted to a number as well. 
	
	When a Date object is converted to a number, the object becomes 
	the number of milliseconds since 1970. 

*/

console.log(+date5);
console.log(date5);

/* You can use the Date object to capture the start and end times 
	of something. 
*/

console.log(Date.now());

/* You can actually use Date.now() to easily capture the number of 
	milliseconds that went between two periods of time. 
*/

let startTime = Date.now();

for( let x = 0; x < 10000; x++) {
	let i = x * x * x * x;
}

console.log(Date.now() - startTime);
/* Return how many seconds has gone by. The for loop may take a shorter time 
	than the number the variable its approching Just because the for loop's variable 
	is going up to 10,000 doesn't mean it will take 10,000 seconds. The amount of 
	time it takes to complete a task may vary. 
*/

// We can Date.now() to benchmark (test) a CPU's power. 

/* So one converts the Date object to milliseconds, the other function 
	doesn't. Each function is actually run 10,000 times, then the 
	time is taken. 
	
	When a computer is running benchmarks, the computer may be 
	running something that takes up a lot of power while running 
	the benchmark, so one function may have more resources than 
	the other due to other programs running in the background. 
	To avoid this potential problem, run a benchmarking program 
	multiple times, possibly in different environments. 
*/

/* Date.parse() can read a date written as a string, then give 
	the number of milliseconds passed from 1970 to that date. 
	
*/

console.log();
// You can actually create Date objects from a timestamp. 
let date6 = new Date(1327611110417);
let date7 = new Date(2018,0,30);
console.log(date6);
console.log(date7);
console.log(Date.parse('2012-01-26T13:51:50.417-07:00'));

console.log( "2018".slice(3));
console.log( typeof ("" + 21));

