// Minecraft Fishing Simulator

// Variables
let steve = document.getElementById("steve-img");
let alex = document.getElementById("alex-img");
let fish = document.getElementById("fish btn");
let imgres = document.getElementById("img-result");
let numcod = document.getElementById("num-cod");
let numsalm = document.getElementById("num-salmon");
let numtrop = document.getElementById("num-tropical");
let numpuff = document.getElementById("num-puffer");

// global variables
let character = "Steve"
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Event Listeners
steve.addEventListener("click", selectSteve);
alex.addEventListener("click", selectAlex);
fish.addEventListener("click", fishOnce)

function selectSteve() {
// update active border
steve.classList.add("active");
alex.classList.remove("active");

   character = "Steve";
}
 
function selectAlex() {
   // update active border
   steve.classList.remove("active");
   alex.classList.add("active");

   character = "Alex";
}

function fishOnce() {
   if (character === "Steve") {
      let randNum = Math.random();
      if (randNum < 0.7) {
         numCod++;
         imgres.src = "img/Raw-Cod.png";
         numcod.innerHTML = numCod;
      } else if (randNum < 0.9) {
         numSalmon++;
         imgres.src = "img/Raw-Salmon.png"; 
         numsalm.innerHTML = numSalmon;
      } else if (randNum < 0.95 ) {
         numTropical++;
         imgres.src = "img/Tropical-Fish.png"; 
         numtrop.innerHTML = numTropical;
      } else {
         numPuffer++;
         imgres.src = "img/Pufferfish.png";
         numpuff.innerHTML = numPuffer;
      }
   } else {
      alert("Fish with Alex");
   }
}