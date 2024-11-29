let showHollab = document.getElementById("showHollab");
let showHollabButton = document.getElementById("showHollabButton");
let overlay = document.getElementById("overlay");
showHollabButton.addEventListener("click", () => {
  showHollab.style.display = "block";
  overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
  showHollab.style.display = "none";
  overlay.style.display = "none";
});
