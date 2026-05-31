"use strict";

const blokInfo = [
  { naam: "Blok 1", punten: 1 },
  { naam: "Blok 2", punten: 1 },
  { naam: "Blok 3", punten: 1 },
  { naam: "Blok 4", punten: 1 }
];

let score = 0; // Houd de score bij

function spawnMunt(blokEl) {
  const stage = document.querySelector(".block-stage");
  if (!stage) return;

  const stageRect = stage.getBoundingClientRect();
  const blokRect = blokEl.getBoundingClientRect();
  
  // Bereken midden boven het blok
  const x = blokRect.left - stageRect.left + blokRect.width / 2;
  const y = blokRect.top - stageRect.top;

  const munt = document.createElement("img");
  munt.src = "../media/coin.gif"; // Gebruik de juiste gif
  munt.alt = "munt";
  munt.className = "coin";
  munt.style.left = x + "px";
  munt.style.top = y + "px";

  stage.appendChild(munt);

  // Verwijder munt na animatie
  munt.addEventListener("animationend", function () {
    munt.remove();
  });
}

function blokGeklikt(event) {
  score++;
  document.getElementById("score").textContent = score;
  spawnMunt(event.currentTarget);
}

// Voeg event listeners toe aan alle blokken
document.querySelectorAll(".block-btn").forEach(knop => {
  knop.addEventListener("click", blokGeklikt);
});