export let menu = document.getElementsByClassName("menu");
export let cart = document.getElementsByClassName("cart");
export let close = document.getElementsByClassName("fa-close");

export class Products {
  constructor() {
    this.showNav = this.showNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  cartEvents() {
    for (let i = 0; i < cart.length; i++) {
      cart[i].addEventListener("click", () => {
        this.showNav("items", cart[i], document.body);
      });
    }
  }

  menuEvent() {
    menu[0].addEventListener("click", () => {
      this.showNav("hidden-nav", menu, "cart-1");
    });
  }

  closeEvents() {
    close[0].addEventListener("click", () => {
      this.closeNav("items", cart[0], "cart-1");
    });

    close[1].addEventListener("click", () => {
      this.closeNav("hidden-nav", cart[1], "cart-2");
    });
  }

  showNav(navId, eventListener, backgroundImgId) {
    gsap.fromTo(`.${navId}`, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    document.getElementsByClassName(navId)[0].classList.remove("hidden");
  }

  closeNav(navId, eventListener, backgroundImgId) {
    gsap.fromTo(`.${navId}`, { opacity: 1 }, { opacity: 0, duration: 0.5 });
    setTimeout(function () {
      document.getElementsByClassName(navId)[0].classList.add("hidden");
    }, 300);
  }
}


let product1 = new Products;
product1.cartEvents();
product1.closeEvents();
product1.menuEvent();



let cartIcon = document.getElementsByClassName("cart-icon");
let numOfItemsInCart = document.getElementsByClassName("items-in-cart");


let price = document.getElementsByClassName("price");
let itemName = document.getElementsByClassName("item-name");
let quantity = document.getElementsByClassName("quantity");
let imgSrcArray = [], quantityArray = [], priceArray = [], itemNameArray = [];

let totalPrice = 0, totalItems = 0;
// Get all cookies
  let cookieArray = document.cookie.split(";");
  // Separate all values and exclude name
  for(let i=0; i<cookieArray.length; i++){
    cookieArray[i] = cookieArray[i].substring(cookieArray[i].indexOf("=")+1).split(",")
  }

  // assign each cookie to unique variable
  let[nameCookie, imageCookie, priceCookie, quantityCookie] = cookieArray;
  // create image with name, quantity and price
export function getBlogImages(){
  
  for(let i=0; i<nameCookie.length; i++){
    if(cookieArray.length > 1){
      createElement(imageCookie[i], priceCookie[i], nameCookie[i], quantityCookie[i]);
      totalItems += Number(quantityCookie[i])
      if(i === 0){
        totalPrice += Number(priceCookie[i].substring(1, 7)) * Number(quantityCookie[i]);
      } else {
        totalPrice += Number(priceCookie[i].substring(2, 7)) * Number(quantityCookie[i]);
        imgSrcArray.push(imageCookie[i]);
        priceArray.push(priceCookie[i]);
        itemNameArray.push(nameCookie[i]);
        quantityArray.push(quantityCookie[i]);
        console.log(imgSrcArray)
      }
    }
  }  
  
  numOfItemsInCart[0].innerHTML = totalItems;
  numOfItemsInCart[1].innerHTML = totalItems;
  document.getElementById("total-price").innerHTML = `$${totalPrice}`
  totalItems++;
  
}



export function getTotalItems(){
  if(cookieArray.length > 1){
    imgSrcArray = [...imageCookie];
    priceArray = [...priceCookie];
    itemNameArray = [...nameCookie];
    quantityArray = [...quantityCookie];
  }
  
  for(let i=0; i<cartIcon.length; i++){
    cartIcon[i].addEventListener("click", function(){
      for(let j=0; j<numOfItemsInCart.length; j++){
        numOfItemsInCart[j].innerHTML = totalItems;
      }
      
      if(imgSrcArray.includes(`img/product-${i+1}.jpeg`)){
        let index = imgSrcArray.indexOf(`img/product-${i+1}.jpeg`);
        quantity[index].innerHTML = Number(quantity[index].innerHTML) + 1
        quantityArray[index] = quantity[index].innerHTML;
        totalPrice += Number(price[i].innerHTML.substring(2, 7))
        document.getElementById("total-price").innerHTML = `$${totalPrice}`
        console.log(itemNameArray, priceArray, imgSrcArray, quantityArray)
        setCookie();
      } else {
        createElement(`img/product-${i+1}.jpeg`, price[i].innerHTML, itemName[i].innerHTML, 1)
        imgSrcArray.push(`img/product-${i+1}.jpeg`);
        priceArray.push(price[i].innerHTML);
        itemNameArray.push(itemName[i].innerHTML);
        totalPrice += Number(price[i].innerHTML.substring(2, 7))
        document.getElementById("total-price").innerHTML = `$${totalPrice}`
        quantityArray.push(1);
        console.log(itemNameArray, priceArray, imgSrcArray, quantityArray)
        setCookie();
      }
      ++totalItems;
    })
  }
}


getBlogImages();
getTotalItems();


function setCookie(){
        document.cookie = `name=${itemNameArray}; expires=Fri, 31 Dec 2123 12:00:00 UTC`
        document.cookie =  `image=${imgSrcArray}; expires=Fri, 31 Dec 2123 12:00:00 UTC`
        document.cookie = `price=${priceArray}; expires=Fri, 31 Dec 2123 12:00:00 UTC`
        document.cookie = `quantity=${quantityArray}; expires=Fri, 31 Dec 2123 12:00:00 UTC`
}
// document.cookie = "totalItems=0"


export function createElement(imgSrc, price, itemName, quantity){

 let sidebar = document.querySelectorAll(".sidebar");
  let ul = `<ul class="flex gap-4 mt-4 ml-4 imageUl">
      <li class="mr-5"><img src=${imgSrc} alt="Product 1" class="h-16 w-24 object-cover float-right rounded-md"></li>
      <li>
        <p class="tracking-wide w-56 -mt-[6px]"> ${itemName}  </p>
        <div class="flex flex-col items-center -mt-6 ml-52">
          <i class="text-[#ba5d2c] hover:cursor-pointer fa fa-angle-up mt-1"></i>
          <span class="num text-[16px] text-center quantity">${quantity}</span>
          <i class="text-[#ba5d2c] hover:cursor-pointer fa fa-angle-down"></i>
        </div>
        <p class="text-[12px] text-[#324d67] -mt-9"> ${price} </p>
        <p class="w-68 tracking-wider hover:cursor-pointer text-[#617d98] remove mt-1"> remove </p>
      </li>
  </ul>`;
  
  sidebar[0].lastElementChild.lastElementChild.insertAdjacentHTML("beforebegin", ul);
}

let remove = document.getElementsByClassName("remove");
let angleUp = document.getElementsByClassName("fa-angle-up")
let angleDown = document.getElementsByClassName("fa-angle-down")


for(let i=0; i<remove.length; i++){
  angleUp[i].addEventListener("click", function(){
      if(cookieArray.length > 1){
        imgSrcArray = [...imageCookie];
        priceArray = [...priceCookie];
        itemNameArray = [...nameCookie];
        quantityArray = [...quantityCookie];
      }
        console.log(quantityArray)
        numOfItemsInCart[0].innerHTML = Number(numOfItemsInCart[0].innerHTML) + 1
        numOfItemsInCart[1].innerHTML = Number(numOfItemsInCart[0].innerHTML) + 1
        quantity[i].innerHTML = Number(quantity[i].innerHTML) + 1
        quantityArray[i] = quantity[i].innerHTML;
        totalPrice += Number(priceArray[i].substring(2, 7))
        document.getElementById("total-price").innerHTML = `$${totalPrice}`
        setCookie();
  })
  angleDown[i].addEventListener("click", function(){
    if(cookieArray.length > 1){
      imgSrcArray = [...imageCookie];
      priceArray = [...priceCookie];
      itemNameArray = [...nameCookie];
      quantityArray = [...quantityCookie];
    }

      if(quantity[i].innerHTML !== '1'){
        numOfItemsInCart[0].innerHTML = Number(numOfItemsInCart[0].innerHTML) - 1
        numOfItemsInCart[1].innerHTML = Number(numOfItemsInCart[0].innerHTML) - 1
        quantity[i].innerHTML = Number(quantity[i].innerHTML) - 1
        quantityArray[i] = quantity[i].innerHTML;
        totalPrice -= Number(priceArray[i].substring(2, 7))
        document.getElementById("total-price").innerHTML = `$${totalPrice}`
        setCookie();
      }
        
  })
}



function iterate(){
    let length = remove.length;
    for(let i=0; i<length; i++){
      remove[i].addEventListener("click", function(){
      console.log(`I'm clicked with value ${i}`)
      let imageUl = document.getElementsByClassName("imageUl");
      imgSrcArray.splice(i, 1);
      itemNameArray.splice(i, 1);
      priceArray.splice(i, 1);
      quantityArray.splice(i, 1);
      setCookie();
      // location.reload();
      imageUl[i].style.display = "none";
      remove.length--;
    })
  }
}
iterate();
        // document.cookie = `name=1; expires=Sat, 06 May 2023 12:00:00 UTC`
        // document.cookie =  `image=2; expires=Sat, 06 May 2023 12:00:00 UTC`
        // document.cookie = `price=3; expires=Sat, 06 May 2023 12:00:00 UTC`
        // document.cookie = `quantity=4; expires=Sat, 06 May 2023 12:00:00 UTC`