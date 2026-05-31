// Datastructuur: object met score en lijst van verzamelde blokken
const spel = {
  score: 0,
  verzameld: []
};

// Functie: munt tonen bij klik op vraagtekenblok
function toonCoin(knop, blokId) {
  const coin = knop.parentElement.querySelector('.coin');

  // Controlestructuur: blok al gebruikt?
  if (spel.verzameld.includes(blokId)) {
    return;
  }

  coin.classList.remove('spring');
  void coin.offsetWidth;
  coin.classList.add('spring');

  knop.disabled = true;
  spel.verzameld.push(blokId);
  spel.score++;
  document.getElementById('score').textContent = 'Coins: ' + spel.score;
}

// Functie: spel resetten via resetknop
function resetSpel() {
  spel.score = 0;
  spel.verzameld = [];

  document.getElementById('score').textContent = 'Coins: 0';
  document.querySelectorAll('.knop').forEach(function (knop) {
    knop.disabled = false;
  });
  document.querySelectorAll('.coin').forEach(function (coin) {
    coin.classList.remove('spring');
  });
}

// Functie: formulier verwerken (spelersnaam tonen)
function startSpel(event) {
  event.preventDefault();

  const naam = document.getElementById('spelersnaam').value.trim();
  const welkom = document.getElementById('welkom-tekst');

  // Controlestructuur: naam ingevuld?
  if (naam.length > 0) {
    welkom.textContent = 'Welkom, ' + naam + '! Klik op de vraagtekenblokken.';
  } else {
    welkom.textContent = 'Klik op de vraagtekenblokken om munten te verzamelen.';
  }
}
