//Display Divs
const input_handler = document.getElementById("input-handler");
const timer_display = document.getElementById("timer-display");
//Buttons
const strt_btn = document.getElementById("start-button");
//input Boxes
let inputH = document.getElementById("hours-box"); let inputM = document.getElementById("min-box");
let inputS = document.getElementById("sec-box");


//time
let timep = document.getElementById("time");
let spanH = document.getElementById("spanH");
let spanM = document.getElementById("spanM");
let sapnS = document.getElementById("spanS");
let inH,inM,inS;

// Interval
let interval;

//sound
let sound=document.getElementById("sound");

// functions

function start_timer() {
    inH = parseInt(inputH.value);
    inM = parseInt(inputM.value);
    inS = parseInt(inputS.value);
    if(inH>9 || inH<0){
        alert("Hours Should be in 0 to 9.");
    }
    if(inM>59 || inM<0){
        alert("Minutes Should be in 0 to 59.");
    }
    if(inS>59 || inS<0){
        alert("Seconds Should be in 0 to 59.");
    }
    if(inS<=0 && inM<=0 && inH<=0){
        alert("Fill Right Values.")
    }
    else {
        if(inH<=9 && inH>=0 && inM<=59 && inM>=0 && inS<=59 && inS>=0){
            input_handler.style.display="none";
            timer_display.style.display="flex";
            spanH.innerHTML= inH;
            if(inM<=9){
                spanM.innerHTML= "0"+inM;
            }else{
                spanM.innerHTML= inM;
            }
            if(inS<=9){
                spanS.innerHTML= "0"+inS;
            }else{
                spanS.innerHTML= inS;
            }        
            interval= setInterval(timer_down,1000);
        }
    }
        
}
function timer_down() {
    inS=inS-1;
    spanH.innerHTML= inH;
    if(inM<=9){
        spanM.innerHTML= "0"+inM;
    }else{
        spanM.innerHTML= inM;
    }
    if(inS<=9){
        spanS.innerHTML= "0"+inS;
    }else{
        spanS.innerHTML= inS;
    }
    if(inS<0){
        inS=59;
        inM = inM-1;
        spanH.innerHTML= inH;
        if(inM<=9){
            spanM.innerHTML= "0"+inM;
        }else{
            spanM.innerHTML= inM;
        }
        if(inS<=9){
            spanS.innerHTML= "0"+inS;
        }else{
            spanS.innerHTML= inS;
        }
    }
    if(inM<0){
        inM = 59;
        inH = inH-1;
        spanH.innerHTML= inH;
        if(inM<=9){
            spanM.innerHTML= "0"+inM;
        }else{
            spanM.innerHTML= inM;
        }
        if(inS<=9){
            spanS.innerHTML= "0"+inS;
        }else{
            spanS.innerHTML= inS;
        }
    }
    if(inH<=0 && inM<=0 && inS<=0){
        timesUp();
    }
}
const timesUp =() => {
    intH = 0;
    intM = 0;
    intS = 0;
    spanH.innerHTML= inH;
    if(inM<=9){
        spanM.innerHTML= "0"+inM;
    }else{
        spanM.innerHTML= inM;
    }
    if(inS<=9){
        spanS.innerHTML= "0"+inS;
    }else{
        spanS.innerHTML= inS;
    }
    clearInterval(interval);
    sound.play();
}



// Event listners
strt_btn.addEventListener("click",start_timer);
