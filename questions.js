/* Get elements from html file with id*/

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("questionImage");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("score");

/*  Create Questions*/

let questions = [
    {
        question : "What does HTML stand for?",
        imgSrc : "img/html.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A",
    },
    {
        question : "What does CSS stand for?",
        imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C",
    },
    {
        question : "What does JS stand for?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B",
    },
    {
        question : "What JS program development considered?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B",
    },
    {
        question : "Where does JS store data?",
        imgSrc : "img/js.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A",
    },
    {
        question : "What is different about JS as a coding language in comparison to the other languages you have learnt thus far?",
        imgSrc : "img/js.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A",
    },
    {
        question : "Where does JS store data?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B",
    },
];

/* Create our question*/
let questions = [     ];

//create variables
let lastQuestionIndex = questions.length-1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
constGaugeUnit = gaugeWidth / questionTime;

//render a question
function renderQuestion (){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();
renderCounter();



// render progress
function renderProgress (){
    for(let qIndex = 0; qIndex <= lastQuestionIndex;
        qIndex++){
            progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
        }
}

//counter render


function renderCounter (){
    if(count <= questionTime){
        if(count <= questionTime){
            counter.innerHTML = count;
            timeGauge.stylewidth = count * gaugeUnit;
            count++
        }else{
            count=0;
        }
    }
}





