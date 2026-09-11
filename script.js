const translatable = document.querySelectorAll('[data-it][data-en]');

translatable.forEach((element) => {
  element.innerHTML = element.dataset.en;
});

const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  mobileMenu.classList.toggle('open', !isOpen);
  mobileMenu.setAttribute('aria-hidden', String(isOpen));
});

mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.getElementById('year').textContent = new Date().getFullYear();

const playWord = document.getElementById('play-word');
const playWords = ['EMBEDDED', 'SAFE', 'SECURE', 'DEPENDABLE', 'HIGH-PERFORMANCE', 'RECONFIGURABLE'];
let playWordIndex = 0;

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.setInterval(() => {
    playWord.classList.add('out');
    window.setTimeout(() => {
      playWordIndex = (playWordIndex + 1) % playWords.length;
      playWord.textContent = playWords[playWordIndex];
      playWord.classList.remove('out');
      playWord.classList.add('in');
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => playWord.classList.remove('in')));
    }, 180);
  }, 2200);
}

const topicLabels = document.querySelectorAll('.topic-orbit b');
const researchTopics = [
  'SECURITY & TRUST',
  'DEPENDABILITY',
  'HIGH-PERFORMANCE COMPUTING',
  'EDGE COMPUTING',
  'FPGA',
  'DIGITAL TWINS',
  'QUANTUM COMPUTING',
  'EXPLAINABLE AI',
  'EDGE MACHINE LEARNING',
  'CYBER-PHYSICAL SYSTEMS',
  'PHYSICAL UNCLONABLE FUNCTIONS',
  'RECONFIGURABLE SYSTEMS'
];
let topicCursor = topicLabels.length;
let topicSlot = 0;

if (topicLabels.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.setInterval(() => {
    const label = topicLabels[topicSlot];
    label.classList.add('topic-fade');
    window.setTimeout(() => {
      label.textContent = researchTopics[topicCursor % researchTopics.length];
      label.classList.remove('topic-fade');
      topicCursor += 1;
      topicSlot = (topicSlot + 1) % topicLabels.length;
    }, 320);
  }, 1700);
}

const navigationLinks = document.querySelectorAll('.desktop-nav a, .mobile-menu a');
const navigationSections = document.querySelectorAll('main section[id]');

