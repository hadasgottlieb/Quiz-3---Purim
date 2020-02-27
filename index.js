/* Questions:
        1. Who was Haman's wife?
            a. Zeresh *
            b. Cindy
            c. Haman had no wife.
            d. Haman's wife had no nose.
        2. How were Esther and Mordechai related?
            a. They were the same person.
            b. Esther was Mordechai's accountant.
            c. Esther was Mordechai's niece. *
            d. Esther and Mordechai never met.
        3. Who was Memuchan?
            a. An Olympic snowboarder.
            b. A nosy shopkeeper.
            c. A pokemon.
            d. An advisor to the king. *
        4. What word best describes King Achashverosh?
            a. Cheeky
            b. Stupid *
            c. Clever
            d. Beige
        5. What was Esther's Hebrew name?
            a. Shoshi
            b. Hadassah *
            c. Breindel
            d. Mayim Bialik

*/

let STORE = {
    currentQuestionIndex: 0,
    correctCount: 0,
    questions: [
    {
        questionNumber: 1,
        question: "Who was Haman's wife?",
        options: ["Zeresh", "Cindy", "Haman had no wife.", "Haman's wife had no nose."],
        correctAnswer: "Zeresh",
    },
    {
        questionNumber: 2,
        question: "How were Esther and Mordechai related?",
        options: ["They were the same person.", "Esther was Mordechai's accountant.", "Esther was Mordechai's niece.", "Esther and Mordechai never met."],
        correctAnswer: "Esther was Mordechai's niece.",
    },
    {
        questionNumber: 3,
        question: "Who was Memuchan?",
        options: ["An Olympic snowboarder.", "A nosy shopkeeper.", "A pokemon.", "An advisor to the king."],
        correctAnswer: "An advisor to the king.",
    },
    {
        questionNumber: 4,
        question: "What word best describes King Achashverosh?",
        options: ["Cheeky", "Stupid", "Clever", "Beige"],
        correctAnswer: "Stupid",
    },
    {
        questionNumber: 5,
        question: "What was Esther's Hebrew name?",
        options: ["Shoshi", "Hadassah", "Breindel", "Mayim Bialik"],
        correctAnswer: "Hadassah",
    },
]};

//This function renders the quiz
function startQuiz() {
    console.log("function startQuiz ran.");
}

//This function builds the quiz HTML
function buildQuiz() {
    console.log("function buildQuiz ran.");
}

//This function listens for Submit button, compares to correct answer, tallies correct/incorrect
function submitAnswer() {
    console.log("function submitAnswer ran.");
}

//This function listens for the Next button, renders next question
function nextQuestion() {
    console.log("function nextQuestion ran.");
}

//This function builds the results page
function buildResults() {
    console.log("function buildResults ran.");

}

//This function listens for the Start-Over button, starts the Quiz over
function startOver() {
    console.log("function startOver ran.")
}

//This function renders the whole page
function renderPage() {
    startQuiz();
    submitAnswer();
    nextQuestion();
    startOver();
}

$(renderPage);