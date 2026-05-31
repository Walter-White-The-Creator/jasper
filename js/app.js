// ============================================
// Super Mario - app.js
// Auteur: Jasper - 5AD
// Bevat de logica voor de game-pagina.
// ============================================

"use strict";

// Datastructuur: object met instellingen per moeilijkheidsgraad
const moeilijkheidInstellingen = {
  easy:   { levens: 5, snelheid: "traag",   vijanden: 3 },
  medium: { levens: 3, snelheid: "normaal", vijanden: 6 },
  hard:   { levens: 1, snelheid: "snel",    vijanden: 10 }
};

// Datastructuur: array met mogelijke power-ups
const powerUps = ["Super Mushroom", "Fire Flower", "Star", "1-Up"];

// Functie: kies willekeurig element uit een array
function kiesWillekeurig(lijst) {
  const index = Math.floor(Math.random() * lijst.length);
  return lijst[index];
}

// Functie: bouw het bericht op basis van invoer
function bouwBericht(naam, personage, niveau, cheats) {
  if (naam.trim() === "") {
    return "Geef eerst een geldige naam in!";
  }

  const instellingen = moeilijkheidInstellingen[niveau];
  const powerUp = kiesWillekeurig(powerUps);

  let bericht = "Welkom, " + naam + "! Je speelt als " + personage + ".\n";
  bericht += "Moeilijkheid: " + niveau + " (" + instellingen.levens + " levens, ";
  bericht += instellingen.vijanden + " vijanden, snelheid: " + instellingen.snelheid + ").\n";
  bericht += "Je start met een power-up: " + powerUp + ".";

  if (cheats) {
    bericht += "\nCheats actief: oneindig levens ingeschakeld!";
  }

  return bericht;
}

// Functie: start het spel wanneer er op de knop wordt gedrukt
function startSpel() {
  const naam = document.getElementById("naam").value;
  const personage = document.getElementById("personage").value;
  const niveau = document.getElementById("moeilijkheid").value;
  const cheats = document.getElementById("cheats").checked;

  const output = document.getElementById("output");
  const bericht = bouwBericht(naam, personage, niveau, cheats);

  output.textContent = bericht;
}

// Koppel de knop aan de startSpel-functie wanneer de pagina geladen is
document.addEventListener("DOMContentLoaded", function () {
  const knop = document.getElementById("startBtn");
  if (knop) {
    knop.addEventListener("click", startSpel);
  }
});
