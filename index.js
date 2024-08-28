/* For Responsiveness */

let menulist = document.getElementById("menu-list");
menulist.style.maxHeight = "0px";
let head = document.getElementById("head");
head.style.display = "block";

function toggle() {
    if (menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = "700px";
        if(head.style.display = "block"){
            head.style.display = "none";
        }
    } else {
        menulist.style.maxHeight = "0px";
        head.style.display = "block";
    }
}

/* For Auto Typed */
var typed = new Typed('.auto-type',{
    strings : ["Frontend Developer","Backend Developer","FullStack Developer"],
    typeSpeed: 150,
    backSpeed: 150,
    looped : true
   })