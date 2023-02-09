const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const question = document.getElementById("question")
const opt1 = document.getElementById("opt-1")
const opt2 = document.getElementById("opt-2")
const opt3 = document.getElementById("opt-3")
const opt4 = document.getElementById("opt-4")
const highScore = document.getElementById("high-score")
const save = document.getElementById("save-score")
const rerun = document.getElementById("rerun")
var score = 0
var penalty = 15
var sec = 50
var timer;


let questions = [

    {
        question : "here is the 1st question:",
        opt1 : "wrong",
        opt2 : "right",
        opt3 : "wrong",
        opt4 : "wrong",
        correct : "opt2",
    },{
        question : "here is the 2nd question:",
        opt1 : "wrong",
        opt2 : "wrong",
        opt3 : "right",
        opt4 : "wrong",
        correct : "opt3",
    },{
        question : "here is the 3rd question:",
        opt1 : "right",
        opt2 : "wrong",
        opt3 : "wrong",
        opt4 : "wrong",
        correct : "opt1",
    },{
        question : "here is the 4th question:",
        opt1 : "wrong",
        opt2 : "wrong",
        opt3 : "right",
        opt4 : "wrong",
        correct : "opt3",
    },{
        question : "here is the 5th question:",
        opt1 : "wrong",
        opt2 : "wrong",
        opt3 : "wrong",
        opt4 : "right",
        correct : "opt4",
    }
]

const lastQuestion = questions.length - 1;

let runningQuestion = 0;

function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" +q.question +"</p>";
    opt1.innerHTML = q.opt1;
    opt2.innerHTML = q.opt2;
    opt3.innerHTML = q.opt3;
    opt4.innerHTML = q.opt4;
}

startButton.addEventListener('click', startGame)

function startTimer () {
     timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec <= 0) {
            endGame();
            clearInterval(timer)
        }
    }, 1000);
}

function startGame() {
    startTimer();
    console.log("starting")
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    renderQuestion();
    
}


function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        correctAnswer();
        score++
    }else{
        wrongAnswer();
    }

    if (runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion()
    }else{
        endGame();
        clearInterval(timer)
    }
}

function correctAnswer(){
    console.log("correct")
}

function wrongAnswer(){
    console.log("wrong")
    sec = sec - penalty
}

function endGame() {

    console.log("game over")
    questionContainerElement.classList.add('hide')
    clearInterval(timer)
    save.classList.remove('hide')
    rerun.classList.remove('hide')
    localStorage.setItem("score",score)
    var initials = window.prompt("enter your initials")
    localStorage.setItem("initials",initials)
}

save.addEventListener('click',saveScore);

function saveScore() {
    console.log("score logged", score)
}

highScore.addEventListener('click',checkScore);

function checkScore() {
    window.alert('here are the high scores')
}

