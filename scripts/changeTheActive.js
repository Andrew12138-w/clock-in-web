const tabButton=document.getElementsByClassName('tabButton')
function changeActive(){
    const activeSpot= document.getElementsByClassName('tabButton active')
    activeSpot[0].classList.remove('active')
    this.className+=' active'

}

console.log(activeSpot);
tabButton[0].onclick=changeActive()
tabButton[1].onclick=changeActive()
tabButton[2].onclick=changeActive()
