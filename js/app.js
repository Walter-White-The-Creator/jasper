// ============================================
// Super Mario - app.js
// Klik op een blok -> munt verschijnt
// ============================================
"use strict";

let score = 0; // Houd de score bij
const scoreVak = document.getElementById("score"); // Referentie naar score element
const knoppen = document.querySelectorAll(".block-btn"); // Selecteer alle knoppen

// Functie om een munt te tonen
function spawnMunt(event) {
  score++; // 1. Verhoog score
  scoreVak.textContent = score; // 2. Update scherm

  const munt = document.createElement("img"); // 3. Maak element
  munt.src = "../media/coin.gif"; // 4. Bron toevoegen
  munt.className = "coin"; // 5. CSS klasse
  munt.style.left = event.pageX + "px"; // 6. Positie X
  munt.style.top = (event.pageY - 50) + "px"; // 7. Positie Y
  
  document.body.appendChild(munt); // 8. Voeg toe aan DOM

  setTimeout(() => munt.remove(), 1000); // 9. Verwijder na 1s
}

// 10. Voeg event listeners toe aan alle knoppen
knoppen.forEach(knop => knop.addEventListener("click", spawnMunt));