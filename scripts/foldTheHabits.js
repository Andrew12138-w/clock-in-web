var foldBtn=document.getElementById('foldButton');
foldBtn.onclick=function(){
    const habits=document.getElementsByClassName("habits")
    habits[0].className+=' folded'
    this.className+=" folded"
}