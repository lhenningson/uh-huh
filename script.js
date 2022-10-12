// Minecraft Fishing Simulator

// Variables
let steve = document.getElementById("steve-img");
let alex = document.getElementById("alex-img");
let fish = document.getElementById("fish-btn");
let imgres = document.getElementById("img-result");
let numcod = document.getElementById("num-cod");
let numsalm = document.getElementById("num-salmon");
let numtrop = document.getElementById("num-tropical");
let numpuff = document.getElementById("num-puffer");

// global variables
let character = "Steve"

// Event Listeners
steve.addEventListener("click", selectSteve);
alex.addEventListener("click", selectAlex);

function selectSteve() {
// update active border
steve.classList.add("active");
alex.classList.remove("active");
}
 
function selectAlex() {
   // update active border
   steve.classList.remove("active");
   alex.classList.add("active");
}