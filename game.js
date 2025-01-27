let currentPlayer = 'User';
let userPosition = 0;
let botPosition = 0;
const boardSize = 56;  // Standard Ludo board size

// Set up Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 800 / 800, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('ludoCanvas') });
renderer.setSize(800, 800);

camera.position.z = 10;

const boardGeometry = new THREE.PlaneGeometry(10, 10);
const boardMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const board = new THREE.Mesh(boardGeometry, boardMaterial);
scene.add(board);

const tokenGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const userMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const botMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const userToken = new THREE.Mesh(tokenGeometry, userMaterial);
const botToken = new THREE.Mesh(tokenGeometry, botMaterial);
scene.add(userToken);
scene.add(botToken);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Function to update player positions
function updatePositions() {
  userToken.position.x = (userPosition % 7) - 3.5;
  userToken.position.y = Math.floor(userPosition / 7) - 3.5;
  botToken.position.x = (botPosition % 7) - 3.5;
  botToken.position.y = Math.floor(botPosition / 7) - 3.5;
}

// Roll Dice event
document.getElementById('rollDice').addEventListener('click', () => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  document.getElementById('diceResult').innerText = `${currentPlayer} rolled a ${diceRoll}`;

  if (currentPlayer === 'User') {
    userPosition += diceRoll;
    userPosition = userPosition >= boardSize ? boardSize - 1 : userPosition;
    currentPlayer = 'Bot';
  } else {
    botMove();
    currentPlayer = 'User';
  }
  updatePositions();
});

// Bot moves automatically
function botMove() {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  botPosition += diceRoll;
  botPosition = botPosition >= boardSize ? boardSize - 1 : botPosition;
  updatePositions();
}

// Ad redirection every 15 seconds
setInterval(() => {
  window.open('https://example.com', '_blank');
}, 15000);
