// PLAN

// Function to start quiz
// -When start button is clicked, start timer deduction and display new question

// Function for new question
// -Displays random question from array in question area, displays new choices on buttons. 
// -When choice is correct, display 'RIGHT' and move to next question.
// -When choice is wrong, display 'WRONG', deduct time from timer, and move on to next question.

// Function for when timer gets to 0 or last question is answered
// -Display alert that says the game is over and displays score
// -if score > highscore, display alert that they have the high score and to type in initials
// -display highscore to highscore section in header


var startButton = document.querySelector("#start-button");
var timeLeft = document.querySelector("#countDownClock");
var questionSpan = document.querySelector("#question");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");




var startQuiz = function() {
    newQuestion();
    var time = 10;

    var timeInterval = setInterval(function() {
        if (time >= 0) {
            timeLeft.textContent = time;
            time--;
        } else {
            timeLeft.textContent = '';
            clearInterval(timeInterval);
            questionSpan.textContent = "Quiz Over!";
            choice1.textContent = "Press";
            choice2.textContent = "start to";
            choice3.textContent = "try";
            choice4.textContent = "again!";            
            window.alert("Time's up!");
        }
    }, 1000);
};

var newQuestion = function() {
    questionSpan.textContent = "What color is the sky?";
    choice1.textContent = "green";
    choice2.textContent = "red";
    choice3.textContent = "blue";
    choice4.textContent = "orange";
};



startButton.addEventListener("click", startQuiz);