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
		answer: "&#60;link&#62;",
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


// initial variable to set default question count to 0
let currentQuestion = 0;



// store the shuffled questions in an array
let newQuizOrder = [];



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
		questionFormat = `<fieldset class="hidden"><legend>${newQuizOrder[currentQuestion].question}</legend>`;

		// loop through the choices
		for(let j = 0; j < newQuizOrder[j].choices.length; j++){
			let answersFormat = `
				<label>
					<input type="radio" name="${newQuizOrder[i].key}">
					${newQuizOrder[i].choices[j]}
				</label>
			`;
			questionFormat += answersFormat;
			
		};
		currentQuestion++;
		questionFormat += `</fieldset>`
		formArea.innerHTML += questionFormat;
	}
	
}


// function to display questions after the next button is pressed
function nextQuestion(){
	console.log("hello");
}

const nextQuestionBtn = document.getElementById("js-next-button");
nextQuestionBtn.addEventListener('click', function(){
nextQuestion();
})


// callback function
window.addEventListener('load', function(){
	console.log('page is fully loaded');
	newQuizOrder = shuffleItems(quizQuestions);
	shuffleAnswerSelector(newQuizOrder);
	renderForm();
  });