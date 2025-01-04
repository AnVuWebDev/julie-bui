// Fonction header qui disparait/réaparait lors du scroll
let lastScrollTop = 0;
const header = document.querySelector("header");

if (header) {
  // Si le header est trouvé, ajoute l'événement de défilement
  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Si on défile vers le bas
    if (scrollTop > lastScrollTop) {
      header.classList.add("header-hidden");
    } else {
      // Si on défile vers le haut
      header.classList.remove("header-hidden");
    }

    lastScrollTop = scrollTop;
  });
} else {
  console.error("L'élément header n'a pas été trouvé dans le DOM.");
}

// Sélectionner le menu burger et le menu de navigation
const burgerMenu = document.getElementById("burgerMenu");
const navBar = document.getElementById("navBar");

// Ajouter un événement au clic pour afficher/masquer le menu
burgerMenu.addEventListener("click", () => {
  navBar.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

//Fonction display
document.addEventListener("DOMContentLoaded", function () {
  const nom = document.querySelector(".nom");
  const keyword = document.querySelector(".keyword");
  const arr = document.querySelector(".arr");

  nom.classList.add("display");
  keyword.classList.add("display");
  arr.classList.add("display");
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

// Fonction Slide
let slides = document.querySelectorAll(".slide-img");
let dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active-dot");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active-dot");
}

setInterval(nextSlide, 4000);

//Fonction Scroll
const scrollBackground = document.querySelector(".container-semelles");

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  let zoomLevel = 100 + scrollPosition * 0.02;
  scrollBackground.style.backgroundSize = `${zoomLevel}%`;
});

// Fonction pour retourner les photos
const cardContainers = document.querySelectorAll(".container-card");

// Ajouter l'événement de clic à chaque conteneur de carte
cardContainers.forEach((cardContainer) => {
  cardContainer.addEventListener("click", () => {
    cardContainer.classList.toggle("flip");
  });
});

// Ajouter l'événement de défilement pour cacher les versos des cartes retournées
window.addEventListener("scroll", () => {
  cardContainers.forEach((cardContainer) => {
    if (cardContainer.classList.contains("flip")) {
      cardContainer.classList.remove("flip");
    }
  });
});

//Fonction menu deroulant faq
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      item.classList.toggle("active");

      // Fermer les autres éléments
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });
});
