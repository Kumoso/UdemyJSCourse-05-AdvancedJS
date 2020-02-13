//

/*
const john = {
	name: 'John',
	yearOfBirth: 1989,
	job: 'Teacher'
};
*/

/* Constructors, aka Factory Functions
	Creates objects
 	CONVENTION: Name function constructors starting with a capital letter.
	It passes in parameters, then assigns them to 'this' object as specific variables.
	And so, it creates a new object with these parameters in the appropriate variables!
*/

/* You CANNOT use arrow functions for Constructors! You have to use standard function syntax.
const Person = (name, yearOfBirth, job) => {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
};
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

