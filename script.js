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
  
