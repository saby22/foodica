const emailNews = document.getElementById("email-news");
const form = document.querySelector("form");
const container = document.querySelector(".newsletter-container");
const content = document.querySelector(".newsletter-content");
const regem = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
;

form.addEventListener('submit',function(e){
    

    if(emailNews.value.trim() === ""){
        console.dir(content);
        // container.children[1].classList.remove("hidden");
        content.children[3].classList.remove("hidden");
        emailNews.focus()
        e.preventDefault();
    }

    else if(regem.test(emailNews.value) == false){
        content.children[4].classList.remove("hidden");
        emailNews.focus();
        e.preventDefault();
    }


});

emailNews.addEventListener('input',function(){
    content.children[3].classList.add("hidden");
});

emailNews.addEventListener('input',function(){
    content.children[4].classList.add("hidden");
});