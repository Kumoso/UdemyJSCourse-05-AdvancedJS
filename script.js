////////////////////////////////
// IIFE: Immediately Invoked Function Expressions

/* Functions can be written in a way that makes them invoke immediately, and does not store them in memory.
This has multiple uses. One is that it can be used to calculate values without returning or storing them in the wider scope;
this is called a `private variable`' and enhances data privacy.
It also does not pollute the global context.
So, this is not for creating a reusable function; it is for creating a disposable function with good data privacy and code hygeine.
*/

// Here's an example; a small 'game' that generates a random number between 0 and 9 then checks whether it's greater than 5.
//The syntax is an anonymous function expression (not a declaration) in parentheses.
// The parentheses are what make JS treat this as an expression rather than a declaration,
// as declarations cannot be created within parentheses.

(function () {
	let score = Math.random() * 10;
	console.log (score >=5);
}) ();    									// < Note the empty brackets at the end!

// As the function isn't declared in the global scope, neither the function nor its values can be called..


// console.log(score);


// We -can- pass arguments into IIFEs. That's what the brackets at the end are for.


(function (goodLuck) {
	let score = Math.random() * 10;
	console.log (score >= 5 - goodLuck);
}) (5);


(function (badLuck) {
	let score = Math.random() * 10;
	console.log (score >= 5 - badLuck);
}) (-5);

// Passing in arguments from variables is more complex. Worth a look at.

