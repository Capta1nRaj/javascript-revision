// DOM Elements
const elements = {
    guessBtn: document.getElementById('guess-btn'),
    newGameBtn: document.getElementById('new-game-btn'),
    message: document.getElementById('message'),
    guessHistory: document.getElementById('guess-history'),
    userInput: document.getElementById('guess-input'),
    attempts: document.getElementById('attempts')
};

// Game State
const gameState = {
    randomNumber: generateRandomNumber(),
    previousGuesses: [],
    attemptsCount: 0
};

// Helper Functions
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function updateMessage(text, isSuccess = false) {
    elements.message.textContent = text;
    elements.message.style.color = 'white';
    elements.message.style.backgroundColor = isSuccess ? 'green' : 'red';
}

function updateGuessHistory(guess) {
    gameState.previousGuesses.push(guess);
    elements.guessHistory.innerHTML = gameState.previousGuesses
        .map(guess => `<div class="guess-item">${guess}</div>`)
        .join('');
}

function updateAttempts() {
    gameState.attemptsCount++;
    elements.attempts.textContent = gameState.attemptsCount;
}

function resetGame() {
    gameState.randomNumber = generateRandomNumber();
    gameState.previousGuesses = [];
    gameState.attemptsCount = 0;

    elements.message.textContent = '';
    elements.message.style.color = '';
    elements.message.style.backgroundColor = '';
    elements.guessHistory.innerHTML = '';
    elements.attempts.textContent = '0';
    elements.userInput.value = '';
}

function handleGuess() {
    const guess = parseInt(elements.userInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        updateMessage('Please enter a valid number between 1 and 100');
        return;
    }

    if (guess === gameState.randomNumber) {
        updateMessage('You guessed the correct number', true);
        return;
    }

    updateMessage(guess > gameState.randomNumber ? 'Too high!' : 'Too low!');
    updateGuessHistory(guess);
    updateAttempts();
    elements.userInput.value = '';
}

// Event Listeners
elements.guessBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleGuess();
});

elements.newGameBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetGame();
});

// Initialize game
resetGame(); 