// Variables pour gérer le scroll du header
document.addEventListener("DOMContentLoaded", function () {
  // Variables pour gérer le scroll du header
  /*let lastScrollTop = 0;
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Si on défile vers le bas, on cache le header
      header.style.top = "-100px";
    } else {
      // Si on défile vers le haut, on affiche le header
      header.style.top = "10px";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Évite les valeurs négatives sur mobile
  });*/

  let lastScrollTop = 0;
  let ticking = false;

  function handleScroll() {
    const header = document.querySelector("header");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.style.top = "-100px"; // Cache le header
    } else {
      header.style.top = "10px"; // Montre le header
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
    }
  });

  // JavaScript pour le diaporama
  let slides = document.querySelectorAll(".hero-slideshow .slide");
  let currentSlide = 0;

  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(nextSlide, 5000);
});

// Pour l'apparition du titre h1
document.addEventListener("DOMContentLoaded", function () {
  const keyword = document.querySelector(".keyword");
  const arr = document.querySelector(".arr");

  // Ajoute la classe display avec un léger délai pour un effet d'apparition
  setTimeout(() => {
    keyword.classList.add("display");
  }, 500);

  setTimeout(() => {
    arr.classList.add("display");
  }, 1000);
});

// Fonction pour révéler les éléments lors du défilement
function revealOnScroll() {
  const leftElements = document.querySelectorAll(".revealleft");
  const bottomElements = document.querySelectorAll(".revealbottom");
  const rightElements = document.querySelectorAll(".revealright");
  const windowHeight = window.innerHeight;

  // Pour les éléments qui viennent de la gauche
  leftElements.forEach(function (element) {
    const elementPosition = element.getBoundingClientRect().top;

    if (elementPosition < windowHeight - 100) {
      element.classList.add("visible");
    }
  });

  // Pour les éléments qui viennent du bas
  bottomElements.forEach(function (element) {
    const elementPosition = element.getBoundingClientRect().top;

    if (elementPosition < windowHeight - 100) {
      element.classList.add("visible");
    }
  });

  // Pour les éléments qui viennent de la droite
  rightElements.forEach(function (element) {
    const elementPosition = element.getBoundingClientRect().top;

    if (elementPosition < windowHeight - 100) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
