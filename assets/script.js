const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const question = document.getElementById("question")
const opt1 = document.getElementById("opt-1")
const opt2 = document.getElementById("opt-2")
const opt3 = document.getElementById("opt-3")
const opt4 = document.getElementById("opt-4")

let questions = [

    {
        question : "here is the 1st question:",
        opt1 : "right",
        opt2 : "wrong",
        opt3 : "wrong",
        opt4 : "wrong",
        correct : "opt1",
    },{
        question : "here is the 1st question:",
        opt1 : "wrong",
        opt2 : "wrong",
        opt3 : "right",
        opt4 : "wrong",
        correct : "opt3",
    }
]

let runningQuestion = 0;

function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" +q.question +"<p>";
    opt1.innerHTML = q.opt1;
    opt2.innerHTML = q.opt2;
    opt3.innerHTML = q.opt3;
    opt4.innerHTML = q.opt4;
}

startButton.addEventListener('click', startGame)

function startGame() {
    console.log("starting")
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    renderQuestion();
}
