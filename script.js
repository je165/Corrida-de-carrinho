const  canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let car = { x: 180, y: 500, width: 40, heigth: 80, speed: 5};
let obstacles = [];
let score = 0;
let gameOver = false;

// desenha carro
fuction drawCar () [
  ctx.fillStyle = "red";
ctx.fillRect(car.x, car.y, car.width, car.height);
}

// cria obstáculos
fuction createObstacle() {
let x = Math.random() * (canvas.width - 40);
  obstacles.push({ x: x, y: -20, width: 40, heigth: 20, speed: 3});
}

// desenha obstáculos
fuction drawObstacles() {
ctx.fillStyle -"blue";
  obstacles.forEach(0 => ctx.fillRect(o.x, o.y, o.width, o.heigth));
}

// move obstáculos
fuction moveObstacles() {
obstacles.forEach(0 => {
  o.y += o.speed;
  if (o.y > canvas.heigth) {
    obstacles.splice(obstacles.index0f(o), 1);
    score++;
    document.getElementById("score").innerText = score;
  }
});
}

// colisão
function checkCollision() {
  obstacles.forEach(0 => {
    if (
      car.x < o.x + o.width &&
      car.x + car.width > o.x &&
      car.y < o.x + o.heigth &&
      car.heigth + car.y > o.y
      ) {
      gameOver = true;
      alert("Game Over! Sua pontuação: " + socre);
      document.location.reload();
    }
  });
}

// atualizar jogo
fuction update() {
if (gameOver) return;
  ctx.clearRect(0, 0, canvas.width, canvas.heigth);
drawCar();
  drawObstacles();
  moveObstacles();
  checkCollision();
  requestAnimation(update);
}

// controle de  carro
document.addEventListener("keydown",(e) => {
  if (e.key === "ArrowLeft" && car.x > 0) car.x -= car.speed;
  if (e.key === "ArrowRight" && car.x < canvas.width - car.width)
    car.x += car.speed;
});

//cria obstáculos de tempos em tempos
setInterval(createObstacle, 1500);

// inicia
update();
