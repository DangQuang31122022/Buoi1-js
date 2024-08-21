// script.js

"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // Khi không có input
  if (!guess) {
    displayMessage("⛔️ Không có số!");

    // Khi đoán đúng
  } else if (guess === secretNumber) {
    displayMessage("🎉 Chính xác!");
    document.querySelector(".number-display").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number-display").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore span").textContent = highscore;
    }

    // Khi đoán sai
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Quá cao!" : "📉 Quá thấp!");
      score--;
      document.querySelector(".score span").textContent = score;
    } else {
      displayMessage("💥 Bạn thua rồi!");
      document.querySelector(".score span").textContent = 0;
    }
  }
});

// Xử lý sự kiện click nút "Chơi lại!"
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Bắt đầu đoán...");
  document.querySelector(".score span").textContent = score;
  document.querySelector(".number-display").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#f0f0f0"; // Khôi phục màu nền ban đầu
  document.querySelector(".number-display").style.width = "15rem";
});
