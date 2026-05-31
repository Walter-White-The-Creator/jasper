"use strict";

let score = 0;
const scoreVak = document.getElementById("score");
const knoppen = document.querySelectorAll(".block-btn");

function spawnMunt(event) {
  score++;
  scoreVak.textContent = score;

  const rect = event.currentTarget.getBoundingClientRect();
  const munt = document.createElement("img");
  munt.src = "../media/coin.gif";
  munt.className = "coin";
  
  // Plaats munt in het midden boven de blok
  munt.style.left = (rect.left + rect.width / 2 - 25) + "px";
  munt.style.top = (rect.top - 60) + "px";
  
  document.body.appendChild(munt);

  setTimeout(() => munt.remove(), 600);
}

knoppen.forEach(knop => knop.addEventListener("click", spawnMunt));