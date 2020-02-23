//////////////////////
// Constructors, aka Factory Functions

/* Constructors are functions that create objects.
It passes in parameters, then assigns them to 'this' object as specific variables. 
And so, it creates a new object with these parameters in the appropriate variables!

CONVENTION: Name function constructors starting with a capital letter. 

You CANNOT use arrow functions for Constructors! You have to use standard function syntax.
*/


//Here's a Constructor!

const Person = function (name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;

/*	this.calculateAge = function () {
		console.log(2020 - yearOfBirth);
*/

};



//Here's an Instance of the Constructor!
//Creation of new Instances is called Instentiation.
const john = new Person (`John`, 1990, `Architect`);
console.log (john);

/* A description of the 'new' operator:
First, it creates a new empty object;
Then, it calls the function (Person) and executes it -within- the new empty object.
'This' therefore points to the new empty object (rather than the global object or another higher object),
and so the new variables and parameters are correctly assigned to this new object.
*/

/****************** */

//Now we can create a few new people.

const Angela = new Person (`Angela`, 1987, `Fisherwoman`);

const Peri = new Person (`Peri`, 1978, `Botanist`);



//Constructors can be modified after the event. Though this seems silly now, it does have its uses!
//Note the use of 'this' in the function added here. 
//Just like when we created the constructor originally, 
//'this' is required to establish that we're calling yearOfBirth from the specific instance. 
//Otherwise it returns as undefined because it looks in the global scope.

/*Also note the use of the word 'prototype'.
prototype is a property of all objects (including the object object).
It is in effect a 'blank' version of the object that's stored in memory.
Calling this property when adding a variable to an object informs that object that the new variable need not be 
wholly re-created every time a new instance is created from the constructor;
rather, the instance in the constructor can be called.
The relevance of this is that it saves memory space as you aren't recreating the same lines each time
you create a new instance from the constructor. Instead only one instance of the line exists and can be calles as requred.
It's a good example of DRY in the mechanics of the language ^__^
*/

Person.prototype.calculateAge = function() {
	console.log(2020 - this.yearOfBirth); 
};


john.calculateAge();
Angela.calculateAge();
Peri.calculateAge();

// We can also add parameters that will be inherited by all instances of the prototype.

Person.prototype.lastName = `Smith`;

console.log(Angela.lastName);


/* Another useful thing to know is that while objects are not stored as parameters when referenced except within their original objects, 
and are instead pointed to by inheritors,
primitives ARE stored within the objects they belong to.

john.age = 25							25 is stored in the john object.

Person.prototype.lastName = `Smith`;	The prototype Person contains the primitive `Smith`,

console.log(john.lastName);				john uses the object Person to define its lastName. 
										neither Person nor `Smith` are stored within the john object;
										rather, they are pointed at, and called when required.


*/



////////Primitives

let a = 23;
let b = a;
a = 46;
console.log(a);
console.log(b);

/*The example above demonstrates something about how variables are defined.
		a is defined as 23.
		b is defined as a, which is 23.
		Then a is redefined as 46.

		Though it seems counterintuitive, b is not updated after a is redefined; b remains 23.
		
		This demonstrates that the primitives held in these objects a and b are held, and are not pointed;
		b retains its value of 23 rather than pointing to a and becoming 46.
*/


////////Objects

const objA = {
	name: `John`,
	age: 26,
};

const objB = objA;

objA.age = 30;

console.log(objA.age);
console.log(objB.age);

/* The lines above are analogous to the example with a and b, but here we have created two objects.
Object B's values are equal to those of object A.
As Object A is an object, not a primitive, Object B points to it rather than holding its values.
So, when object A is updated so that objA.age = 30,
when we call object B, it pulls its values fron object A, and so objB.age = 30 as well.
*/



////////Functions

let age =  24
let objC = {
	name:	`Tony`,
	city:	`Brighton`,
};

function change(a, b) {
	a = 30;
	b.city = `San Francisco`;
};

change(age, objC); 

console.log(age);
console.log(objC);

/* Here's a third example! The function above modifies an object that only contains a primitive, and a more complex object.
It points to the object objC, and ao it changes the value within it.
However becasue age is a primitive, it creates a copy of age while the function executes; then once it finishes the copy is lost.
So, the age object isn't actually changed, it remains as 24.
I'm told that this is simply a mechanic of JS!

To rephrase, we do not pass objects into functions, we just point to them;
but we do pass primitives into functions.

Look out for this! It can give some unexpected results and strange bugs!
*/

/////////////// const and let

/*the above has great significance regarding the use of const and let!
previously we've seen ways to change the contents of an object declared with const
In fact, the object defined with const -does not change-. Its values are immutable.
rather, the thing which the const object points at is modified.

*/



// Lecture 5: Object.create

/* This is anothert process for the creation of objects.
This process does not use a constructor function. 
It's pretty ugly though!
And frankly... it's obsolete, so I'm advised.
We can come back to this in time if we wish to, but for now we'll focus on relevant, more contemporary code.
*/