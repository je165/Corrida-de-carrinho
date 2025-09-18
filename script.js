const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let car = { x: 180, y: 500, width: 40, height: 80, speed: 5 }; // Corrigido 'heigth' para 'height'
let obstacles = [];
let score = 0;
let gameOver = false;

// Desenha o carro
function drawCar() {
  ctx.fillStyle = "red";
  ctx.fillRect(car.x, car.y, car.width, car.height);
}

// Cria obstáculos
function createObstacle() {
  let x = Math.random() * (canvas.width - 40);
  obstacles.push({ x: x, y: -20, width: 40, height: 20, speed: 3 }); // Corrigido 'heigth' para 'height'
}

// Desenha os obstáculos
function drawObstacles() {
  ctx.fillStyle = "blue"; // Corrigido '=' ao invés de '-'
  obstacles.forEach(obstacle => {
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height); // Corrigido 'o' para 'obstacle'
  });
}

// Move os obstáculos
function moveObstacles() {
  obstacles.forEach(obstacle => { // Corrigido '0' para 'obstacle'
    obstacle.y += obstacle.speed;
    if (obstacle.y > canvas.height) { // Corrigido 'canvas.heigth' para 'canvas.height'
      obstacles.splice(obstacles.indexOf(obstacle), 1); // Corrigido 'index0f' para 'indexOf'
      score++;
      document.getElementById("score").innerText = score;
    }
  });
}

// Verifica colisão
function checkCollision() {
  obstacles.forEach(obstacle => { // Corrigido '0' para 'obstacle'
    if (
      car.x < obstacle.x + obstacle.width &&
      car.x + car.width > obstacle.x &&
      car.y < obstacle.y + obstacle.height && // Corrigido 'o.x + o.heigth' para 'o.y + o.height'
      car.height + car.y > obstacle.y
    ) {
      gameOver = true;
      alert("Game Over! Sua pontuação: " + score); // Corrigido 'socre' para 'score'
      document.location.reload();
    }
  });
}

// Atualiza o jogo
function update() {
  if (gameOver) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Corrigido 'canvas.heigth' para 'canvas.height'
  drawCar();
  drawObstacles();
  moveObstacles();
  checkCollision();
  requestAnimationFrame(update); // Corrigido 'requestAnimation' para 'requestAnimationFrame'
}

// Controle do carro
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && car.x > 0) car.x -= car.speed;
  if (e.key === "ArrowRight" && car.x < canvas.width - car.width)
    car.x += car.speed;
});

// Cria obstáculos de tempos em tempos
setInterval(createObstacle, 1500);

// Inicia o jogo
update();
