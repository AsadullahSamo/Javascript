let play = document.getElementsByClassName("fa-play");
console.log(play);


let reset = document.getElementsByClassName("fa-redo");
console.log(reset);

let hour = document.getElementsByClassName("hour");
console.log(hour);

let mins = document.getElementsByClassName("mins");
console.log(mins);

let secs = document.getElementsByClassName("secs");
console.log(secs);



console.log(secs[0].innerHTML);

play[0].addEventListener("click", startTime);


function startTime(){
    
    let i = 0, j = 0, k = 0;
    setInterval(function(){
        i++;  
        if(i<=9){
            secs[0].innerHTML = "0" + i;
        } else if(i>=10 && i<60){
            secs[0].innerHTML = i;
        } else if(i>=60 ){
            j++;
            i = 0;
            secs[0].innerHTML = "00";
            mins[0].innerHTML = j;
        }

        if(j<=9){
            mins[0].innerHTML = "0" + j;
        } else if(j>=10 ){
            mins[0].innerHTML = j;
        } else if(j==60 ){
            j = 0;
            k++;
            hour[0].innerHTML = k;
        }

        if(k<=9){
            hour[0].innerHTML = "0" + k;
        } else if(k>=10 ){
            hour[0].innerHTML = k;
        } 
    }, 1000)            
}     // end of while loop


        
    
 