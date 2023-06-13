import {cart, close, getTotalItems, Products, getBlogImages} from './script.js'

let product1 = new Products();

product1.closeEvents = function(){
    close[0].addEventListener("click", () => {
      this.closeNav("items", cart[0], "cart-1");
      gsap.to("#fix", {opacity: 1, duration: 1})
    });
}

product1.cartEvents = function() {
    for (let i = 0; i < cart.length; i++) {
      cart[i].addEventListener("click", () => {
        this.showNav("items", cart[i], document.body);
        gsap.to("#fix", {opacity: 0, duration: 1})
      });
    }
  }

  window.addEventListener("scroll", function(){
    if(this.window.scrollY > 245){
      this.document.getElementById("fix").classList.add("-bottom-12", "fixed")
    } else {
      this.document.getElementById("fix").classList.remove("top-0", "fixed")
    }
  })

product1.cartEvents();
product1.closeEvents();
product1.menuEvent();

let meter = document.getElementById("meter");
export let price = document.getElementsByClassName("price");
let pageImages = document.getElementsByTagName("figure");
let cartIcon = document.getElementsByClassName("cart-icon");
let numOfItemsInCart = document.getElementsByClassName("items-in-cart");

let numPrice = [];
for(let i=0; i<price.length; i++){
  numPrice.push(Number(price[i].innerHTML.substring(2, 7)))
}

let itemName = document.getElementsByClassName("item-name");

export let faSearch = document.getElementsByClassName("fa-search");
export function search(){
  for(let i=0; i<faSearch.length; i++){
    faSearch[i].addEventListener("click", function(){
      location.href = "product.html";
      sessionStorage.setItem("price", price[i].innerHTML)
      sessionStorage.setItem("itemName", itemName[i].innerHTML)
      sessionStorage.setItem("imageSrc", i+1);
      if(i===0 || i===10){
        sessionStorage.setItem("productBy", "ikea")
      } else if(i===1 || i===6 || i===8){
        sessionStorage.setItem("productBy", "marcos")
      } else if(i===2 || i===3 || i===4){
        sessionStorage.setItem("productBy", "caressa")
      } else if(i===5 || i===7 || i===9 || i===11){
        sessionStorage.setItem("productBy", "liddly")
      }
      
    })
  }
}
search();



document.getElementById("meter").addEventListener("input", function(){
  document.getElementById("meterVal").innerHTML = meter.value;
  for(let i=0; i<price.length; i++){
    if(numPrice[i] >= meter.value){
      pageImages[i].style.display = "none"
    } else {
      pageImages[i].style.display = "block"
    }
  }
})




displayParticularItems(document.getElementById("all"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
displayParticularItems(document.getElementById("ikea"), [0, 10]);
displayParticularItems(document.getElementById("marcos"), [1, 6, 8]);
displayParticularItems(document.getElementById("caressa"), [2, 3, 4]);
displayParticularItems(document.getElementById("liddly"), [5, 7, 9, 11]);

function displayParticularItems(eventListener, displayVariablesArray){  
  eventListener.addEventListener("click", function(){
    for(let i=0; i<12; i++){
      if(displayVariablesArray.includes(i))
        pageImages[i].style.display = "block"
      else 
        pageImages[i].style.display = "none"
    }
    
  })  
}    // end of displayParticularItems() 