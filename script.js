
$(document).ready()

// Variables
var questionAndAnswers =[
   {question: "question 1", answer: "answer 1"},
   {question: "question 2", answer: "answer 2"},
   {question: "question 3", answer: "answer 3"},
   {question: "question 4", answer: "answer 4"},
   {question: "question 5", answer: "answer 5"},
   {question: "question 6", answer: "answer 6"},
   {question: "question 7", answer: "answer 7"},
   {question: "question 8", answer: "answer 8"},
   {question: "question 9", answer: "answer 9"},
   {question: "question 10", answer: "answer 10"},
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
  if(currentQuestionIndex === 9) {
    currentQuestionIndex = -1;
  }
  displayAnswer.html(questionAndAnswers[currentAnswerIndex + 1].answer);
  currentAnswerIndex++;
  if(currentAnswerIndex === 9) {
    currentAnswerIndex = -1;
  }
}


// Show answer card. *Needs to default to hidden.
 showAnswerButton.click(function() {
    displayAnswer.toggle( "slow" );
  });

// Checking user input against answers. Store results in results array.
submitButton.on("click", function(){
  var userInput = $("#answerInput").val()
  if (userInput === questionAndAnswers[currentAnswerIndex].answer) {
    answerResponse.html("Correct! Click 'Next'");
    }
  else {
    answerResponse.html("Try again.");
    }
  });

//Check results for

  //
  // var trackScore = function(){
  //   var correctAnswer = [currentQuestionIndex]
  //   // If answerResponse = true, remove from questionAndAnswers.
  //   // If answerResponse = false, do nothing.
  //   // When array = 0, display 'Complete!'
  // };

// webPage.on('keypress', function (event) {
//           if (event.keyCode == 39) {
//               alert("Enter key pressed");
//           }
//           else {
//               alert("Not Enter key pressed");
//           }
//       });


//Card display
  // Flip through flashcards using keystrokes
      // nextButton.onkeydown = function(){
      //   console.log("Keypress works!")
      // };
// After you click submitButton, clear #answerInput
// After you click nextButton, clear #answerResponse

// toggle jQuery.hide (on click Answer button)
