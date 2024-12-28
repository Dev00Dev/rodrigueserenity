const inhaleSound = new Audio('https://rodrigue-app.ct.ws/serenity/app/sounds/br.mp3'); // Remplacez par votre lien MP3
const holdSound = new Audio('https://rodrigue-app.ct.ws/serenity/app/sounds/stop.mp3'); // Remplacez par votre lien MP3
const exhaleSound = new Audio('https://rodrigue-app.ct.ws/serenity/app/sounds/rav.mp3'); // Remplacez par votre lien MP3

let textElement = document.getElementById('text');
let circleElement = document.getElementById('circle');
let startButton = document.getElementById('start-btn');

function resetSounds() {
  inhaleSound.pause(); inhaleSound.currentTime = 0;
  holdSound.pause(); holdSound.currentTime = 0;
  exhaleSound.pause(); exhaleSound.currentTime = 0;
}

function playPhase(phase) {
  resetSounds();
  switch (phase) {
    case 'inhale':
      textElement.textContent = 'Inspirer...';
      circleElement.style.transition = 'transform 3.5s';
      circleElement.style.transform = 'scale(1.5)';
      inhaleSound.play();
      break;
    case 'hold':
      textElement.textContent = 'Retenir...';
      circleElement.style.transition = 'transform 1.5s';
      circleElement.style.transform = 'scale(1.5)';
      holdSound.play();
      break;
    case 'exhale':
      textElement.textContent = 'Expirer...';
      circleElement.style.transition = 'transform 5s';
      circleElement.style.transform = 'scale(1)';
      exhaleSound.play();
      break;
  }
}

function breathingCycle() {
  playPhase('inhale');
  setTimeout(() => {
    playPhase('hold');
    setTimeout(() => {
      playPhase('exhale');
    }, 1500);
  }, 4500); 
}

let breathingInterval;

function startBreathing() {
  startButton.style.display = 'none';
  circleElement.style.display = 'block';
  textElement.style.display = 'block';
  breathingCycle();
  breathingInterval = setInterval(breathingCycle, 11000); 
}

function finish() {
  clearInterval(breathingInterval);
  window.location.href = 'https://example.com'; 
}
