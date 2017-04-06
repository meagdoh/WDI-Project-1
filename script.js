$(document).ready()

// Variables
var questionAndAnswers = [{
        question: "ICT4D",
        answer: "Information & Communication Technology for Development"
    },
    {
        question: "IoT",
        answer: "Internet of Things"
    },
    {
        question: "M4D",
        answer: "Mobile for Development"
    },
    {
        question: "HCD",
        answer: "Human-Centered Design"
    },
    {
        question: "IVR",
        answer: "Interactive Voice Response"
    },
    {
        question: "IATI",
        answer: "International Aid Transparency Initiative"
    },
    {
        question: "Agile",
        answer: "A way of building software that is iterative and incremental"
    },
    {
        question: "PAR",
        answer: "Participatory Action Research"
    },
    {
        question: "GIS [mapping]",
        answer: "Geographic Information System"
    },
    {
        question: "PV",
        answer: "Participatory Video"
    },
];
var showAnswerButton = $("#showAnswerButton");
var submitButton = $("#submitInput");
var displayQuestion = $("#questionCard");
var displayAnswer = $("#answerCard");
var nextButton = $("#nextButton");
var answerResponse = $("#answerResponse");
var userScore = $("asideBox");
var webPage = $(document);
var currentQuestionIndex = 0;
var currentAnswerIndex = 0;

//On load, .contentBox contains question #1
displayQuestion.html(questionAndAnswers[0].question);
displayAnswer.html(questionAndAnswers[0].answer);

// Click through the list of questions and answers
nextButton.on("click", setCurrentQuestion);

// Set current question and answer
function setCurrentQuestion() {
    displayQuestion.html(questionAndAnswers[currentQuestionIndex + 1].question);
    currentQuestionIndex++;
    if (currentQuestionIndex === 9) {
        currentQuestionIndex = -1;
    }
    displayAnswer.html(questionAndAnswers[currentAnswerIndex + 1].answer);
    currentAnswerIndex++;
    if (currentAnswerIndex === 9) {
        currentAnswerIndex = -1;
    }
}

// Show answer card.
showAnswerButton.click(function() {
    displayAnswer.toggle("slow");
});

// Check user input against answers.
submitButton.on("click", checkUserInput);

function checkUserInput() {
    var userInput = $("#answerInput").val()
    if (userInput === questionAndAnswers[currentAnswerIndex].answer) {
        answerResponse.html("Correct! Click 'Next'");
    } else {
        answerResponse.html("Try again.");
    }
};
