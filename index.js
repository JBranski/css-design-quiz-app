// questions for the quiz
const quizQuestions = [
	{
		question: "1",
		choices: [
			"1",
			"2",
			"3",
			"4"
		],
		answer: "",
	},
	{
		question: "2",
		choices: [
			"1",
			"2",
			"3",
			"4"
		],
		answer: "",
	},
	{
		question: "3",
		choices: [
			"",
			"",
			"",
			""
		],
		answer: "",
	},
	{
		question: "4",
		choices: [
			"",
			"",
			"",
			""
		],
		answer: "",
	},
	{
		question: "5",
		choices: [
			"",
			"",
			"",
			""
		],
		answer: "",
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
	for(let i = 0; i < newQuizOrder.length; i++){
		let answersFormat = `
			<label>
				<input type="radio" name="question${currentQuestion + 1}">
				Hello
			</label>
		`;
	};
}


// function to display questions after the next button is pressed
function nextQuestion(){
	
}
document.getElementById("js-next-button").addEventListener("mouseup", function(){
	nextQuestion();
});


// callback function
window.addEventListener('load', function(){
	console.log('page is fully loaded');
	newQuizOrder = shuffleItems(quizQuestions);
	shuffleAnswerSelector(newQuizOrder);
	renderForm();
  });