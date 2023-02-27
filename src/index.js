import "./styles.css";

var checkb = document.getElementById("toggle-btn");
var text = document.getElementById("para");
var back = document.getElementById("background");

checkb.addEventListener("click", function () {
  if (checkb.checked == 1) {
    text.style.color = "white";
    back.style.backgroundColor = "black";
  }
  if (checkb.checked == 0) {
    text.style.color = "black";
    back.style.background = "white";
  }
});
