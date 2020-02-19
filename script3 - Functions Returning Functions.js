////////////////////////////////////
// Functions Returning Functions

/* A function can return another function. That's all this demonstrates. It's not a fantastic example ^__^
Functions in JS are 'First Class Functions'. This means that they are, and can be used like, any other objects in JS.
This allows a lot of flexibility in how they're used.
*/

function interviewQuestion (job) {
	if (job === `Designer`) {
		return function(name) {				//This is an anonymous function; it has no name.
			console.log(name + `, can you please explain what UX is?`);
		};
	 } else if (job === `Teacher`) {
			return function (name) {
				console.log(name + `, what are your views on the Polanski teaching method?`);
			};
		} else if (job === `Starfleet Captain`) {
			return function (name) {
				console.log(name + `, how many years did you serve in Starfleet?`);
			};
		} else if (job === `Watcher of the Crystal`) {
			return function (name) {
				console.log(`O ${name}, Watcher of the Crystal, what see thee within thine past? What doth thee project upon reality? What universes unfurl behind thine eyes, beyond thine physical forme?`);
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