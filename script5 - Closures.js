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

'Evan after a function returns and the execution context it inhabits is gone,
the variabl;e object(s) within that execution context are still stored in memory,
and can be accessed... long after the function has closed and the execution context is gone.'

The lecturer says that these variable objects remain on the stack; in real terms I'm not sure what this means.
For now I wil accept that they can still be accessed.

'The current execution context has closed in on the outer vairable object so that it can use it,
and that's why it's called a closure. So, the scope chain always stays in tact. This is the most important thing that you need to understand
and remember.'

The lecturer does not explain what closed in means in real terms. 
We're just accepting this for now ^__^

'Note that we don't create closures manually. They're built into javaScript.

***************To reiterate the summary,
An inner function always has access to the parameters and variables of the outer function, even after the outer functiopn has returned.

Now to create some more functions!

*/

let retirementGermany = retirement(65);
let retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);
retirementUS(1990);

//As explained, these can all access the relevant variables thanks to closures.

