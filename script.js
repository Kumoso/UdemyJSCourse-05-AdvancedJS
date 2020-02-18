////////////////////////////////////
// Functions Returning Functions

/* A function can return another function. That's all this demonstrates. It's not a fantastic example ^__^
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
		};

	};

/* when the function is returned it will need to be stored somewhere.
In this example we store these in variables called teacherQuestion, designerQuestion etc.
It's really a very strange example, because you could just store the individual functions as teacherQuestion, designerQuestion etc.
and it would be no less dry and muchmore readable!
Let's try to think of a better example.
*/

const teacherQuestion = interviewQuestion (`Teacher`);
const designerQuestion = interviewQuestion (`Designer`);
const captainQuestion = interviewQuestion (`Starfleet Captain`);

teacherQuestion(`John`);
designerQuestion(`Solari`);
captainQuestion(`Jean-Luc`);