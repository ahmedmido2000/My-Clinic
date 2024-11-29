let countdown = 59;
let timerElement = document.getElementById("timer");
let sendCodeElement = document.getElementById("send-Code");
let interval = setInterval(function () {
  timerElement.textContent = "(" + countdown + ")";
  countdown--;
  if (countdown < 0) {
    clearInterval(interval);
    sendCodeElement.classList.add("sendcode-color");
    sendCodeElement.classList.add("cursor-hand");
    timerElement.textContent = "";
  }
}, 1000);

var inputs = document.querySelectorAll('.four-inputs-code input[type="text"]');
var nextButton = document.querySelector(".next-buttons a");

function checkInputs() {
  var allFilled = true;
  inputs.forEach(function (input) {
    if (input.value === "") {
      allFilled = false;
    }
  });

  if (allFilled) {
    nextButton.classList.add("green-button");
    nextButton.style.border = "2px solid #3db588 ";
  } else {
    nextButton.classList.remove("green-button");
    nextButton.style.border = "2px solid #F6F6F6 ";
  }
}
inputs.forEach(function (input) {
  input.addEventListener("input", function () {
    if (!/^\d$/.test(input.value)) {
      input.value = "";
    }
    checkInputs();
  });
});
checkInputs();
