

function displayMessage(isCorrect) {
    const surdsFeedback = document.getElementById('surds_1_feedback');
    if (isCorrect) {
        surdsFeedback.style.color = 'green';
        surdsFeedback.textContent = 'That is Correct!';
        
    } else {
        surdsFeedback.style.color = 'red';
        surdsFeedback.textContent = 'That is not quite right!';
    }
}

// Add event listeners to the buttons
document.getElementById('option_a').addEventListener('click', () => displayMessage(false));
document.getElementById('option_b').addEventListener('click', () => displayMessage(true));
document.getElementById('option_c').addEventListener('click', () => displayMessage(false));
document.getElementById('option_d').addEventListener('click', () => displayMessage(false));