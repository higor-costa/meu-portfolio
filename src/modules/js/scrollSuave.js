"use strict";

// Função para navegação interna
export default function scrollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollParaSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
      behavior: "smooth",
      top: topo - 82,
    });
  }

  // [Inicio, Sobre Mim. Habilidades, Meus Projetos]
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollParaSection);
  });
}
scrollSuave();