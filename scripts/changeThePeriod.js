var lunchBreak=document.getElementById('lunchBreak');
var anyTime=document.getElementById('anyTime');
var all=document.getElementById('all')
const habits= document.getElementsByClassName('habit')
var theNumberOfHabits=document.getElementsByClassName('habit').length



lunchBreak.onclick=function(){
    function clearAll(){
        for(var i=0;i<theNumberOfHabits;i++){
            habits[i].className+=' hidden'
        }
    }
    clearAll();
    const lunchBreakHabits = document.getElementsByClassName('lunchBreakHabits')
    function clearHidden(){
        for(var i=0;i<lunchBreakHabits.length;i++){
            lunchBreakHabits[i].className="habit lunchBreakHabits"
            }
    }
    clearHidden();
    const focusSpot=document.getElementsByClassName('focusSpot');
    focusSpot[0].classList.remove("focusSpot")
    this.className+=' focusSpot'

}
anyTime.onclick=function(){
    function clearAll(){
        for(var i=0;i<theNumberOfHabits;i++){
            habits[i].className+=' hidden'
        }
    }
    clearAll();
    const anyTimeHabits = document.getElementsByClassName('anyTimeHabits')
    function clearHidden(){
        for(var i=0;i<anyTimeHabits.length;i++){
            anyTimeHabits[i].className="habit anyTimeHabits"
            }
    }
    clearHidden();
    const focusSpot=document.getElementsByClassName('focusSpot');
    focusSpot[0].classList.remove("focusSpot")
    this.className+=' focusSpot'

}
//找到所有有hidden类的元素
var anyHiddenHabits = document.getElementsByClassName('hidden')
console.log(anyHiddenHabits)
function clearHidden(){
    //清除其中每一个里的hidden类
    do{
        anyHiddenHabits[0].classList.remove("hidden") 
    }while(anyHiddenHabits.length!=0)
}
all.onclick=function(){
    
    clearHidden();
    //切换active状态的时段
    const focusSpot=document.getElementsByClassName('focusSpot');
    focusSpot[0].classList.remove("focusSpot")
    this.className+=' focusSpot'

}

