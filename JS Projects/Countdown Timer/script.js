let days = document.getElementById("days");
let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

let date = new Date();
date.setDate(date.getDate() + 10);
date = String(date);
let arrayOfDate = date.split(" ");

let timeLine = `${arrayOfDate[0]}, ${arrayOfDate[2]} ${arrayOfDate[1]} ${arrayOfDate[3]}`;
document.getElementById("timeline").innerHTML = timeLine;
// console.log(timeLine)


let hours = 23 - new Date().getHours();
hrs.innerHTML = (hours < 10) ? `0${hours}` : hours;
let minutes = 59 - new Date().getMinutes();
mins.innerHTML = (minutes < 10) ? `0${minutes}` : minutes;
let seconds = 59 - new Date().getSeconds() + 1;
secs.innerHTML = (seconds < 10) ? `0${seconds}` : seconds;


let t = setInterval(function(){
        secs.innerHTML -= 1;
        secs.innerHTML = (secs.innerHTML < 10) ? `0${secs.innerHTML}` : secs.innerHTML;
        if(secs.innerHTML == 0){
            secs.innerHTML = 59;
            mins.innerHTML -= 1;
            mins.innerHTML = (mins.innerHTML < 10) ? `0${mins.innerHTML}` : mins.innerHTML;
            if(mins.innerHTML == -1){
                mins.innerHTML = 59;
                hrs.innerHTML -= 1;
                hrs.innerHTML = (hrs.innerHTML < 10) ? `0${hrs.innerHTML}` : hrs.innerHTML;
                if(hrs.innerHTML == -1){
                    days.innerHTML = 09;
                    hrs.innerHTML = 23;
                    mins.innerHTML = 59;
                    secs.innerHTML = 59;
                }
            }
        }        
}, 1000);

if(days.innerHTML == 0){
    clearInterval(t)
}