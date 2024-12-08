const quizData = [
    {
        question: "Which is the largest animal in size?",
        a: "Tiger",
        b: "Blue Whale",
        c: "Shark",
        d: "Lion",
        correct: 'b'
    },
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: 'c'
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Venus",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: 'b'
    },
    {
        question: "What is the chemical symbol for water?",
        a: "H2O",
        b: "O2",
        c: "CO2",
        d: "HO",
        correct: 'a'
    },
    {
        question: "Which is the fastest land animal?",
        a: "Cheetah",
        b: "Lion",
        c: "Leopard",
        d: "Tiger",
        correct: 'a'
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        a: "Charles Dickens",
        b: "J.K. Rowling",
        c: "William Shakespeare",
        d: "Mark Twain",
        correct: 'c'
    },
    {
        question: "Which gas do plants absorb during photosynthesis?",
        a: "Nitrogen",
        b: "Oxygen",
        c: "Carbon Dioxide",
        d: "Helium",
        correct: 'c'
    },
    {
        question: "Which ocean is the largest by area?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Pacific Ocean",
        d: "Arctic Ocean",
        correct: 'c'
    },
    {
        question: "How many continents are there on Earth?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: 'c'
    },
    {
        question: "What is the smallest prime number?",
        a: "1",
        b: "2",
        c: "3",
        d: "5",
        correct: 'b'
    },
    {
        question: "Which is the hottest planet in the Solar System?",
        a: "Mercury",
        b: "Venus",
        c: "Mars",
        d: "Jupiter",
        correct: 'b'
    },  
];


const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionHead = document.querySelector(".question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submitBtn');
// console.log(quiz);
// console.log(a_text);
// questionHead.innerText = "Hello";
// console.log(submitBtn);

let currentQuesIndex = 0;
let score = 0;

startQuiz();

function startQuiz() {
    const currentQues = quizData[currentQuesIndex];

    questionHead.innerText = currentQues.question;
    a_text.innerText = currentQues.a;
    b_text.innerText = currentQues.b;
    c_text.innerText = currentQues.c;
    d_text.innerText = currentQues.d;

}


function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            console.log(answerEl.checked);
            answer = answerEl.id;
        } 
    });

    return answer;
}


function deSelect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false; 
    });
}


submitBtn.addEventListener('click', () => {
    let answer = getSelected();
    console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuesIndex].correct) {
            score++;
        }

        currentQuesIndex++;
        if (currentQuesIndex < quizData.length) {{
            startQuiz();
        }} else {
            quiz.innerHTML = `<h4>You answer ${score} questions correctly out of ${quizData.length}</h4> 
            <br>
            <a onclick="location.reload()" style="color: red;">Relaod</a>
            `
        }
    }
    deSelect();
});