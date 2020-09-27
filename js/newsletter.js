const email-news = documentgetElementById("email-news");
const form = document.querySelector("form");
const regem = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
;

form.addEventListener('submit',function(e){
    

    if(email-news.value.trim() === ""){
        // console.dir(form);
        form.children[1].children[2].classList.remove("hidden");
        email.focus()
        e.preventDefault();
    }

    else if(regem.test(email-news.value) == false){
        form.children[1].children[3].classList.remove("hidden");
        email.focus();
        e.preventDefault();
    }


});