let displayDiv = document.querySelector(".display-div");
const incrementBtn = document.querySelector(".increment-btn");
const decrementBtn = document.querySelector(".decrement-btn");
const resetBtn = document.querySelector(".reset-btn");

incrementBtn.addEventListener("click", () => {
  displayDiv.innerText++;
});

decrementBtn.addEventListener("click", () => {
  displayDiv.innerText--;
});

resetBtn.addEventListener("click", () => {
  displayDiv.innerText = 0;
});
