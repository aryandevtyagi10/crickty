let totalBalls = 0, ballsPlayed = 0, runs = 0, wickets = 2;
let maxBallValue = 6, player = "";
let runLog = [];

function startGame() {
  player = document.getElementById("playerName").value || "Player";
  const overs = parseInt(document.getElementById("overs").value);
  maxBallValue = parseInt(document.getElementById("difficulty").value);
  totalBalls = overs * 6;

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  document.getElementById("status").textContent = `${player}, you have ${wickets} wickets and ${totalBalls} balls. Good luck!`;
}

function playBall() {
  const input = document.getElementById("shotInput");
  let shot = parseInt(input.value);

  if (isNaN(shot) || shot < 0 || shot > 6) {
    alert("Enter a valid shot (0 to 6)");
    return;
  }

  const bowler = Math.floor(Math.random() * (maxBallValue + 1));
  ballsPlayed++;

  let result = "";
  if (shot === bowler) {
    wickets--;
    result = `Ball ${ballsPlayed}: OUT! You played ${shot}, bowler bowled ${bowler}`;
    runLog.push("WICKET");

    if (wickets === 0) return endGame("All wickets lost!");
  } else {
    runs += shot;
    runLog.push(shot);
    result = `Ball ${ballsPlayed}: You scored ${shot} run(s)`;
  }

  const log = document.getElementById("log");
  const li = document.createElement("li");
  li.textContent = result;
  log.appendChild(li);

  input.value = "";

  if (ballsPlayed === totalBalls || wickets === 0) {
    endGame("Innings Complete!");
  }
}

function endGame(message) {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("summary").classList.remove("hidden");

  const summaryText = `
    ${message}<br><br>
    Player: ${player}<br>
    Total Runs: ${runs}<br>
    Wickets Lost: ${2 - wickets}<br>
    Balls Played: ${ballsPlayed}<br>
    Ball-by-ball: ${runLog.join(", ")}
  `;

  document.getElementById("finalStats").innerHTML = summaryText;
}