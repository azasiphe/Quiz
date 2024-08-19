function submitQuiz() {
    let score = 0;
    let totalQuestions = 3;
    
    let answers = {
        q1: "C",
        q2: "C",
        q3: "C"
    };
    
    for (let i = 1; i <= totalQuestions; i++) {
        let userAnswer = document.querySelector('input[name="q' + i + '"]:checked');
        if (userAnswer && userAnswer.value === answers['q' + i]) {
            score++;
        }
    }
    
    let result = document.getElementById('result');
    result.style.display = 'block';
    result.innerHTML = `You scored ${score} out of ${totalQuestions}!`;
    
    let continueBtn = document.getElementById('continue-btn');
    continueBtn.style.display = 'block';
}

function continueQuiz() {
    document.getElementById('web-dev-questions').style.display = 'block';
    document.getElementById('continue-btn').style.display = 'none';
}

function submitWebDevQuiz() {
    let score = 0;
    let totalQuestions = 3;
    
    let answers = {
        q4: "B",
        q5: "C",
        q6: "C"
    };
    
    for (let i = 4; i <= 6; i++) {
        let userAnswer = document.querySelector('input[name="q' + i + '"]:checked');
        if (userAnswer && userAnswer.value === answers['q' + i]) {
            score++;
        }
    }
    
    let result = document.getElementById('web-dev-result');
    result.style.display = 'block';
    result.innerHTML = `You scored ${score} out of ${totalQuestions} on the Web Development Quiz!`;
}
