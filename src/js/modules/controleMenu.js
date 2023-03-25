"use strict";

export default function controleMenu() {
  const eventos = ["touchstart", "click"];
  const nav = document.querySelector(".nav");
  const modal = document.querySelector(".modal");
  const icones = document.querySelectorAll("[data-controle-menu]");
  const itensMenu = document.querySelectorAll('[data-fecha-menu]');

  function menu(event) {
    const elemento = event.target;
    if (elemento.classList.contains("abrir-menu")) {
      nav.style.width = "250px";
      modal.style.display = "block";
    } 
    else if (!elemento.classList.contains("abrir-menu") || elemento.hasAttribute('[data-fecha-menu]')){
      nav.style.width = "0px";
      modal.style.display = "none";
    }
  }
  icones.forEach((icone) => {
    eventos.forEach((evento) => {
      icone.addEventListener(evento, menu);
    });
  });

  itensMenu.forEach(item => {
    eventos.forEach(evento => {
      item.addEventListener(evento, () => {
        const larguraJanela = window.innerWidth;
        if(larguraJanela <= 768) {
          menu(event);
        }
      });
    });
  });
}