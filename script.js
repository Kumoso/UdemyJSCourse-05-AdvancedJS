//////////////////////////////
// Bind, Call and Apply Methods

//First up, here's a function. We'll use this to demo the Call, Bind and Apply methods.

const john = {
	name: `John`,
	age:	33,
	job: `teacher`,
	introduction: function(style, timeOfDay) {
		if (style === `formal`) {
			console.log(`Good ${timeOfDay} ladies and gentlemen! Ny name is ${this.name}, I'm ${this.age} years old and I work as a ${this.job}.`);
		} else if (style === `casual`) {
			console.log(`Hiya! I'm ${this.name}. Are you having a nice ${timeOfDay}?`);

		};
	}
};

john.introduction(`formal`, `evening`);

john.introduction(`casual`, `morning`);

/* The Call Method
We can call the 'introduction' function within John, and then using the Call method we can make this function use values from an object other than John.
In the example below we define a new object called Emilia then call the Introduction function from John, but use Emilia's values. 
*/

const emelia = {
	name: `Emme`,
	age:	37,
	job: `machine programmer`,
};

john.introduction.call(emelia, `formal`, `afternoon` ); 

/* The Apply Method
This is comparable to the Call method, but this method provides an array for the called function to use. However the function needs to be appropriately formatted to accept an array, and the one above is not appropriately formatted for this. As such, the below example won't actually work. It's strange that the course gave us this example at this point since it doesn't work, but hey ho! Apparently we will use a working one soon in the course.
*/

//john.presentation.apply(emilia, [`casual`, `morning`]);


