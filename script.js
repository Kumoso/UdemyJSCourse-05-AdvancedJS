/////////////////////////////
// Closures


function retirement (retirementAge) {
	const msg = ` years left until retirement.`;
	return function (yearOfBirth) {
		let age = 2020 - yearOfBirth;
		console.log ((retirementAge - age) + msg);
	} 
};

let retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1990);

/* Let's think about what the above code does when the retirement function is called.

>>>  'let retirementUS =  retirement(66)'

The retirement function is called. This function declares msg, and also returns the anonymous function stored in retirement.
However, note that the variable msg and its argument are not returned! Only the anonymous function is.

>>>  'retirementUS(1990)'

In this line, retirementUS is called. We just defined that; it is the anonymous function from the retirement function.
The value 1990 is passed into it. It runs just fine.
BUT WAIT!
The function retirementUS requires a value for 'msg'.
But msg only exists within the retirement function, and its execution context closes after it was invoked to define RetirementUS.

SO... How does the function retirementUS get a value for msg? Where did it come from?

Answer: THE CLOSURE! Wooooooo!

Which we will look at next time...
