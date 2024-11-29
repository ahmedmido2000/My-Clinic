let iconHide = document.querySelectorAll(".icons-hide");
let inputsHideIcons = document.querySelectorAll(".inputsHideIcons");
// inputsHideIcons.forEach((show) => {
//   show.addEventListener("click", function () {
//     // show.previousElementSibling.style.display = "none";
//     show.placeholder = "";
//   });
// });
// inputsHideIcons.forEach((show) => {
//   show.addEventListener("mouseleave", function () {
//     show.previousElementSibling.style.display = "block";
//   });
// });
document.getElementById("togglepassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  });
  function togglePassword(e){
    const passwordField = e.parentElement.children[1]
    if (passwordField.type === "password") {
      passwordField.type = "text";
      e.children[0].classList.remove("fa-eye")
      e.children[0].classList.add("fa-eye-slash")
    } else {
      passwordField.type = "password";
      e.children[0].classList.remove("fa-eye-slash")
      e.children[0].classList.add("fa-eye")
    }
}