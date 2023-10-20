const boxes = Array.from(document.querySelectorAll(".box"));

const spaces = [null, null, null, null, null, null, null, null, null];
const X_TEXT = "X";
const O_TEXT = "O";

let currentPlayer = X_TEXT;

const playText = document.querySelector("#play-text");

const restartGame = (e) => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  })
  boxes.forEach((box, index) => {
    box.innerText = "";
  })
  currentPlayer = X_TEXT;
  playText.innerText = `Let's Play!!!`
}

const restartBtn = document.querySelector("#restart-btn");
restartBtn.addEventListener("click", restartGame);

const drawBoard = () => {
  boxes.forEach((box, index) => {
    styleString = "";
    if (index < 3) {
      styleString += "border-bottom: 1px solid var(--purple);";
    }
    if (index > 5) {
      styleString += "border-top: 1px solid var(--purple);";
    }
    if (index % 3 === 0) {
      styleString += "border-right: 1px solid var(--purple);";
    }
    if (index % 3 === 2) {
      styleString += "border-left: 1px solid var(--purple);";
    }
    box.style = styleString;
    box.addEventListener("click", boxClicked);
  })
}

const boxClicked = (e) => {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    console.log(playerHasWon())
    if (playerHasWon()) {
      playText.innerText = `Player '${currentPlayer}' won !!!`;
      return;
    }

    currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
  }
}

const playerHasWon = () => {
  const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  return winningCombinations.some((combination) => {
    const [a, b, c] = combination;
    return spaces[a] === currentPlayer && spaces[b] === currentPlayer && spaces[c] === currentPlayer
  })
}

drawBoard();