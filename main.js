const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const fullscreenBtn = document.getElementById('fullscreen-btn');

// Simple block rendering for inspiration
function drawBlock(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 50, 50);
  ctx.strokeStyle = '#fff';
  ctx.strokeRect(x, y, 50, 50);
}

function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBlock(100, 100, '#0f0');
  drawBlock(200, 100, '#00f');
  drawBlock(300, 100, '#f00');
}

drawGame();

fullscreenBtn.onclick = () => {
  if (canvas.requestFullscreen) {
    canvas.requestFullscreen();
  } else if (canvas.webkitRequestFullscreen) {
    canvas.webkitRequestFullscreen();
  }
};

// Multiplayer logic will be added later
