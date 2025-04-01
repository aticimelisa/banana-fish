document.addEventListener("DOMContentLoaded", function () {
    const heroOverlay = document.querySelector(".hero-overlay");
    const trigger = document.querySelector(".scroll-trigger"); // 👈 değişen kısım
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heroOverlay.classList.add("visible");
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(trigger); // 👈 gözlenen artık trigger
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

  // 👇 Rastgele yön (true = sola, false = sağa)
  const goLeft = Math.random() > 0.5;

  if (goLeft) {
    // Sağdan sola yüz
    fish.style.left = '110%';
    fish.style.animationName = 'swim-left';
    
  } else {
    // Soldan sağa yüz
    fish.style.left = '-100px';
    fish.style.animationName = 'swim-right';
      fish.style.transform = 'scaleX(-1)';
  }

  document.getElementById('fishContainer').appendChild(fish);

  setTimeout(() => fish.remove(), duration * 1000 + 5000);
}

