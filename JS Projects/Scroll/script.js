let nav = document.getElementById("navbar");
let faBars = document.getElementsByClassName("fa-bars");
let links = document.querySelectorAll("a");
let btn = document.getElementById("btn");


let mainHeight = document.getElementById("main").getBoundingClientRect().height;
btn.addEventListener("click", function(){
    let pos = mainHeight;
    if(window.innerWidth <= 794 && nav.classList.contains("sticky")){
        window.scrollTo({
            left: 0,
            top:  1624
        })
    } else {
        window.scrollTo({
            left: 0,
            top:  document.getElementById("t").offsetTop - mainHeight
        })
    }
})

window.addEventListener("resize", function(){
    if(this.window.innerWidth <= 794){
        document.getElementById("home").classList.add('active');    
        document.getElementById("about").classList.add('active');
        document.getElementById("services").classList.add('active');
        document.getElementById("tours").classList.add('active');
    } else {
        document.getElementById("home").classList.remove('active');    
        document.getElementById("about").classList.remove('active');
        document.getElementById("services").classList.remove('active');
        document.getElementById("tours").classList.remove('active');
    }

})

window.addEventListener("scroll", function(){
    console.log(window.scrollY)
    if(window.pageYOffset > 50){
        nav.classList.add("sticky");
        for(let i=0; i<links.length; i++){
            links[i].setAttribute('style', 'color: #102a42;');
        }
        faBars[0].setAttribute('style', 'color: #102a42;');
    } else {
        nav.classList.remove("sticky");
        for (let i = 0; i < links.length; i++) {
            links[i].setAttribute('style', 'color: white;')
        }
        faBars[0].setAttribute('style', 'color: white;');
    }
});

       
faBars[0].addEventListener("click", function(){
    document.getElementById("home").classList.toggle("active");
    document.getElementById("about").classList.toggle("active");
    document.getElementById("services").classList.toggle("active");
    document.getElementById("tours").classList.toggle("active");
})

links.forEach((link) => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        let target = e.currentTarget.getAttribute("href").slice(1);
        let section = document.getElementById(target);
        let navHeight = nav.getBoundingClientRect().height;
        let mainHeight = document.getElementById("main").getBoundingClientRect().height;
        let pos;
        if(nav.classList.contains("sticky")){
            pos = section.offsetTop - navHeight;
        } else {
            if(window.innerWidth <= 794 && !nav.classList.contains("sticky")){
                pos = section.offsetTop - navHeight - 325;
            } else {
                pos = section.offsetTop - mainHeight + 65;
            }
        }

        
        window.scrollTo({
            left: 0,
            top: pos
        })
    })
});
       