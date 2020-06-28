var startButton = document.querySelector("#start-button");
var timeLeft = document.querySelector("#countDownClock");
var questionSpan = document.querySelector("#question");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var rightWrong = document.querySelector("#rightWrong");

var showHighScoreInitials = document.querySelector("#highScoreInitials");
showHighScoreInitials.textContent = localStorage.getItem("highScoreInitials");

var showHighScore = document.querySelector("#highScore");
showHighScore.textContent = localStorage.getItem("highScore");

var currentQuestion = 0;
var time = "";

// Array that holds the quiz questions
var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: {a: '<scripting>', b: '<js>', c: '<javascript>', d: '<script>'},
        correct: '<script>'
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML of something?',
        answers: {a: '.innerHTML', b: 'document.prompt', c: 'html.change', d: '<html>'},
        correct: '.innerHTML'
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: {a: 'the <head> section', b: 'the <body> section', c: 'in the style sheet', d: 'It does not matter'},
        correct: 'the <body> section'
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: {a: '<script href="xxx.js">', b: '<script src="xxx.js">', c: '<script tag="xxx.js">', d: '<script name="xxx.js">'},
        correct: '<script src="xxx.js">'
    },
    {
        question: 'Should the external JavaScript file contain the <script> tag?',
        answers: {a: 'Yes, always', b: 'Only if you include the correct ID', c: 'No, you should not do this', d: 'It does not matter.'},
        correct: 'No, you should not do this'
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: {a: 'alertBox("Hello World");', b: 'msg("Hello World");', c: 'alert("Hello World");', d: 'msgBox("Hello World");'},
        correct: 'alert("Hello World");'
    },
    {
        question: 'How do you create a function in JavaScript?',
        answers: {a: 'function = myFunction()', b: 'function myFunction()', c: 'function:myFunction()', d: 'all of these will work'},
        correct: 'function myFunction()'
    }
];

var startQuiz = function() {
    currentQuestion = 0;
    time = 60;
    // Countdown timer Loop
    var timeInterval = setInterval(function() {
        // When time is greater than 0 or there are still questions left
        if (time > 0 && currentQuestion < questions.length) {
            time--;
            timeLeft.textContent = time;
        } 
        // When time is up or there are no more questions, end the quiz with quizEnd()
        else {
            clearInterval(timeInterval);
            quizEnd();
        }
    }, 1000);
    // Enables multiple choice buttons and disables start button and sets the first question
    startButton.setAttribute("disabled", "disabled");
    choice1.removeAttribute("disabled");
    choice2.removeAttribute("disabled");
    choice3.removeAttribute("disabled");
    choice4.removeAttribute("disabled");
    setNewQuestion();
};

var setNewQuestion = function() {
    // If there are still questions left in the array, then load the button's text with the responses from the array
    if (currentQuestion < questions.length) {
        var newQuestion = questions[currentQuestion].question;
        var answerA = questions[currentQuestion].answers.a;
        var answerB = questions[currentQuestion].answers.b;
        var answerC = questions[currentQuestion].answers.c;
        var answerD = questions[currentQuestion].answers.d;

        questionSpan.textContent = newQuestion;
        choice1.textContent = answerA;
        choice2.textContent = answerB;
        choice3.textContent = answerC;
        choice4.textContent = answerD;
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

var checkAnswer3 = function() {
    var text = choice3.textContent
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

var checkAnswer4 = function() {
    var text = choice4.textContent
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

var quizEnd = function() {
    
    // Disable answer choices and display text letting the user know the game is over and what to do to restart
    questionSpan.textContent = "Quiz Over!";
    choice1.textContent = "Press";
    choice2.textContent = "start";
    choice3.textContent = "to try";
    choice4.textContent = "again!";
    rightWrong.textContent = "Thanks for playing!"           
    startButton.removeAttribute("disabled");
    choice1.setAttribute("disabled", "disabled");
    choice2.setAttribute("disabled", "disabled");
    choice3.setAttribute("disabled", "disabled");
    choice4.setAttribute("disabled", "disabled");

    window.alert("Quiz Over!");
    var score = time; 

    // If the score is greater than highscore, then prompt them to enter their initials
    if (score > localStorage.getItem("highScore")) {
      var highScoreInitials = window.prompt("Congratulations! You have the highscore! Type in your initials below!")
      localStorage.setItem("highScoreInitials", highScoreInitials);
      localStorage.setItem("highScore", score);

    } // If the user didn't get the highscore, alert the user of their score and store
    else {    
        window.alert("Your final score is: " + score);
    }
};

choice1.addEventListener("click", checkAnswer1);
choice2.addEventListener("click", checkAnswer2);
choice3.addEventListener("click", checkAnswer3);
choice4.addEventListener("click", checkAnswer4);
startButton.addEventListener("click", startQuiz);