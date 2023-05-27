document.getElementById("click").addEventListener("click", function(){
            let hexVal = "#";
            let valArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
            for(let i=1; i<=6; i++){
                let index = Math.floor(Math.random() * 16)
                hexVal += valArr[index];
            }
            document.getElementById("val").innerHTML = hexVal
            document.body.style.backgroundColor = hexVal
            
        })