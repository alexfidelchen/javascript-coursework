/* DATE AND TIME EXERCISES */

// EXERCISE 2

function getWeekDay(date) {
	
	switch (date.getDay()) {
		
		// 0 represents Sunday
		case 0 :
			return "SU";
			
		case 1: 
			return "MO";
			
		case 2:
			return "TU";
		
		case 3: 
			return "WE";
		
		case 4: 
			return "TH";
			
		case 5:
			return "FR";
			
		case 6:
			return "SA";
			
		default:
			return "Could not return a day";
			
	}
}

let date = new Date(2012, 0, 3);
console.log( getWeekDay(date));

/* SOLUTION: Our solution is correct, but I like the book's 
	solution better. The author uses an array and takes advantage of 
	the fact that getDay() returns a day and uses that day 
	as an index number. 

*/
function getWeekDay2(date) {
	
	let days = [ 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
	return days[date.getDay()];
			
	}
	
console.log(getWeekDay2(date));

/* EXERCISE 3 */
function getLocalDay(date) {
	// If Sunday, return 7
	if (date.getDay() == 0) {
		return 7;
	}
	
	return date.getDay();
	
}

console.log(getLocalDay(date));


/* EXERCISE 4 */

/* My solution: Use an expression to change the ending starting 
	date to a date sometime ago. If the date is not a day inside 
	a month (Jan 0th), the Date object will autocorrect itself. 
*/
console.log()
function getDateAgo(date, days) {
	
	let dateAgo = new Date(date.getFullYear(), date.getMonth(), (date.getDate() - days));
	return dateAgo.getDate();
	// You're not returning an object. 
}

let date4 = new Date(2015, 0, 2);
console.log(date4);
console.log( getDateAgo(date4,2));

/* BOOK SOLUTION: The book solution is ok, but the Date object 
	will only return the correct day (maybe month?) while the year is wrong. 
*/

/* EXERCISE 5 */

/* Get last day of the month by exploiting the Date object's auto correct
	feature. 
*/

function getLastDayOfMonth(year, month) {
	return new Date(year, month + 1, 0).getDate();
}

console.log();
console.log(getLastDayOfMonth(2012,1));

/* EXERCISE 6 */

/* My solution: 
	1) Create an Date object whose time is at the beginning of the day.  
	2) Convert both the Date object holding the start of the day with 
		the current time into milliseconds. 
	3) Subtract and return the difference. 
*/

function getSecondsToday() {
	
	let currentTime = new Date();
	/* No need to fill the parameters with zeroes. If the parameters
		are NOT filled in, they are assumed to be zero. 
	*/
	let startDay = new Date( currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
	return Math.round((currentTime.getTime() - startDay.getTime()) / 1000);
	// Round the number to the nearest second. 
}

console.log(getSecondsToday());

/* EXERCISE 7 */

/* My solution: Use getSecondsToday(), but change the current
	day to tomorrow then subtract tomorrow by the current day. 
*/

function getSecondsTomorrow() {
	
	// Keep the variables separate from the date. 
	let tomorrow = new Date();
	let now = new Date(2018,0,31,23);
	
	tomorrow.setDate(tomorrow.getDate() + 1);
	tomorrow.setMinutes(0,0,0);
	return Math.round((tomorrow.getTime() - now.getTime()) / 1000);
}

console.log(getSecondsTomorrow());

/* EXERCISE 8 */

function formatDate(date) {
	
	let timePassed = Date.now() - date.getTime();
	
	if ( timePassed < 1000) {
		return "right now";
	} else if (timePassed  < 60000) {
		return timePassed/1000 +  " sec. ago";
	} else if (timePassed < 3600000) {
		return timePassed/60000 + " min. ago";
	} else {
		let format = [ "0" + date.getDate(), "0" + (date.getMonth() + 1), "" + date.getFullYear(), "0" + date.getHours(), "0"  + date.getMinutes()]; 
		// The "" (blank space) is a simple way to turn a number into a string. 
		for (let x = 0; x < format.length; x++) {
			format[x] = format[x].slice(-2);
		}
		return `${format.slice(0,3).join(".")} ${format.slice(3).join(":")}`;
	}
}


console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));

/* BOOK SOLUTION: My formatting for the full date was wrong. You 
	should have 2-digits for the date. You can get the two digit 
	formatting through splicing an array that holds the date. 
	
	I cannot take credit for including the format array and 
	the return value. The format array was in the book, as 
	was the idea to use slice() and join(). 
*/




	




