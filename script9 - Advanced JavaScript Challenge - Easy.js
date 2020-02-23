//////////////////////////////////////////
// Coding Challenge

/*
1. Build a function constructor called Question that produces a question in script format.
A question should include: 
a) the question itself,
b) the answers from which the player can choose. These should have a sensible data structure such as an array
c) the correct answer 


2. Create a few questions using the constructor


3. Store the questions inside an array


4. Select one random question and log it to the console alsong with the possible answers.
	Each question should have a number.
	Hint: Write a method for the  Question objects for this task.


5. Use the 'prompt' function to ask the user for a correct answer. The user should input the number of the correct answer into the prompt.


6. Check if the answer is correct and print whether the answer is correct or not.
	Hint: Write another method for this.


7. Assume that this program would be a plug-in for other programmers to use in their code. In that circumstance we would want to avoid polluting their code space; and so the code should be entirely private. Adjust the code to make this so.
	HINT: We looked at a process precisely for this in a previous lecture.

Good luck!
*/


(function() {

const Question = function (qNumber, qQuestion, qAnswers, qCorrect) {
	this.qNumber = qNumber;
	this.qQuestion = qQuestion;
	this.qAnswers = qAnswers;
	this.qCorrect = qCorrect;
};


const q1 = new Question (1, `What is my least favourite of these gummy candies?`, [`Cola bottle`, `Bubblegum bottle`, `Milk bottle`, `Strawb`, 'Watermelon'], 1);

const q2 = new Question (2, `Which of these 'In Love With A Ghost' songs have I listened to the most?`, [`We've never met but we can have a cup of coffee or something`, `Goodbye earth I'm taking my spaceship to explore the universe`, `When you think about her and your brain says no don't do that`, `Let's walk across this forest, I can feel everything being real again`], 1);

const q3 = new Question (3, `Which of these colours isn't one of my favourites?`, [`Blue`, `Green`, `Yellow`, `Orange`, `Red`, `Pink`, `Purple`], 5);

const q4 = new Question (4, `Which of these things don't I like as much as the others?`, [`A cozy lie-in`, `A hot bath`, `Ramen`, `Cats`, `Matcha latte`, `Cheeseburger`, `American sitcoms`, `Lo-fi beats to relax/study to`, `Cherry 7-Up`], 7);

const q5 = new Question (5, `Which of these things don't I call my partner?`, [`Cute guy`, `Floofkin`, `Petit pois`, `Tiny bear`,  `Smol raccoon`, `Gato`], 3);


let questions = [q1, q2, q3, q4, q5,];



let qNumber = Math.floor(Math.random() * 5);
let qThis = questions[qNumber];

function setQuestion () {

	console.log( 
		`Question ${qThis.qNumber}: ${qThis.qQuestion}`
		);

	for (let i = 0; i < qThis.qAnswers.length;i++ ) {
		console.log( 
			`${1+i}: ${qThis.qAnswers[i]}`
		);
	};


	
	let userAnswer = prompt (`Which is the correct answer?`);





	if (userAnswer == qThis.qCorrect) {
		console.log(`
		Congratulations! You know Dave well!`);
	} else {
		console.log(`Un-oh! Maybe you don't know Dave as well as you thought you did!`);
	};

};

setQuestion ()

}) ();

