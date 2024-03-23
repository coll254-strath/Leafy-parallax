let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');


window.addEventListener("scroll",()=>{
    document.querySelector("#text").style.marginTop=window.scrollY * 2.5 + "px";
    document.querySelector("#leaf").style.top=window.scrollY *-1.5 + "px";
    document.querySelector("#leaf").style.left=window.scrollY *1.5 + "px";
    document.querySelector("#hill1").style.top=window.scrollY *1 + "px";
    document.querySelector("#hill4").style.left=window.scrollY *-1.5 + "px";
    document.querySelector("#hill5").style.left=window.scrollY *1.5+ "px";
 })