// Correct answer for the quiz
const correctAnswer = "C";

// Function to check the selected answer
function checkAnswer() {
    const options = document.getElementsByName('answer');
    let selectedAnswer = '';

    // Find the selected answer
    for (const option of options) {
        if (option.checked) {
            selectedAnswer = option.value;
            break;
        }
    }

    // Get the result element
    const resultElement = document.getElementById('result');

    // Check if the answer is correct
    if (selectedAnswer === correctAnswer) {
        resultElement.innerText = 'Correct!';
        resultElement.style.color = 'green';
    } else {
        resultElement.innerText = 'Try again!';
        resultElement.style.color = 'red';
    }
}
