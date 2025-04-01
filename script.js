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
  const fish = document.createElement('img');
  fish.src = 'images/bananafish_menu.png';
  fish.classList.add('swim-fish');

  const size = Math.random() * 40 + 40;
  fish.style.width = `${size}px`;
  fish.style.top = `${Math.random() * 100}vh`;
  const duration = Math.random() * 10 + 10;
  fish.style.animationDuration = `${duration}s`;
  fish.style.animationDelay = `${Math.random() * 5}s`;

  document.getElementById('fishContainer').appendChild(fish);

  setTimeout(() => fish.remove(), duration * 1000 + 5000);
}

if (document.getElementById('fishContainer')) {
  setInterval(createFish, 1200);
}

document.querySelectorAll('img[src*="bananafish_menu"]').forEach(img => {
  if (!img.classList.contains('swim-fish')) {
    console.warn('İstenmeyen balık bulundu! 😱', img);
    img.remove();
  }
});


