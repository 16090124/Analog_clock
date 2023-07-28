setInterval(clock,1000)

const handSecond= document.querySelector(".second");
const handMinute= document.querySelector(".minute");
const handHour= document.querySelector(".hours");

function clock(){
   const date= new Date();
   const seconds= date.getSeconds()/60;
   const minutes= (seconds+ date.getMinutes())/60;
   const hours= (minutes+ date.getHours())/12;

   rotate(handSecond,seconds)
   rotate(handMinute,minutes)
   rotate(handHour,hours)
}

function rotate(hand,angle){
    hand.style.setProperty("--rotated",angle*360);
}
// clock()