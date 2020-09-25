const regem = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
;

const name = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.getElementById("message");
const form = document.querySelector("form");

form.addEventListener('submit',function(e){
    if(name.value.trim() === ""){
        // console.dir(form);
        form.children[0].children[2].classList.remove("hidden");
        name.focus();
        e.preventDefault();
    }

    else if(email.value.trim() === ""){
        // console.dir(form);
        form.children[1].children[2].classList.remove("hidden");
        email.focus()
        e.preventDefault();
    }

    else if(regem.test(email.value) == false){
        form.children[1].children[3].classList.remove("hidden");
        email.focus();
        e.preventDefault();
    }

    else if(msg.value.trim() === ""){
        form.children[2].children[2].classList.remove("hidden");
        msg.focus();
        e.preventDefault();
    }

});

name.addEventListener('input',function(){
    form.children[0].children[2].classList.add("hidden");
});

email.addEventListener('input',function(){
    form.children[1].children[2].classList.add("hidden");
});

email.addEventListener('input',function(){
    form.children[1].children[3].classList.add("hidden");
});

msg.addEventListener('input',function(){
    form.children[2].children[2].classList.add("hidden");
});