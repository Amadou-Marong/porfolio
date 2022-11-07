

let bars = document.getElementById("bars");
let times = document.getElementById("times");
let menu = document.getElementById("menu");

function openmenu(){
    menu.style.display = "block";
    bars.style.display = "none";
    times.style.display = "block";
}
function closemenu(){
    menu.style.display = "none";       
    times.style.display = "none";
    bars.style.display = "block";
}

