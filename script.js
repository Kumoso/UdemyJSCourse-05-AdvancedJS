////////////////////
//////// Passig Functions as Arguments

/*We can pass functions into pother functions.
For example, the function below is designed to apply a passed function to each element of a passed array.
Super useful huh!
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

const ages = arrayCalc(years, calculateAge);
console.log(ages);

/* Note that we don't call calculatAge (we don't write it as calculateAge()).
This is because we don't want to execute it right away; we're just pointing to it.
arrayCalc then calls it and executes it within itself as 'fn'.
Functions used in this way, without parentheses (), are called Callback Functions.
*/

//Now, let's create another function and apply it to the array!

function isFullAge(el) {
	return el > 18;
};

console.log(arrayCalc(ages, isFullAge));

//And one more!

function maxHeartRate(el) {
	if (el >= 18 && el <= 81 ) {
	return Math.round( 206.9 - (0.67 * el));
	} else {
		return -1;
	};
};

heartRates = arrayCalc (ages, maxHeartRate);

console.log(heartRates);

