//On load, .contentBox should contain question #1

// When user enters Answer and hits submit, ask if
//answer matches stored Answer

// An array containing questions and answers
//
// var questionBank = [Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10];
// var answerBank = [A1,A2,A3,A4,A5,A6,A7,A8,A9,A10];

$(document).ready()

var button = $("#submitInput");

function checkAnswer(){
  console.log("I was clicked!");
};

button.on("click", checkAnswer);
