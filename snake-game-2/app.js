// Constants and Variables

const gameBoard = document.querySelector("#game-board");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#score");
const resetBtn = document.querySelector("#reset-btn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
// console.log(gameHeight, gameWidth);
const boardBackground = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xValocity = unitSize;
let yValocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [{ x: 0, y: 0 }];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart() {
  running = true;
  scoreText.textContent = score;
  createFood();
  drawFood();
  nextTick();
}

function nextTick() {
  if (running) {
    setTimeout(() => {
      clearBoard();
      drawFood();
      moveSnake();
      drawSnake();
      checkGameOver();
      nextTick();
    }, 100);
  } else {
    displayGameOver();
  }
}

function clearBoard() {
  ctx.fillStyle = boardBackground;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
}

function createFood() {
  function randomFood(max, min) {
    const randNum =
      Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
    return randNum;
  }
  foodX = randomFood(0, gameWidth - unitSize);
  foodY = randomFood(0, gameWidth - unitSize);
  // console.log(foodX);
}

function drawFood() {
  ctx.fillStyle = foodColor;
  ctx.fillRect(foodX, foodY, unitSize, unitSize);
}

function moveSnake() {
  const head = {
    x: snake[0].x + xValocity,
    y: snake[0].y + yValocity,
  };

  snake.unshift(head);

  // If food is eaten
  if (snake[0].x == foodX && snake[0].y == foodY) {
    score++;
    scoreText.textContent = score;
    createFood();
  } else {
    snake.pop();
  }
}

function drawSnake() {
  ctx.fillStyle = snakeColor;
  ctx.strokeStyle = snakeBorder;
  snake.forEach((snakePart) => {
    ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
    ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
  });
}

function changeDirection(event) {
  const keyPressed = event.key;
  console.log(keyPressed);

  const goingUp = yValocity == -unitSize;
  const goingDown = yValocity == unitSize;
  const goingRight = xValocity == unitSize;
  const goingLeft = xValocity == -unitSize;

  switch (true) {
    case keyPressed == "ArrowUp" && !goingDown:
      xValocity = 0;
      yValocity = -unitSize;
      break;

    case keyPressed == "ArrowDown" && !goingUp:
      xValocity = 0;
      yValocity = unitSize;
      break;

    case keyPressed == "ArrowLeft" && !goingRight:
      xValocity = -unitSize;
      yValocity = 0;
      break;

    case keyPressed == "ArrowRight" && !goingLeft:
      xValocity = unitSize;
      yValocity = 0;
      break;
  }
}

function checkGameOver() {
  switch (true) {
    case snake[0].x < 0:
      running = false;
      break;
    case snake[0].x >= gameWidth:
      running = false;
      break;
    case snake[0].y < 0:
      running = false;
      break;
    case snake[0].x >= gameHeight:
      running = false;
      break;
  }

  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
      running = false;
    }
  }
}

function displayGameOver() {
  ctx.font = "50px MV Boli";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("Game Over", gameWidth / 2, gameHeight / 2);
  running = false;
}

function resetGame() {
  score = 0;
  xValocity = unitSize;
  yValocity = 0;
  snake = [{ x: 0, y: 0 }];
  gameStart();
}
