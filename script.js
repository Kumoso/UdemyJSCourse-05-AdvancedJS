//////////////////////////////
// Call, Aplly and Bind Methods

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


//The Bind Method

/* .bind is similar to the Call function, except that it doesn't instantaneously call the function.
Instead it allows us to create a new Reference in a variable which points to the function.

[The course says that it returns the function and stores it in a new variable, but Ian says this is untrue. The console gives evidence to support Ian's assertion.]

We haven't used the term References before. A Reference is a specific type of value in JS. It points to a value elesehwere (not to the variable holiding it but specifically to the value). The reference broduced by Bind points to a function.
*/

/* In the example below we create a new variable called johnCasual. We call john.introduction, then use the .bind method to store a reference to john.introduction in the johnCasual variable. 

In the brackets we add two details. 
The first term (john) defines the 'this' variable. The tutor doesn't explain what this actually means. He says it 'doesn't really matter and so we'll just call it John.' Ian adds that he generally just calls it 'this' and has no problems with this approach. Until I understand better I'll use 'this'.

The second value (`casual`) sets a value for the first variable in the called function. Now,w henever we call johnCasual, the first argument of the function will always be `casual`. This is called Carrying. We could add more arguments for the function in this way if we wanted. If we leave them clear, then we can define them later, as we do in the line after the bind, below.
*/

const johnCasual = john.introduction.bind(john, `casual`);
johnCasual(`evening`);

/*If you look at the console in the browser you'll see that the output from the johnCasual function acutally comes from line 14. This is because the reference produced by .bind points to the function up there, and returns the output from up there.
*/
