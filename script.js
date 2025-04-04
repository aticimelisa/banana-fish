document.addEventListener("DOMContentLoaded", function () {
  const heroOverlay = document.querySelector(".hero-overlay");
  const trigger = document.querySelector(".scroll-trigger");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        heroOverlay.classList.add("visible");
      }
    });
  }, { threshold: 0.5 });

  if (trigger && heroOverlay) {
    observer.observe(trigger);
  }
});


function createFish() {
  const existingFish = document.querySelectorAll('.fishy').length;
  if (existingFish >= 8) return; // 8 veya fazlaysa yeni balık doğurma ❌

  const fish = document.createElement('img');
  fish.src = 'images/bananafish_menu.png';
  fish.classList.add('swim-fish', 'fishy');

  const size = Math.random() * 40 + 40;
  fish.style.width = `${size}px`;
  fish.style.top = `${Math.random() * 100}vh`;
  const duration = Math.random() * 10 + 10;
  fish.style.animationDuration = `${duration}s`;
  fish.style.animationDelay = 0;

  document.getElementById('fishContainer').appendChild(fish);

  setTimeout(() => fish.remove(), duration * 1000 + 50000);
}


function createFishLeft() {
  const existingFish = document.querySelectorAll('.fishy').length;
  if (existingFish >= 8) return;

  const fish = document.createElement('img');
  fish.src = 'images/bananafish_menu.png';
  fish.classList.add('swim-fish-left', 'fishy');

  const size = Math.random() * 40 + 40;
  fish.style.width = `${size}px`;
  fish.style.top = `${Math.random() * 100}vh`;
  const duration = Math.random() * 10 + 10;
  fish.style.animationDuration = `${duration}s`;
  fish.style.animationDelay = 0;

  document.getElementById('fishContainer').appendChild(fish);

  setTimeout(() => fish.remove(), duration * 1000 + 50000);
}

if (document.getElementById('fishContainer')) {
  setInterval(createFish, 3000);        // Eski soldan sağa
  setInterval(createFishLeft, 4200);    // Yeni sağdan sola (farklı hız!)
}



function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  const errorMsg = document.getElementById('errorMsg');
  
  if (input === "Ash Lynx") {
    window.location.href = "ash.html";
  } else {
    errorMsg.style.display = "block";
  }
}

