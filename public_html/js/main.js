/*
 Assignment 1: Design a trivia game using JavaScript and present it on an HTML 
 page designed for a mobile phone.
 
 Created on : Jun. 2, 2020, 2:27:42 p.m.
 Author     : Haomin Chen
 */
/* global option, question */

// Set up four questions.
const questions = [
    {
        question: "5 more than 90 is _____?",
        options: ["85", "95", "90", "100"],
        answer: "1"
    },
    {
        question: "How many days are there in a week?",
        options: ["7", "12", "14", "16"],
        answer: "0"
    },
    {
        question: "3 less than 90 is _____?",
        options: ["80", "88", "86", "87"],
        answer: "3"
    },
    {
        question: "How many hours are there in a day?",
        options: ["8", "24", "48", "36"],
        answer: "1"
    }
];
//Initialize the global variable questionIndex to invoke questions one at a time.
var questionIndex = 0;
//Initialize the global variable score to calculate the total score.
var score = 0;
//Initialize the global variable i to count the progress bar.
var i = 1;
//Load the first question.
function load() {
    document.getElementById("question").innerHTML = "(" + (questionIndex + 1) + "). "
            + questions[questionIndex].question;
    document.getElementById("opt1").innerHTML = "( A ) " + questions[questionIndex].options[0];
    document.getElementById("opt2").innerHTML = "( B ) " + questions[questionIndex].options[1];
    document.getElementById("opt3").innerHTML = "( C ) " + questions[questionIndex].options[2];
    document.getElementById("opt4").innerHTML = "( D ) " + questions[questionIndex].options[3];
}
window.onload = () => {
    load();
};
//When the user press "Enter Answer", invoke this function to show the answer's 
//result, if the user does not select a choice, prompt him to answer again.
function answerButton() {
    var id = "step" + i;
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption) {
        confirm("Please select your answer");
        return;
    }
    //Initialize the global variable answer to compare it with default answer.
    var answer = selectedOption.value;
    //Hide the question and option to show the answer page.
    question.style.display = "none";
    option.style.display = "none";
    document.getElementById("answer").style.display = "block";
    //Tell the user if he answer right or not.
    if (questions[questionIndex].answer == answer - 1) {
        document.getElementById("answer").innerHTML = "Your guess is Correct!";
        document.getElementById(id).style.backgroundColor = "green";
        score++;
    } else {
        document.getElementById("answer").innerHTML = "Your Guess is incorrect!" +
                " Better luck next time!";
        document.getElementById(id).style.backgroundColor = "red";
    }
    i++;
    selectedOption.checked = false;
    questionIndex++;
    if (questionIndex == questions.length) {
        document.getElementById("result").style.display = "block";
        return;
    }
}
//When the user press "Next Question", invoke this function to show next question.
function nextButton() {
    question.style.display = "block";
    option.style.display = "block";
    document.getElementById("answer").style.display = "none";
    document.getElementById("question").innerHTML = "(" + (questionIndex + 1) + "). "
            + questions[questionIndex].question;
    document.getElementById("opt1").innerHTML = "( A ) " + questions[questionIndex].options[0];
    document.getElementById("opt2").innerHTML = "( B ) " + questions[questionIndex].options[1];
    document.getElementById("opt3").innerHTML = "( C ) " + questions[questionIndex].options[2];
    document.getElementById("opt4").innerHTML = "( D ) " + questions[questionIndex].options[3];
    if (questionIndex == questions.length) {
        document.getElementById("nextbtn").disabled = true;
        return;
    }
}
//When the user press "Check score", invoke this function to the result for total
//score.
function resultButton() {
    document.getElementById("answer").style.display = "none";
    document.getElementById("result").innerHTML = "Your final score is " + score + "/4";
}
//When the user press "Help", invoke this function to show the help
//instructions.
function helpButton() {
    document.getElementById("answer").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("step").style.display = "none";
    document.getElementById("option").style.display = "none";
    document.getElementById("aswbtn").style.display = "none";
    document.getElementById("nextbtn").style.display = "none";
    document.getElementById("helpbtn").style.display = "none";
    document.getElementById("resetbtn").style.display = "none";
    document.getElementById("resultbtn").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("help").style.display = "block";
    document.getElementById("back").style.display = "block";
}
//When the user press "Back to game", invoke this function to return the game.
function back() {
    document.getElementById("title").style.display = "";
    document.getElementById("question").style.display = "";
    document.getElementById("step").style.display = "";
    document.getElementById("option").style.display = "";
    document.getElementById("aswbtn").style.display = "";
    document.getElementById("nextbtn").style.display = "";
    document.getElementById("helpbtn").style.display = "";
    document.getElementById("resetbtn").style.display = "";
    document.getElementById("resultbtn").style.display = "";
    document.getElementById("result").style.display = "";
    document.getElementById("help").style.display = "none";
    document.getElementById("back").style.display = "none";
}
