//On load, .contentBox should contain question #1

// When user enters Answer and hits submit, ask if
//answer matches stored Answer

// An array containing questions and answers
//
var questionAndAnswers ={
  questionBank: ["Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8","Q9","Q10"],
  answerBank: ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10"]
};


$(document).ready()

var submitButton = $("#submitInput");
var displayQuestion = $("#card");
var nextButton = $("#nextButton");
var answerDisplay = $("#answerDisplay");
// var currentQuestion = questionBank[0]


var currentIndex = -1;

nextButton.on("click", function(){
  displayQuestion.html(questionAndAnswers.questionBank[currentIndex + 1]);
  currentIndex++;
  if(currentIndex === 9) {
    currentIndex = -1;
  }
});

submitButton.on("click", function(){
  var userInput = $("#answerInput").val()
  if (userInput === questionAndAnswers.answerBank[currentIndex]) {
    answerDisplay.html("Correct! Click 'Next'")
    }
  else {
    answerDisplay.html("Try again.");
    }
  });


// //flipping card
//   $("#card").flip({
//     axis: 'x',
//     trigger: 'hover'
//   });
