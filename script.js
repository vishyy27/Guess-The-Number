let level = 1;
let attemptsUsed = 0;
let score = 0;
let streak = 0;
let maxAttempts = getAttempts(level);
let range = 50;
let secretNumber = Math.floor(Math.random() * range) + 1;

function getAttempts(level) {
  if (level <= 3) return 9;
  if (level <= 6) return 7;
  if (level <= 9) return 5;
  return 3;
}

function getDifficulty(level) {
  if (level <= 3) return { label: 'Easy', color: 'green' };
  if (level <= 6) return { label: 'Medium', color: 'orange' };
  if (level <= 9) return { label: 'Hard', color: 'red' };
  return { label: 'Perfectionist', color: 'purple' };
}

function updateUI() {
  document.getElementById('score').textContent = score;
  document.getElementById('level').textContent = level;
  document.getElementById('streak').textContent = streak;
  document.getElementById('attemptsUsed').textContent = attemptsUsed;
  document.getElementById('maxAttempts').textContent = maxAttempts;

  const percent = (attemptsUsed / maxAttempts) * 100;
  document.getElementById('progressBar').style.width = percent + '%';

  const { label, color } = getDifficulty(level);
  const diffLabel = document.getElementById('difficulty');
  diffLabel.textContent = label;
  diffLabel.style.backgroundColor = color;

  document.getElementById('instruction').textContent =
    `Level ${level}: Guess a number between 1 and ${range}`;
}

function makeGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > range) {
    showMessage("Enter a valid number between 1 and " + range, "#e67e22");
    return;
  }

  attemptsUsed++;
  updateUI();

  if (guess === secretNumber) {
    showMessage("Correct! You guessed it!", "#27ae60");
    score += 10;
    streak++;
    level++;
    confetti();
    setTimeout(resetGame, 1500);
  } else if (guess < secretNumber) {
    showMessage("Too low. Try again.", "#2980b9");
    streak = 0;
  } else {
    showMessage("Too high. Try again.", "#c0392b");
    streak = 0;
  }

  if (attemptsUsed >= maxAttempts && guess !== secretNumber) {
    showMessage("Out of attempts. Starting over.", "#8e0e0e");
    streak = 0;
    setTimeout(resetGame, 1500);
  }
}

function showMessage(text, color) {
  const message = document.getElementById('resultMessage');
  message.textContent = text;
  message.style.color = color;
  message.classList.add("show");
}

function resetGame() {
  range = 50 + (level - 1) * 25;
  maxAttempts = getAttempts(level);
  secretNumber = Math.floor(Math.random() * range) + 1;
  attemptsUsed = 0;
  document.getElementById('guessInput').value = '';
  updateUI();
  document.getElementById('resultMessage').classList.remove("show");
}

document.getElementById("guessInput").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    makeGuess();
  }
});

updateUI();
