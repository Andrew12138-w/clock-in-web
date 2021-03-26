let foldBtn = document.getElementById("foldButton");
foldBtn.onclick = function () {
  const habits = document.getElementsByClassName("habits");
  habits[0].className += " folded";
  this.setAttribute("id", " ");
  this.className = "foldedStatusButton";
};
let foldedBtn = document.getElementsByClassName("foldedStatusButton");
foldedBtn.onclick = function () {
  const habits = document.getElementsByClassName("habits");
  habits[0].className += " unfolded";
  habits[0].className -= "folded";
  this.className = "unfoldedStatus";
};
console.log(foldedBtn);
