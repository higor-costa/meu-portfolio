"use scrict";

// Animação para rolagem
const sections = document.querySelectorAll("[data-scroll]");
const windowMetade = window.innerHeight * 0.6;
export default function animaScroll() {
  sections.forEach((section) => {
    const sectionTopo = section.getBoundingClientRect().top;
    const sectionVisivel = sectionTopo - windowMetade < 0;
    if (sectionVisivel) section.classList.add("ativo");
  });
}
animaScroll();
window.addEventListener("scroll", animaScroll);