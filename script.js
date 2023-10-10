// const preloader = document.querySelector('#login-div');

// const fadeEffect = setInterval(() => {
//   if (!preloader.style.opacity) {
//     preloader.style.opacity = 0;
//   }
//   if (preloader.style.opacity > 1) {
//     preloader.style.opacity -= 0.1;
//   } else {
//     clearInterval(fadeEffect);
//   }
// }, 200);

// window.addEventListener('load', fadeEffect);

let hic = 1;
let ld = document.getElementById("login-div")
let ld2 = document.getElementById("login-div2")
let ld3 = document.getElementById("login-div3")
let ld4 = document.getElementById("login-div4")
let hi = document.getElementById("hello");
let hi2 = document.getElementById("hello2")
let hi3 = document.getElementById("hello3")
let hi4 = document.getElementById("hello4")
let input = document.getElementById("hello5")
let loader = document.getElementById("lds-roller")


hi2.addEventListener("click", function(){
    if(hic == 1){
        hic = 0;
        ld.style.transition = "transform 0.5s"
        ld.style.position = "fixed"
        ld.style.transform = "scale(0)"
        ld2.style.transition = "transform 5s"
        ld2.style.position = "fixed"
        ld2.style.transform = "scale(1)"
        loader.style.display = "inline-block"
        hic = 8

    } else {
        hic = 8;
    }
})



let hit = 1;
hi3.addEventListener("click", function(){
    if(hit == 1){
        ld2.style.transition = "transform 0.5s"
        ld2.style.position = "fixed"
        ld2.style.transform = "scale(0)"
        ld3.style.transition = "transform 5s"
        ld3.style.position = "fixed"
        ld3.style.transform = "scale(1)"
        loader.style.display = "inline-block"
        hit = 8;

    } else {
        hit = 8;
    }
})
let hiv = 1;

hi4.addEventListener("click", function(){
    if(hiv == 1){
        ld3.style.transition = "transform 0.5s"
        ld3.style.position = "fixed"
        ld3.style.transform = "scale(0)"
        ld4.style.transition = "transform 5s"
        ld4.style.position = "fixed"
        ld4.style.transform = "scale(1)"
        loader.style.display = "inline-block"
        hiv = 8;

    } else {
        hit = 8;
    }
})


let send = document.getElementById("sok")

let cl = 1;
function du(){
    if(input.value == "Նազարյան"){
        send.style.transition = "background 0.3s"
        send.style.background = "rgb(0, 182, 0)"
    }
    else if(input.value == "Nazaryan"){
        send.style.transition = "background 0.3s"
        send.style.background = "rgb(0, 182, 0)"
    }
    else if(input.value == "nazaryan"){
        send.style.transition = "background 0.3s"
        send.style.background = "rgb(0, 182, 0)"
    }
    else if(input.value == "նազարյան"){
        send.style.transition = "background 0.3s"
        send.style.background = "rgb(0, 182, 0)"
    }
    else{
        send.style.transition = "background 0.3s"
        send.style.background = "rgb(153, 153, 153)"
    }

}
let sok = document.getElementById("sok")


function o1(){
    ld.style.transition = "transform 0.5s"
    ld.style.position = "fixed"
    ld.style.transform = "scale(0)"
    ld2.style.transition = "transform 5s"
    ld2.style.position = "fixed"
    ld2.style.transform = "scale(1)"
    loader.style.display = "inline-block"
}

function o2(){
    ld2.style.transition = "transform 0.5s"
    ld2.style.position = "fixed"
    ld2.style.transform = "scale(0)"
    ld3.style.transition = "transform 5s"
    ld3.style.position = "fixed"
    ld3.style.transform = "scale(1)"
    loader.style.display = "inline-block"
}


let ans = document.getElementById("answered1")

function ad(){
    if(input.value == "Նազարյան"){
        sok.href = "Home.html"
    }
    else if(input.value == "Nazaryan"){
        sok.href = "Home.html"
    }
    else if(input.value == "nazaryan"){
        sok.href = "Home.html"
    }
    else if(input.value == "նազարյան"){
        sok.href = "Home.html"
    }
    else{
        sok.href = "index.html"
    }
}