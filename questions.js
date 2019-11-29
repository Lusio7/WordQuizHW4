/* Get elements from html file with id*/

const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const qImg = document.getElementById("questionImage");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const timeGuage = document.getElementById("timeGuage");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");

/*  Create Questions*/

let quesrions = [
    {
        question : "What does HTML stand for?",
        imgSrc : "./assets/HTMLLogo.png",
        choiceA : "Hyper Text Markup Language",
        choiceB : "Hyperlinks Text Markup Languages",
        choiceC : "Home Tool Markup Language",
        correct : "A",
    },
    {
        question : "What does CSS stand for",
        imgSrc : "./assets/CSSLogo.png",
        choiceA : "Calculated Style Sheets",
        choiceB : "Cumulative Styling System",
        choiceC : "Cascading Style Sheets",

        

    }
],

/* Creating the question reader*/

let lastQuestionIndex = questions.length-1
let runningQuestionIndex = 0;


function renderQuestion (){
    let q = questions[runningQuestionIndex];
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;

    runningQuestionIndex = 0;
    renderQuestion()

    runningQuestionIndex++
    renderQuestion()
}




