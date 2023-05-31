const quizForm = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('#submit-btn');
const correctAns = ["90°", "right angled"];


submitBtn.addEventListener('click', () => {
    let score = 0; 
    let index = 0;
    const formResults = new FormData(quizForm);

    for (let value of formResults.values()) {
        if ( value === correctAns[index]) {
            score += 1;
        }
        index += 1;
    }
    outputBoxTriangleQuiz.innerText = "Your score: " + score;
})