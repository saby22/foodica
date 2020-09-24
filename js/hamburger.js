const burger = document.querySelector(".burger");


burger.addEventListener("click", function(e){
    // console.dir(burger);
    // burger.children[1].classList.toggle("line2-hide");
    // burger.children[0].classList.toggle("top-line");
    // burger.children[2].classList.toggle("bottom-line");
    burger.classList.toggle("open");

});