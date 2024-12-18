const inputArea = document.querySelector("#game-input");
const guessBtn = document.querySelector(".guess-btn");
const userGuess = document.querySelector(".user-guess");
let randomNum = Math.floor(Math.random() * 100 + 1);


guessBtn.addEventListener('click', () => {
  let playerGuess = inputArea.value
  console.log(playerGuess);
  generateNumber();
});


function generateNumber() {
  let playerGuess = inputArea.value

  if (playerGuess == randomNum) {
    alert(`Congratulations !! You guess the correct Number ${randomNum}`);
  } else if (playerGuess > randomNum) {
    alert("Too High");
  } else {
    alert("Too Low");
  }

  inputArea.value = "";
}