function setActiveNavigation(sectionId) {
  navigationLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${sectionId}`;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

const navigationObserver = new IntersectionObserver((entries) => {
  const visibleSection = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (visibleSection) setActiveNavigation(visibleSection.target.id);
}, {
  rootMargin: '-18% 0px -58% 0px',
  threshold: [0, 0.15, 0.35, 0.6]
});

navigationSections.forEach((section) => navigationObserver.observe(section));
navigationLinks.forEach((link) => link.addEventListener('click', () => {
  setActiveNavigation(link.getAttribute('href').slice(1));
}));

if (window.location.hash) setActiveNavigation(window.location.hash.slice(1));

// Orbit Catch: the hero animation becomes a short, opt-in arcade game.
const orbitGame = document.querySelector('.orbital');
const orbitConsole = document.getElementById('orbit-console');
const orbitPlay = document.getElementById('orbit-play');
const catchTarget = document.getElementById('catch-target');
const targetOrbit = document.querySelector('.orbit-dot-outer');
const orbitScore = document.getElementById('orbit-score');
const orbitBinary = document.getElementById('orbit-binary');
const orbitStreak = document.getElementById('orbit-streak');
const orbitTime = document.getElementById('orbit-time');
const orbitStatus = document.getElementById('orbit-status');

if (orbitGame && orbitConsole && orbitPlay && catchTarget) {
  const gameDuration = 20;
  const maximumDecoys = 6;
  let gameActive = false;
  let score = 0;
  let streak = 0;
  let hitCount = 0;
  let gameDeadline = 0;
  let gameTimer;

  function updateGameDisplay(seconds = gameDuration) {
    orbitScore.value = String(score).padStart(6, '0');
    orbitBinary.value = score.toString(2).padStart(16, '0');
    orbitStreak.value = `×${String(streak).padStart(2, '0')}`;
    orbitTime.value = Math.max(0, seconds).toFixed(1).padStart(4, '0');
  }

  function clearDecoys() {
    orbitGame.querySelectorAll('.catch-decoy').forEach((decoy) => decoy.remove());
  }

  function spawnDecoys(amount = 2) {
    const currentDecoys = orbitGame.querySelectorAll('.catch-decoy').length;
    const numberToCreate = Math.min(amount, maximumDecoys - currentDecoys);

    for (let index = 0; index < numberToCreate; index += 1) {
      const decoyOrbit = document.createElement('span');
      const decoyButton = document.createElement('button');
      const speed = 6.5 + Math.random() * 6;

      decoyOrbit.className = 'catch-decoy';
      decoyOrbit.style.setProperty('--track', `${34 + Math.round(Math.random() * 64)}px`);
      decoyOrbit.style.setProperty('--speed', `${speed.toFixed(2)}s`);
      decoyOrbit.style.setProperty('--delay', `${(-Math.random() * speed).toFixed(2)}s`);
      decoyOrbit.style.setProperty('--direction', Math.random() > 0.5 ? 'normal' : 'reverse');
      decoyButton.className = 'decoy-target';
      decoyButton.type = 'button';
      decoyButton.setAttribute('aria-label', 'Decoy signal');

      decoyButton.addEventListener('click', (event) => {
        event.stopPropagation();
        if (!gameActive) return;
        decoyOrbit.remove();
        registerMiss();
      });

      decoyOrbit.append(decoyButton);
      orbitGame.append(decoyOrbit);
    }
  }

  function movePrimaryTarget() {
    const speed = Math.max(6.5, 18 - hitCount * 0.65);
    targetOrbit.style.animation = 'none';
    void targetOrbit.offsetWidth;
    targetOrbit.style.animation = `dot-spin ${speed}s linear infinite`;
    targetOrbit.style.animationDelay = `${(-Math.random() * speed).toFixed(2)}s`;
  }

  function registerMiss() {
    streak = 0;
    score = Math.max(0, score - 25);
    orbitStatus.textContent = 'MISS −25 · TWO DECOYS DEPLOYED';
    orbitGame.classList.remove('game-miss');
    void orbitGame.offsetWidth;
    orbitGame.classList.add('game-miss');
    spawnDecoys(2);
    updateGameDisplay(Math.max(0, (gameDeadline - performance.now()) / 1000));
  }

  function registerHit() {
    streak += 1;
    hitCount += 1;
    const points = 100 * streak;
    score += points;
    orbitStatus.textContent = `HIT +${points} · ${researchTopics[(hitCount - 1) % researchTopics.length]}`;
    orbitGame.classList.remove('target-hit');
    void orbitGame.offsetWidth;
    orbitGame.classList.add('target-hit');
    movePrimaryTarget();
    updateGameDisplay(Math.max(0, (gameDeadline - performance.now()) / 1000));
  }

  function endGame() {
    if (!gameActive) return;
    gameActive = false;
    window.clearInterval(gameTimer);
    catchTarget.disabled = true;
    orbitGame.classList.remove('game-active');
    orbitConsole.classList.remove('is-playing');
    orbitConsole.classList.add('is-complete');
    orbitPlay.innerHTML = '<span aria-hidden="true">▶</span> PLAY';
    clearDecoys();
    targetOrbit.style.removeProperty('animation');
    targetOrbit.style.removeProperty('animation-delay');

    let bestScore = 0;
    try {
      bestScore = Number(window.sessionStorage.getItem('arcadesOrbitBest')) || 0;
      if (score > bestScore) {
        bestScore = score;
        window.sessionStorage.setItem('arcadesOrbitBest', String(score));
      }
    } catch (error) {
      bestScore = score;
    }

    updateGameDisplay(0);
    orbitStatus.textContent = `GAME OVER · SCORE ${String(score).padStart(6, '0')} · BEST ${String(bestScore).padStart(6, '0')}`;
  }

  function gameTick() {
    const secondsLeft = Math.max(0, (gameDeadline - performance.now()) / 1000);
    updateGameDisplay(secondsLeft);
    if (secondsLeft <= 0) endGame();
  }

  function startGame() {
    window.clearInterval(gameTimer);
    clearDecoys();
    gameActive = true;
    score = 0;
    streak = 0;
    hitCount = 0;
    gameDeadline = performance.now() + gameDuration * 1000;
    catchTarget.disabled = false;
    orbitGame.classList.add('game-active');
    orbitConsole.classList.add('is-playing');
    orbitConsole.classList.remove('is-complete');
    orbitPlay.innerHTML = '<span aria-hidden="true">▶</span> PLAY';
    orbitScore.closest('.orbit-scoreboard').setAttribute('aria-hidden', 'false');
    orbitStatus.setAttribute('aria-hidden', 'false');
    orbitStatus.textContent = 'CATCH THE ACID SIGNAL · AVOID CYAN DECOYS';
    movePrimaryTarget();
    updateGameDisplay(gameDuration);
    gameTimer = window.setInterval(gameTick, 100);
    catchTarget.focus({ preventScroll: true });
  }

  catchTarget.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!gameActive) return;
    registerHit();
  });

  orbitGame.addEventListener('click', (event) => {
    if (!gameActive || event.target.closest('.catch-target') || event.target.closest('.decoy-target')) return;
    const targetBounds = catchTarget.getBoundingClientRect();
    const targetX = targetBounds.left + targetBounds.width / 2;
    const targetY = targetBounds.top + targetBounds.height / 2;
    const distanceFromTarget = Math.hypot(event.clientX - targetX, event.clientY - targetY);
    if (distanceFromTarget <= 64) registerHit();
    else registerMiss();
  });

  orbitPlay.addEventListener('click', startGame);
  updateGameDisplay();
}
