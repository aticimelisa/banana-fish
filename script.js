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

/* Blog JS */

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const posts = document.querySelectorAll('.blog-post');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const tag = button.dataset.tag;

      // Buton aktifliğini güncelle
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Postları filtrele
      posts.forEach(post => {
        if (tag === 'all' || post.classList.contains(tag)) {
          post.style.display = 'flex'; // önemli: flex olmalı
        } else {
          post.style.display = 'none';
        }
      });

      // Tarihleri kontrol et
      toggleDates(tag);
    });
  });

  // Sayfa ilk yüklendiğinde tarihler gizli olsun
  toggleDates('all');
});

/* Kartları sıralama */

function sortBlogPostsByDate() {
  const container = document.querySelector('main.content');
  const posts = Array.from(document.querySelectorAll('.blog-post'));

  posts.sort((a, b) => {
    const dateA = new Date(a.dataset.date);
    const dateB = new Date(b.dataset.date);
    return dateB - dateA; // Yeni tarihler üstte
  });

  posts.forEach(post => container.appendChild(post)); // Sıralanmışları yeniden ekle
}

document.addEventListener("DOMContentLoaded", function () {
  sortBlogPostsByDate();
});









/* notablog js */

document.addEventListener("DOMContentLoaded", () => {
  if (!document.body.classList.contains("notablog")) return;

  // 1. Temel node listesi (boyutlar manuel belirlendi)
  const baseNodes = [
    { id: "Tissue Engineering", group: 1, tag: "Science", url: "archieve/nb_tissueengineering.html", size: 30, x: 200, y: 200  },
    { id: "MIT OCW", group: 1, tag: ["WEST", "Tissue Engineering"], url: "archieve/nb_mitocw.html", size: 20 },
    { id: "MEXT", group: 1, tag: ["EAST", "Tissue Engineering"], url: "archieve/nb_mext.html", size: 20, x: 200, y: -50    },
    { id: "Lecture Notes", group: 1, tag: "MIT OCW", url: "archieve/nb_lecturenotes.html", size: 10, x: 400, y: 0  },
    { id: "IT", group: 3, tag: "Science", url: "nb_it.html", size: 30},
    { id: "Game", group: 3, tag: "IT", url: "nb_game.html", size: 20 },
    { id: "Web", group: 3, tag: "IT", url: "nb_web.html", size: 20 },
    { id: "Cyber", group: 3, tag: "IT", url: "nb_cyber.html", size: 20 },
    { id: "Algorithm", group: 3, tag: ["IT", "Language"], url: "nb_algorithm.html", size: 20 },
    { id: "Animation", group: 3, tag: "Game", url: "nb_animation.html", size: 10, x: -200, y: 300   },
    { id: "Game Engines", group: 3, tag: "Game", url: "nb_gameengines.html", size: 10, x: -250, y: 300   },
    { id: "IoT", group: 3, tag: "Cyber", url: "nb_iot.html", size: 10, x: -424, y: 0  },
    { id: "Network", group: 3, tag: ["Web", "Cyber"], url: "nb_network.html", size: 10, x: -424, y: 300   },
    { id: "Language", group: 2, size: 20, x: -50, y: -50  },
    { id: "English", group: 2, tag: ["WEST", "Language"], url: "nb_english.html", size: 10 },
    { id: "French", group: 2, tag: ["WEST", "Language"], url: "nb_french.html", size: 10 },
    { id: "Japanese", group: 2, tag: ["EAST", "Language"], url: "nb_japanese.html", size: 10, x: -50, y: -50   },
    { id: "Turkish", group: 2, tag: "Language", url: "nb_turkish.html", size: 10, x: -100, y: -100   },
    { id: "Science", group: 4, size: 40, x: -50, y: 50   },
    { id: "Mathematics", group: 5, tag: ["Science", "Language"], url: "nb_mathematics.html", size: 18, x: 50, y: 0  },
    { id: "Statistics", group: 5, tag: "Mathematics", size: 10,  x: 100, y: 0  },
    { id: "Quantum", group: 5, tag: "Mathematics", size: 10,  x: 100, y: 0  },
    { id: "Psychology", group: 6, tag: "Science", size: 20, x: 0, y: 100    },
    { id: "Culture", group: 12, url: "nb_culture.html", size: 35, x: 400, y: -363  },
    { id: "Archieve", group: 8, tag: "Culture", url: "https://www.biriktirici.com", size: 20 },
    { id: "WEST", group: 12, tag: "Culture", size: 20 },
    { id: "EAST", group: 12, tag: "Culture", size: 20 },
    { id: "AWST", group: 12, tag: "Culture", size: 20 , x: 400, y: -363 }
  ];

  // 2. tag içeren düğümler üzerinden link oluştur
  const links = baseNodes.flatMap(d => {
    if (!d.tag) return [];
    if (Array.isArray(d.tag)) {
      return d.tag.map(tag => ({ source: tag, target: d.id }));
    }
    return [{ source: d.tag, target: d.id }];
  });

  // 3. Node listesi direkt kullanılıyor (manuel size içeriyor)
  const nodes = baseNodes;

  // 4. SVG + Simülasyon
  const svg = d3.select("#notablog-graph");
  const tooltip = d3.select("#tooltip");

  const width = +svg.attr("width");
  const height = +svg.attr("height");

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links)
      .id(d => d.id)
      .distance(100)
      .strength(0.8))
    .force("charge", d3.forceManyBody().strength(-50))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(d => d.size + 8));

  // 5. Link çizgileri
  const link = svg.selectAll("line")
    .data(links).enter().append("line")
    .style("stroke", "#999")
    .style("stroke-width", 2);

  // 6. Renk paleti
  const color = d3.scaleOrdinal()
    .domain([1,2,3,4,5,6,7,8,9,10,11,12])
    .range([
      "#000000", "#5343eb", "#94ff7a", "#ff7f7a", "#7ae5ff",
      "#847aff", "#7aa9ff", "#f79d16", "#fc4248", "#038a1e", "#bd5924", "#fae5af"
    ]);

  // 7. Nokta çizimi
  const node = svg.selectAll("circle")
    .data(nodes).enter().append("circle")
    .attr("r", d => d.size || 10)
    .style("fill", d => color(d.group))
    .on("click", (event, d) => {
      if (d.url) window.location.href = d.url;
    })
    .on("mouseover", (event, d) => {
      tooltip.style("display", "block").text(d.id);
    })
    .on("mousemove", event => {
      tooltip.style("left", (event.pageX + 10) + "px")
             .style("top", (event.pageY - 20) + "px");
    })
    .on("mouseout", () => {
      tooltip.style("display", "none");
    })
    .call(drag(simulation));

  // 8. Label ekle
  /* const label = svg.selectAll("text")
    .data(nodes).enter().append("text")
    .text(d => d.id)
    .attr("font-size", "12px")
    .attr("dx", 12)
    .attr("dy", 4); */

  // 9. Simülasyon tick fonksiyonu
  simulation.on("tick", () => {
    const padding = 10;

    nodes.forEach(d => {
      if (d.x - d.size < padding || d.x + d.size > width - padding) {
        d.vx *= -1;
        d.x = Math.max(padding + d.size, Math.min(width - padding - d.size, d.x));
      }
      if (d.y - d.size < padding || d.y + d.size > height - padding) {
        d.vy *= -1;
        d.y = Math.max(padding + d.size, Math.min(height - padding - d.size, d.y));
      }
    });

    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    label
      .attr("x", d => d.x)
      .attr("y", d => d.y);
  });

  // 10. Sürükleme fonksiyonu
  function drag(simulation) {
    return d3.drag()
      .on("start", event => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      })
      .on("drag", event => {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      })
      .on("end", event => {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      });
  }
});

/*tissue main page js */

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".collapser").forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const isOpen = content.style.display === "block";
      content.style.display = isOpen ? "none" : "block";
    });
  });
});
