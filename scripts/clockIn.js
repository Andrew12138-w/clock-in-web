const theIconOfHabit = document.getElementsByClassName("theIconOfHabit");

for (let i = 0; i < theIconOfHabit.length; i++) {
  theIconOfHabit[i].onclick = function () {
    if (theIconOfHabit[i].className == "theIconOfHabit unclockedIcon") {
      this.classList.remove("unclockedIcon");
      this.className += " clockedIcon";
    } else if (theIconOfHabit[i].className == "theIconOfHabit") {
      this.className += " clockedIcon";
    } else {
      this.classList.remove("clockedIcon");
      this.className += " unclockedIcon";
    }
  };
}
