/* STRINGS EXERCISES */

function ucFirst(str) {
	if (!str) {
		return str; // If the string is empty, return the string. 
	}
	return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("john"));
console.log(ucFirst("alex"));

function checkSpam(str) {
	/* Make lowercase first so it's easier to check string. 
		Case matters so if the the words inside the string 
		were capitalized, the function will miss it. 
	*/
	let convertedStr = str.toLowerCase();
	return convertedStr.includes("viagra") || convertedStr.includes("xxx");
	/* Can be shortened down to this because the OR operator returns 
		true or false. 
	*/

}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('Angel is a good person'));
console.log(checkSpam('viagraLOLOLOL'));
console.log(checkSpam('xxxxxxxx free'));

// You should save this for later. 
function truncate(str, maxLength) {
	return (str.length > maxLength) ? str.slice(0, maxLength - 1) + "…" : str;
	/* The question mark operator would be perfect here. truncate()
		returns the trucated value if the string is longer than the
		maxLength and just returns the the string if its false. 
	*/
		
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

function extractCurrencyValue(str) {
	return +str.slice(1); 
	// The plus sign converts the string into a number. 
}

console.log(extractCurrencyValue('$120') === 120);
console.log(extractCurrencyValue("$1"));

