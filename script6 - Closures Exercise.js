/////////////////////////
// Closures Exercise

/* I've modified the previous 'Interview Questions' example to use closures.

Closures store constant variables which hold the scripts used in then functions that console.log the interview questions.
These funcstions are returned into variables in the global scope; yet the functions placed in the global scope in this way can then be called, and can still access the relevant script variables.

Furthermore, when interviewQuestion is called (eg. teacherQuestion = interviewQuestion(`Teacher`)), it returns the anonymous function (a higher level of the stack) to define the new variable. When that new variable is then called, it is still able to access the variable  'job' that was previously defined, even though it was defined in a lower level of the stack; the variable & argument 'job = teacher' was also stored in the closure!

^___^

*/


function interviewQuestion (job) {
	const designerQ = `, can you please explain what UX is?`;
	const teacherQ = `, what are your views on the Polanski teaching method?`;
	const starfleetQ = `, how many years did you serve in Starfleet?`;
	const watcherQ = `O ${name}, Watcher of the Crystal, what see thee within thine past? What doth thee project upon reality? What universes unfurl behind thine eyes, beyond thine physical forme?`;
	
	
	return function(name) {
		if (job === `Designer`) {
				console.log(name + designerQ);
		} else if (job === `Teacher`) {
				console.log(name + teacherQ);
		} else if (job === `Starfleet Captain`) {
				console.log(name + starfleetQ);
		} else if (job === `Watcher of the Crystal`) {
				console.log(watcherQ);
			};
		};
	};


/* when the function is returned it will need to be stored somewhere.
In this example we store these in variables called teacherQuestion, designerQuestion etc.
*/

const teacherQuestion = interviewQuestion (`Teacher`);
const designerQuestion = interviewQuestion (`Designer`);
const captainQuestion = interviewQuestion (`Starfleet Captain`);

teacherQuestion(`John`);
designerQuestion(`Solari`);
captainQuestion(`Jean-Luc`);

/*It's really a very strange example, because you could just store the individual functions as teacherQuestion, designerQuestion etc.
and it would be dryer and more readable!
But it demonstrates the concept. We'll use it in more practical ways later :3
*/

/* We can also pass values into the stacked function using the folowing syntax. Good to know!
*/

interviewQuestion('Watcher of the Crystal')('Adric');


/*
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

*/