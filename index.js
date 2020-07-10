// questions for the quiz
const quizQuestions = [
	{
		key: "colorCheck",
		question: "What color is #663399?",
		choices: [
			"Indigo",
			"RebeccaPurple",
			"MediumOrchid",
			"SlateBlue"
		],
		answer: "RebeccaPurple",
	},
	{
		key: "cssTag",
		question: "What tag do you use to link to an external css document?",
		choices: [
			"&#60;css&#62;",
			"&#60;style&#62;",
			"&#60;link&#62;",
			"&#60;a&#62;"
		],
		answer: "<link>",
	},
	{
		key: "customProperty",
		question: "How would you access the CSS custom property --purple?",
		choices: [
			"var(--purple)",
			"$purple",
			"@purple",
			"--purple"
		],
		answer: "var(--purple)",
	},
	{
		key: "cssPreprocessor",
		question: "Which item below is not a CSS preprocessor",
		choices: [
			"Sass",
			"Stylus",
			"Bootstrap",
			"Less"
		],
		answer: "Bootstrap",
	},
	{
		key: "flexbox",
		question: "How do you make a flexbox element",
		choices: [
			"display: flexbox;",
			"position: flexbox;",
			"display: flex;",
			"box-sizing: flex;"
		],
		answer: "display: flex;",
	},
];


// initial variables for current question and score
let currentQuestion = 0;
let currentScore = 0;

// store the shuffled questions in an array
let newQuizOrder = [];

// button containers into variables
let nextBtn, checkBtn;
let startBtn = document.querySelector("button#js-start-btn");


// shuffles the order of itemsquestions or answers
function shuffleItems(items){
	let i, j, x;
	for(i = items.length - 1; i > 0; i--){
		j = Math.floor(Math.random() * (i + 1));
		x = items[i];
		items[i] = items[j];
		items[j] = x;
	}
	return items;
}



// loop through the choices and shuffle them
function shuffleAnswerSelector(answers){
	for(let i = 0; i < quizQuestions.length; i++){
		let questionOptions = newQuizOrder[i].choices;
		shuffleItems(questionOptions);
	}
}



// renders the form questions and hides all questions
function renderForm(){
	let formArea = document.getElementById("js-form");
	let questionFormat;
	let answersFormat;

	// loop through the questions
	for(let i = 0; i < newQuizOrder.length; i++){
		questionFormat = `<fieldset class="hidden"><legend>${newQuizOrder[i].question}</legend>`;

		// loop through the choices
		for(let j = 0; j < newQuizOrder[j].choices.length; j++){
			let answersFormat = `
				<label>
					<input type="radio" name="${newQuizOrder[i].key}" value="${newQuizOrder[i].choices[j]}">
					${newQuizOrder[i].choices[j]}
				</label>
			`;
			questionFormat += answersFormat;
			
		};
		questionFormat += `</fieldset>`
		formArea.innerHTML += questionFormat;
	}

	// add buttons to the end of the form
	formArea.innerHTML += `<button id="js-check-btn" type="button" class="disabled">Check</button><button id="js-next-btn" type="button" >Next</button>`;

	// store the buttons into their variables after they are rendered
	checkBtn = document.getElementById("js-check-btn");
	nextBtn = document.getElementById("js-next-btn");

	checkBtn.addEventListener("click", checkAnswer);
	checkBtn.addEventListener("keyup", function(e){
		if(e.key === "Enter"){
			checkAnswer;
		}
		return false;
	});
	nextBtn.addEventListener("click", nextQuestion);
	nextBtn.addEventListener("keyup", function(e){
		if(e.key === "Enter"){
			nextQuestion;
		}
		console.log(e.key)
		return false;
	});
	
}



// Begin the quiz
startBtn.addEventListener("click", function(){
	hideHomeScreen();
	nextQuestion();
});
startBtn.addEventListener("keyup", function(e){
	if(e.key === "Enter"){
		hideHomeScreen();
		nextQuestion();
	}
	return false;
});


// start the quiz
function hideHomeScreen(){
	document.querySelector(".js-home-screen").classList.toggle("hidden");
	document.querySelector(".js-form-screen").classList.toggle("hidden");
}



// check quiz answer
function checkAnswer(){
	let selectedAnswer = document.querySelector(`input[name="${newQuizOrder[currentQuestion - 1].key}"]:checked`).value;
	
	if(selectedAnswer == newQuizOrder[currentQuestion - 1].answer){
		console.log(currentScore)
		return currentScore++;
	}
	
	toggleCheckButton();
	toggleNextButton();
}



// function to display questions after the next button is pressed
function nextQuestion() {
	if(!(currentQuestion === 0)){
		document.querySelector(`fieldset:nth-of-type(${currentQuestion})`).classList.toggle("hidden");
	}
	document.querySelector(`fieldset:nth-of-type(${currentQuestion + 1})`).classList.toggle("hidden");
	currentQuestion++;

	toggleCheckButton();
	toggleNextButton();
	lockChoices();
}



// toggle check button to toggle it being clickable
function toggleCheckButton(){
	checkBtn.classList.toggle("disabled");
}


// toggle next button to toggle it being clickable
function toggleNextButton(){
	nextBtn.classList.toggle("disabled");
}


// turn off being able to select radio buttons after being selected
function lockChoices(){

}


// callback function
window.addEventListener('load', function(){
	// console.log('page is fully loaded');
	newQuizOrder = shuffleItems(quizQuestions);
	shuffleAnswerSelector(newQuizOrder);
	renderForm();
  });