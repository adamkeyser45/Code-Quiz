// PLAN

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

var showHighScoreInitials = document.querySelector("#highScoreInitials");
showHighScoreInitials.textContent = localStorage.getItem("highScoreInitials");

var showHighScore = document.querySelector("#highScore");
showHighScore.textContent = localStorage.getItem("highScore");

var currentQuestion = 0;
var time = "";

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
    time = 10;

    var timeInterval = setInterval(function() {
        if (time > 0 && currentQuestion < questions.length) {
            timeLeft.textContent = time;
            time--;
        } else {
            clearInterval(timeInterval);
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
    } else {
        quizEnd();
    }     
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
    console.log(currentQuestion);
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
    console.log(currentQuestion);
    setNewQuestion();
};

var quizEnd = function() {
    
    questionSpan.textContent = "Quiz Over!";
    choice1.textContent = "Press start";
    choice2.textContent = "to try again!";         
    startButton.removeAttribute("disabled");
    choice1.setAttribute("disabled", "disabled");
    choice2.setAttribute("disabled", "disabled");

    window.alert("Quiz Over!");
    var score = time; 

    // If the score is greater than highscore, then prompt them to enter their initials
    if (score > localStorage.getItem("highScore")) {
      var highScoreInitials = window.prompt("Congratulations! You have the highscore! Type in your initials below!")
      localStorage.setItem("highScoreInitials", highScoreInitials);
      localStorage.setItem("highScore", score);

    } else {
        // Alert the user of their score and store the score to localStorage
        window.alert("Your final score is: " + score);
    }
};

choice1.addEventListener("click", checkAnswer1);
choice2.addEventListener("click", checkAnswer2);
startButton.addEventListener("click", startQuiz);