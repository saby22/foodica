const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-links");
const body = document.querySelector("body");
const mobileOverlay = document.querySelector(".burger-mobile-overlay");

burger.addEventListener("click", function(e){
    burger.classList.toggle("open");

    if(burger.classList.contains("open") && burger.style.display !== "none"){
        burgerMenu.classList.add("burger-on");
        body.style.overflow = "hidden";
        mobileOverlay.classList.add("active");
    }
    else{
        burgerMenu.classList.remove("burger-on");
        body.style.overflow = "visible";
        mobileOverlay.classList.remove("active");
    }
});

window.addEventListener("resize",function(){

    if(window.innerWidth > 810){
        if(burger.classList.contains("open")){
            burger.classList.remove("open");
        }
        if(burgerMenu.classList.contains("burger-on")){
            burgerMenu.classList.remove("burger-on");
        }
        if(body.style.overflow === "hidden"){
            body.style.overflow = "visible";
        }
        if(mobileOverlay.classList.contains("active")){
            mobileOverlay.classList.remove("active");
        }
    }
});