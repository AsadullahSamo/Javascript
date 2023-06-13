document.getElementsByClassName("nameOfItem")[0].innerHTML = sessionStorage.getItem("itemName")
document.getElementById("price").innerHTML = sessionStorage.getItem("price")
document.getElementsByClassName("name")[0].innerHTML = `BY ${sessionStorage.getItem("productBy").toUpperCase()}`
document.getElementsByClassName("image")[0].src = `img/product-${sessionStorage.getItem("imageSrc")}.jpeg`
