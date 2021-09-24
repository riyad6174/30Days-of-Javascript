//variable declaration 
var tenspart=0;
var minspart=0;
var secspart=0;
var time;

//node declaration
var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var reset = document.querySelector(".reset");
var tenth = document.querySelector(".tens");
var minute = document.querySelector(".min");
var second = document.querySelector(".sec");
//add event listener
//new line added
start.addEventListener("click",()=>{
    clearInterval(time);
    time=setInterval(watchCounter,10);
});

stop.addEventListener("click",()=>{
clearInterval(time);
});
reset.addEventListener("click",()=>{
    clearInterval(time);
    tenspart=0;
    minspart=0;
    secspart=0;
    tenth.innerHTML="0"+tenspart;
    minute.innerHTML="0"+minspart;
    second.innerHTML="0"+secspart;
})
//event function

var watchCounter =function(){
    tenspart++;
    tenth.innerHTML=tenspart;
    if(tenspart<9){
        tenth.innerHTML="0"+tenspart;
    }
    if(tenspart>99){
        secspart++;
        second.innerHTML=secspart;
        if(secspart<9){
            second.innerHTML="0"+secspart;
    }
    tenspart=0;
    }
    if(secspart>59){
        minspart++;
        minute.innerHTML=minspart;
        if(minspart<9){
            minute.innerHTML="0"+minspart;
        }
        secspart=0;
    }
    
}
