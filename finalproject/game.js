// List of clues and their correct answers
const foodClues = [
  { clue: "I'm green, creamy, and great on toast.", answer: "avocado" },
  { clue: "I'm yellow, peeled before eaten, and monkeys love me.", answer: "banana" },
  { clue: "I'm long, white, and often served with stir-fry.", answer: "rice" },
  { clue: "I'm round, red, and often made into ketchup.", answer: "tomato" },
  { clue: "I'm cold, sweet, and come in many flavors. You lick me!", answer: "ice cream" }
];

let currentIndex = 0;

function showClue() {
  const clueElement = document.getElementById("clue");
  clueElement.textContent = foodClues[currentIndex].clue;
}

function checkGuess() {
  const input = document.getElementById("guessInput");
  const userGuess = input.value.trim().toLowerCase();
  const correctAnswer = foodClues[currentIndex].answer.toLowerCase();
  const feedbackElement = document.getElementById("feedback");

  if (userGuess === correctAnswer) {
    feedbackElement.textContent = "🍽️ Yum! You got it!";
    feedbackElement.style.color = "green";

    currentIndex++;
    if (currentIndex < foodClues.length) {
      setTimeout(() => {
        input.value = "";
        feedbackElement.textContent = "";
        showClue();
        input.focus();
      }, 1500);
    } else {
      feedbackElement.textContent = "🎉 You guessed all the foods!";
    }
  } else {
    feedbackElement.textContent = "❌ Try again!";
    feedbackElement.style.color = "red";
  }
}

// Show the first clue when the page loads
window.onload = () => {
  showClue();

  // Attach event listeners
  document.getElementById("submitGuess").addEventListener("click", checkGuess);
  document.getElementById("guessInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkGuess();
    }
  });
};
