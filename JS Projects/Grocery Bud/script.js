let container = document.getElementsByClassName("container");
let submit = document.getElementById("submit");
let items = document.getElementById("items");
let clearItems = document.getElementById("clear-items");
let faPenToSquare = document.getElementsByClassName("fa-pen-to-square");
let faBin = document.getElementsByClassName("fa-trash");
let para = document.getElementsByTagName("p"); 
let hiddenContent = document.getElementById("hidden-content");

let arr = [];
for(let j=0; j<sessionStorage.length; j++){
    if(sessionStorage.length > 0){
        clearItems.style.display = "block"
        arr.push(sessionStorage.getItem(sessionStorage.key(j)));
        console.log(arr)
    }
    
    createElement(arr[j]);
}

submit.addEventListener("click", initialEvent);
function initialEvent(){
    hiddenContent.innerHTML = "Item Added to the List";
    hiddenContent.style.cssText = "background: lightgreen; display: block"
    setTimeout(function(){
        hiddenContent.style.display = "none"
        
    },1000);
    
    createElement(items.value);
    arr.push(items.value)
    
    if(arr.length > 0){
        clearItems.style.display = "block"
    }
    
}
let index;
for (let i=0; i<faPenToSquare.length; i++) {    
    faPenToSquare[i].addEventListener("click", function(){
        submit.innerHTML = "Edit";
        let key = sessionStorage.key(i);
        items.value = sessionStorage.getItem(key)
        index = i;
    })
}

items.addEventListener("change", edit);
function edit(){
    para[index + 1].innerHTML = items.value + '<i class="fa fa-pen-to-square"></i> <i class="fa fa-trash"></i>';
    arr[index] = items.value
    submit.innerHTML = "Submit"
    submit.removeEventListener("click", initialEvent);
    
    submit.addEventListener("click", function(){
        
        document.getElementById("hidden-content").style.cssText = "background-color: lightgreen; display: block;"
        document.getElementById("hidden-content").innerHTML = "Value Changed"
        
        setTimeout(function(){
            document.getElementById("hidden-content").style.display = "none"
            location.replace(location.href);
        }, 500)
    })
}


for(let i=0; i<faBin.length; i++){
    faBin[i].addEventListener("click", function(){
        let item = para[i+1].innerHTML.substring(0, para[i+1].innerHTML.indexOf("<"))
        arr.splice(arr.indexOf(item), 1);
        console.log(arr, i);
        let index = ++i;
        console.log(para[index].innerHTML)
        para[index].style.display = "none";    
        
        document.getElementById("hidden-content").style.cssText = "display: block;"
        document.getElementById("hidden-content").innerHTML = "Item Removed"
        setTimeout(function(){
            document.getElementById("hidden-content").style.display = "none"
            location.replace(location.href);
        }, 500)
    })
}

clearItems.addEventListener("click", function(){
    hiddenContent.innerHTML = "Empty List";
    hiddenContent.style.cssText = "display: block";
    setTimeout(function(){
        hiddenContent.style.display = "none"
        arr = [];
        location.reload();
    }, 500);
    sessionStorage.clear();
    
    arr = [];
    
    clearItems.style.display = "none"
})


window.addEventListener("beforeunload", function(){
    this.sessionStorage.clear();
    for(let i=0; i<arr.length; i++){
        this.sessionStorage.setItem(i, arr[i]);
    }
})

function createElement(text){
    let p = document.createElement("p")
    p.textContent = text;
    container[0].lastElementChild.previousElementSibling.appendChild(p);

    let i = document.createElement("i")
    i.setAttribute("class", "fa fa-pen-to-square");
    p.appendChild(i);

    i = document.createElement("i")
    i.setAttribute("class", "fa fa-trash");
    p.appendChild(i);
    container[0].style.height = (container[0].getBoundingClientRect().height + 50) + "px"   
}