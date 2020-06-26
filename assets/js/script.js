// PLAN

//Function for checking answers
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


var questions = [
    {
        question: 'What color is the sky?',
        answers: {a: 'red', b: 'blue'},
        correct: 'blue'
    },
    {
        question: 'What color is grass?',
        answers: {a: 'green', b: 'purple'},
        correct: 'green'
    }
];

var startQuiz = function() {
    var time = 10;

    var timeInterval = setInterval(function() {
        if (time >= 0) {
            timeLeft.textContent = time;
            time--;
        } else {
            timeLeft.textContent = '';
            clearInterval(timeInterval);
            questionSpan.textContent = "Quiz Over!";
            choice1.textContent = "Press start";
            choice2.textContent = "to try again!";         
            window.alert("Time's up!");
        }
    }, 1000);

    setNewQuestion();
};

var setNewQuestion = function() {
    var i = 0; 
    if (i < questions.length) {
        var newQuestion = questions[i].question;
        var answerA = questions[i].answers.a
        var answerB = questions[i].answers.b
        questionSpan.textContent = newQuestion;
        choice1.textContent = answerA;
        choice2.textContent = answerB;
       i++; 
    };     
};

var checkAnswer1 = function() {
    


    // If the button's text content = the question's correct answer then display correct and setNewQuestion()
    

    // Else display WRONg and set new question

    // Then set a new question
    // setNewQuestion();
}

choice1.addEventListener("click", checkAnswer1);
startButton.addEventListener("click", startQuiz);