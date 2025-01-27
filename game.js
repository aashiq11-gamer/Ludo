let currentPlayer = 'User';
let userPosition = 0;
let botPosition = 0;
const boardSize = 56;  // Standard Ludo board size

// Set up Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 800 / 800, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('ludoCanvas') });
renderer.setSize(800, 800);

camera.position.z = 5;

const geometry = new THREE.BoxGeometry(1, 1, 1);
const materialUser = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const materialBot = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const userCube = new THREE.Mesh(geometry, materialUser);
const botCube = new THREE.Mesh(geometry, materialBot);
scene.add(userCube);
scene.add(botCube);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Function to update player positions
function updatePositions() {
  userCube.position.x = (userPosition % 7) - 3;
  userCube.position.y = Math.floor(userPosition / 7) - 3;
  botCube.position.x = (botPosition % 7) - 3;
  botCube.position.y = Math.floor(botPosition / 7) - 3;
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

// Ad redirection every 10 seconds
setInterval(() => {
  window.open('https://example.com', '_blank');
}, 10000);
