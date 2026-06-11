const backButton = document.querySelector('.back-button');
if (backButton) {
  backButton.addEventListener('click', () => {
    window.location.href = '../index.html';
  });
}

const scoreEl = document.getElementById('score');
const clickerBtn = document.getElementById('clicker');
let score = 0;

function updateScoreDisplay() {
  scoreEl.textContent = 'Score: ' + score;
}


if (clickerBtn) {
  clickerBtn.addEventListener('click', () => {
    score += 1;
    updateScoreDisplay();

    if (score === 10) {
        alert('proficiat Je hebt ' + score + ' punten bereikt!');
    }
  });
}
//https://www.w3schools.com/jsref/met_win_alert.asp
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp
//https://www.w3schools.com/js/js_comparisons.asp

if (clickerBtn) {
  clickerBtn.addEventListener('click', () => {
    updateScoreDisplay();

    if (score === 20) {
        alert('goed gedaan Je hebt ' + score + ' punten bereikt!');
    }
  });
}
//https://www.w3schools.com/jsref/met_win_alert.asp
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp
//https://www.w3schools.com/js/js_comparisons.asp


if (clickerBtn) {
  clickerBtn.addEventListener('click', () => {
    updateScoreDisplay();

    if (score === 100) {
        alert('amai wat een hoge scoren is dit ' + score + ' punten bereikt!' + 'je bent een echte clicker master!');
    }
  });
}
//https://www.w3schools.com/jsref/met_win_alert.asp
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp
//https://www.w3schools.com/js/js_comparisons.asp



if (clickerBtn) {
  clickerBtn.addEventListener('click', () => {
    updateScoreDisplay();

    if (score === 1000) {
        alert('you are back, you are the only person in my intire life that has reached ' + score + ' points! You are the clicker king, you have reached the highest score ever, you are the best clicker player in the world!');
    }
  });
}
//https://www.w3schools.com/jsref/met_win_alert.asp
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp
//https://www.w3schools.com/js/js_comparisons.asp
