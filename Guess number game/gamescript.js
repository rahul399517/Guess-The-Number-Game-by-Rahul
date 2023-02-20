const secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector("#check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".inputnumber").value);
  if (!guess) {
    document.querySelector("#startguessing").textContent = "No Number";
  } else if (guess === secretnumber) {
    document.querySelector("#startguessing").textContent = "Correct";
    document.querySelector("#startguessing").style.color = "green";
    document.querySelector("#win").style.display = "grid";
    document.querySelector("#img1").style.display = "none";
    document.querySelector("#toohigh").style.display = "none";
    document.querySelector("#toolow").style.display = "none";
    document.querySelector(".secretnumber").style.display = "grid";
    document.querySelector("#text").style.display = "none";
    document.querySelector("#secretnumber").textContent = secretnumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector("#highscorevalue").textContent = highscore;
    }
  } else if (guess > secretnumber) {
    document.querySelector("#startguessing").textContent = "Too High";
    document.querySelector("#startguessing").style.color = "Red";
    document.querySelector("#toohigh").style.display = "grid";
    document.querySelector("#img1").style.display = "none";
    document.querySelector("#toolow").style.display = "none";
    score = score - 1;
    document.querySelector("#scorevalue").textContent = score;
  } else if (guess < secretnumber) {
    document.querySelector("#startguessing").textContent = "Too Low";
    document.querySelector("#startguessing").style.color = "Red";
    document.querySelector("#toolow").style.display = "grid";
    document.querySelector("#img1").style.display = "none";
    document.querySelector("#toohigh").style.display = "none";
    score = score - 1;
    document.querySelector("#scorevalue").textContent = score;
  } else if (score === 0) {
    document.querySelector("#startguessing").textContent = "You Loose";
    document.querySelector("#startguessing").style.color = "Red";
    document.querySelector("#toolow").style.display = "none";
    document.querySelector("#img1").style.display = "none";
    document.querySelector("#toohigh").style.display = "none";
    document.querySelector(".secretnumber").style.display = "grid";
    document.querySelector("#lose").style.display = "grid";
  }
});
document.querySelector("#playagain").addEventListener("click", function () {
  document.querySelector("#startguessing").textContent = "Start Guessing...";
  document.querySelector("#startguessing").style.color = "black";
  document.querySelector("#win").style.display = "none";
  document.querySelector("#img1").style.display = "grid";
  document.querySelector("#toohigh").style.display = "none";
  document.querySelector("#toolow").style.display = "none";
  document.querySelector(".secretnumber").style.display = "none";
  document.querySelector("#text").style.display = "none";
  document.querySelector("#questionmark").style.display = "grid";
});
