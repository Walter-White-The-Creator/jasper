const luigiButton = document.querySelector('.button-with-icon.luigi');
if (luigiButton) {
  luigiButton.addEventListener('click', () => {
    location.href = 'https://jellie12.github.io/Project-Web-Dev-2026/';
  });
}

const playButton = document.querySelector('.center-area .button-with-icon');
if (playButton) {
  playButton.addEventListener('click', () => {
    location.href = 'html/game.html';
  });
}

const yosiButton = document.querySelector('.button-with-icon.yoshi');
if (yosiButton) {
  yosiButton.addEventListener('click', () => {
    location.href = 'https://6ssl.github.io/project1-BETA/index.html';
  });
}

function placeButtonsRandomly() {
  const buttons = document.querySelectorAll('.button-with-icon');
  const headerBottom = Math.max(
    ...Array.from(document.querySelectorAll('h1, p')).map((el) => el.getBoundingClientRect().bottom),
    0
  );
  const minY = Math.min(headerBottom + 20, window.innerHeight * 0.35);

  buttons.forEach((button) => {
    const rect = button.getBoundingClientRect();
    const maxX = Math.max(window.innerWidth - rect.width - 20, 20);
    const maxY = Math.max(window.innerHeight - rect.height - 20, minY + 20);
    const left = Math.floor(Math.random() * (maxX - 20 + 1)) + 20;
    const top = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    button.style.left = `${left}px`;
    button.style.top = `${top}px`;
  });
}

window.addEventListener('load', placeButtonsRandomly);
window.addEventListener('resize', placeButtonsRandomly);
