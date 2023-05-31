let headingsArray = ["History", "Vision", "Goals"]
let paraArray = ["I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."
                ,"Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.<br><br>list item<br>list item<br>list item"
                ,"Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones."];

let list = document.querySelectorAll("ul li");
let container = document.getElementsByClassName("container");

let headings = document.getElementsByClassName("headings");

let heading = document.getElementById("heading");                
let para = document.getElementById("para");

for(let i=0; i<headings.length; i++){
    
    headings[i].addEventListener("click", () => {
        let j = i;
        for(let k =0; k<headings.length; k++){
            if(k === j){
                list[k].classList.add("active")
            } else {
                list[k].classList.add("bgGray")
                list[k].classList.remove("active")
            }
        }
        heading.innerHTML = headingsArray[i];
        para.innerHTML = paraArray[i];
        let totalHeight = para.getBoundingClientRect().height + heading.getBoundingClientRect().height + list[0].getBoundingClientRect().height;
        container[0].style.height = `${totalHeight+20}px`;
        
        
    })
    
}