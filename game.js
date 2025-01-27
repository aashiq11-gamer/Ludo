let currentPlayer = 'User';
let userPosition = 0;
let botPosition = 0;
const boardSize = 9;  // Example board size for simplicity

document.getElementById('roll-dice').addEventListener('click', () => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice-result').innerText = `${currentPlayer} rolled a ${diceRoll}`;

  if (currentPlayer === 'User') {
    userPosition += diceRoll;
    userPosition = userPosition >= boardSize ? boardSize - 1 : userPosition;
    currentPlayer = 'Bot';
    updateBoard();
  } else {
    botMove();
    currentPlayer = 'User';
  }
});

function botMove() {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  botPosition += diceRoll;
  botPosition = botPosition >= boardSize ? boardSize - 1 : botPosition;
  updateBoard();
}

function updateBoard() {
  const board = document.getElementById('game-board');
  board.innerHTML = '';  // Clear previous board
  for (let i = 0; i < boardSize; i++) {
    const cell = document.createElement('div');
    if (i === userPosition) cell.innerText = 'User';
    if (i === botPosition) cell.innerText = 'Bot';
    board.appendChild(cell);
  }
}

// Ad redirection every 10 seconds
setInterval(() => {
  window.open('https://example.com', '_blank');
}, 10000);
