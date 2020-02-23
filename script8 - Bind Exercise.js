////////////////////
//////// Bind Exercise

/* Here's an example of Bind in action. We created some code earlier to check an array of ages against an age limit. We want to make a modification to it to permit multiple values for the age limit, but without chanding the 'arrayCalc' function on line 10.
*/

const years = [1991, 1994, 1997, 2000, 2003];

function arrayCalc (arr, fn) {
	const arrayOfResults = [];
	for (let i = 0; i < arr.length;i++ ) {
		arrayOfResults.push(fn(arr[i]));
	};
	return arrayOfResults;
};

function calculateAge(element) {
	return 2020 - element;
};

let ages = arrayCalc(years, calculateAge);

console.log(ages);


//In the line below we've modified the isFullAge function to include a 'limit' value, which is the age limit we want to use.

function isFullAge(limit, el) {
	return el >= limit;

};



/*Problem is, we use this function via the arrayCalc function on line 10; more specifically, the code on line 13. This code will be pointed to the isFullAge function . However the code only passes one value into isFullAge, which is an age from the 'ages' array; it doesn't have capacity to pass a second value to isFullAge for the 'limit', unless we fundamentally recode the arrayCalc function.
An alternative approach is to use .bind to give isFullAge a first value (for 'limit'), then pass it into the arrayCalc function.
*/

let fullAge = 18;

const isDefinedFullAge = isFullAge.bind(this, fullAge);

console.log(arrayCalc(ages, isDefinedFullAge));



//Another example:

let fullUS = 21;

const isUSFullAge = isFullAge.bind(this, fullUS);

console.log(arrayCalc(ages, isUSFullAge));

