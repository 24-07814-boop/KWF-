const quiz = [
{
type: "mc",
question: "Ano ang pagpapantig?",
options: ["Pagbilang", "Paghahati ng salita", "Pagbasa"],
answer: "Paghahati ng salita"
},
{
type: "mc",
question: "Alin ang tamang pagpapantig?",
options: ["tra-ba-ho", "trab-a-ho", "tr-aba-ho"],
answer: "tra-ba-ho"
},
{
type: "mc",
question: "Alin sa mga ito ang HINDI nirereispel?",
options: ["kompyuter", "Facebook", "eskwela"],
answer: "Facebook"
},
{
type: "mc",
question: "Ano ang gamit ng 'ng'?",
options: ["Pang-abay", "Pantukoy", "Pang-ugnay"],
answer: "Pantukoy"
},
{
type: "mc",
question: "Ano ang gamit ng kuwit?",
options: ["Paghihiwalay ng ideya", "Pagpapahinto", "Pagpapaikli"],
answer: "Paghihiwalay ng ideya"
},
{
type: "id",
question: "Isulat ang tamang pagpapantig ng salitang 'eskwela'",
answer: "es-kwe-la"
},
{
type: "id",
question: "Isulat ang Filipino ng 'computer'",
answer: "kompyuter"
},
{
type: "id",
question: "Ano ang tamang gamit: 'ng' o 'nang'? (Kumain ___ mabilis)",
answer: "nang"
}
];

let current = 0;
let score = 0;

function loadQuestion() {
    const q = quiz[current];

    document.getElementById("result").innerText = "";

    if (q.type === "mc") {
        document.getElementById("options").style.display = "block";
        document.getElementById("inputBox").style.display = "none";

        document.getElementById("question").innerText = q.question;

        for (let i = 0; i < 3; i++) {
            document.getElementById("opt" + i).innerText = q.options[i];
        }
    } else {
        document.getElementById("options").style.display = "none";
        document.getElementById("inputBox").style.display = "block";

        document.getElementById("question").innerText = q.question;
        document.getElementById("textAnswer").value = "";
    }
}

function answerMC(i) {
    let selected = document.getElementById("opt" + i).innerText;

    if (selected === quiz[current].answer) {
        score++;
        document.getElementById("result").innerText = "✅ Tama!";
    } else {
        document.getElementById("result").innerText = "❌ Mali!";
    }
}

function answerID() {
    let userAnswer = document.getElementById("textAnswer").value.toLowerCase();

    if (userAnswer === quiz[current].answer.toLowerCase()) {
        score++;
        document.getElementById("result").innerText = "✅ Tama!";
    } else {
        document.getElementById("result").innerText = "❌ Mali!";
    }
}

function nextQuestion() {
    current++;

    if (current < quiz.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById("quiz-container").innerHTML =
        `<h2>Natapos mo ang Quiz!</h2>
         <p>Score: ${score} / ${quiz.length}</p>`;
}

window.onload = loadQuestion;