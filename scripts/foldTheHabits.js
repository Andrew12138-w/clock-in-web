let foldBtn=document.getElementById('foldButton');
foldBtn.onclick=function(){
    const habits=document.getElementsByClassName("habits")
    habits[0].className+=' folded'
    this.className+=" folded"
}
let foldedBtn=document.getElementById('foldButton folded');
foldedBtn.onclick=function(){
    const habits=document.getElementsByClassName("habits")
    habits[0].className+=' unfolded'
    habits[0].className-='folded'
    this.className+=" unfolded"
    this.className-='folded'
}