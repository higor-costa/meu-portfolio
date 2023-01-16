"use strict";

const nav = document.querySelector('.nav');
const modal = document.querySelector('.modal');
// Função para controle do menu quando a página for redimensionada
export default function redimensionaMenu() {
  const larguraJanela = document.documentElement.clientWidth;
  if (larguraJanela > 768) {
    nav.style.width = "40rem";
    modal.style.display = "none";
  }
  //  Este else if evita que o menu seja fechado quando as condições forem atendidas
  else if (larguraJanela <= 768 && nav.style.width === "250px") {
    nav = "250px";
  }
  // Este else evita que o menu fique com 40rem de largura
  // quando a janela for redimensionada para uma lagura igual ou menor a 768px
  else {
    nav.style.width = "0px";
  }
}
window.addEventListener("resize", redimensionaMenu);