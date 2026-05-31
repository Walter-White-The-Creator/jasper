// ============================================
// Super Mario - app.js
// Klik op een blok -> munt verschijnt en valt weer weg.
// Je kan oneindig vaak klikken.
// ============================================
"use strict";

const blokInfo = [
  { naam: "Blok 1", punten: 1 },
  { naam: "Blok 2", punten: 1 },
  { naam: "Blok 3", punten: 1 }
];

let score = 0;

function spawnMunt(blokEl) {
  const stage = document.querySelector(".block-stage");
  if (!stage) return;

  const stageRect = stage.getBoundingClientRect();
  const blokRect = blokEl.getBoundingClientRect();
  const x = blokRect.left - stageRect.left + blokRect.width / 2;
  const y = blokRect.top - stageRect.top;

  const munt = document.createElement("img");
  munt.src = "../media/coin.png";
  munt.alt = "munt";
  munt.className = "coin";
  munt.style.left = x + "px";
  munt.style.top = y + "px";

  stage.appendChild(munt);

  munt.addEventListener("animationend", function () {
    munt.remove();
  });
}

function bounceBlok(blokEl) {
  blokEl.classList.remove("bounce");
  void blokEl.offsetWidth;
  blokEl.classList.add("bounce");
}

function blokGeklikt(event) {
  const knop = event.currentTarget;
  const index = Number(knop.dataset.index);
  const info = blokInfo[index];

  score += info.punten;
  const scoreEl = document.getElementById("score");
  if (scoreEl) scoreEl.textContent = String(score);

  spawnMunt(knop);
  bounceBlok(knop);
}

document.addEventListener("DOMContentLoaded", function () {
  const knoppen = document.querySelectorAll(".block-btn");
  knoppen.forEach(function (knop) {
    knop.addEventListener("click", blokGeklikt);
  });
});
