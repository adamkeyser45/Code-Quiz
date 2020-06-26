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
var rightWrong = document.querySelector("#rightWrong");
var currentQuestion = 0;
var time = 10;

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
    },
    {
        question: 'What is 4 + 4?',
        answers: {a: '8', b: '7'},
        correct: '8'
    },
    {
        question: 'How many sideds are on a triangle?',
        answers: {a: 'four', b: 'three'},
        correct: 'three'
    }
];

var startQuiz = function() {

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
            startButton.removeAttribute("disabled");
            choice1.setAttribute("disabled", "disabled");
            choice2.setAttribute("disabled", "disabled");
        }
    }, 1000);
    startButton.setAttribute("disabled", "disabled");
    choice1.removeAttribute("disabled");
    choice2.removeAttribute("disabled");
    setNewQuestion();
};

var setNewQuestion = function() {
     
    if (currentQuestion < questions.length) {
        var newQuestion = questions[currentQuestion].question;
        var answerA = questions[currentQuestion].answers.a
        var answerB = questions[currentQuestion].answers.b

        questionSpan.textContent = newQuestion;
        choice1.textContent = answerA;
        choice2.textContent = answerB;
    };     
};

var checkAnswer1 = function() {
    var text = choice1.textContent
    // If the button's text content = the question's correct answer then display correct and setNewQuestion()
    if (questions[currentQuestion].correct === text) {
        rightWrong.textContent = "RIGHT!"
    }
    // Else display WRONG and subtract 2 from time
    else {
        rightWrong.textContent = "WRONG!"
        time = time - 2;
    }
    // Then set a new question
    currentQuestion++;
    setNewQuestion();
};

var checkAnswer2 = function() {
    var text = choice2.textContent
    // If the button's text content = the question's correct answer then display correct and setNewQuestion()
    if (questions[currentQuestion].correct === text) {
        rightWrong.textContent = "RIGHT!"
    }
    // Else display WRONG and subtract 2 from time
    else {
        rightWrong.textContent = "WRONG!"
        time = time - 2;
    }
    // Then set a new question
    currentQuestion++;
    setNewQuestion();
};

choice1.addEventListener("click", checkAnswer1);
choice2.addEventListener("click", checkAnswer2)
startButton.addEventListener("click", startQuiz);