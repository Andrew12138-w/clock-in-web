const foldBtn = document.getElementsByClassName("foldButton");
const habits = document.getElementsByClassName("habits");
for (let i = 0; i < foldBtn.length; i++) {
  foldBtn[i].onclick = function () {
    if (foldBtn[i].className == "foldButton unfoldedStatusButton") {
      habits[i].classList.remove("unfolded");
      habits[i].className += " folded";
      this.className = "foldButton foldedStatusButton";
    } else if (foldBtn[i].className == "foldButton") {
      habits[i].className += " folded";
      this.className = "foldButton foldedStatusButton";
    } else {
      habits[i].classList.remove("folded");
      habits[i].className += " unfolded";
      this.className = "foldButton unfoldedStatusButton";
    }
  };
}
