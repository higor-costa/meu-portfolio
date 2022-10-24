"use strict";

const containerTopo = document.querySelector(".container-topo");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
function menu(controle) {
  if (controle == "abrir") {
    document.querySelector(".header__modal").style.display = "block";
    document.querySelector(".nav").style.width = "250px";
    header.appendChild(nav);
    containerTopo.style.zIndex = "0"
  } else {
    document.querySelector(".nav").style.width = "0px";
    document.querySelector(".header__modal").style.display = "none";
    containerTopo.appendChild(nav);
    containerTopo.style.zIndex = "10"
  }
}

// Fecha o menu quando o usuário clica em alguma das opções do próprio
function menuMobile() {
  const larguraJanela = window.innerWidth;

  if (larguraJanela <= 768) {
    menu("fechar");
  }
}

const btnInicio = document
  .querySelector(".item")
  .addEventListener("click", () => {
    window.scrollTo(0, 0);
  });


function redimensionaMenu() {
  const larguraJanela = document.documentElement.clientWidth;
  if (larguraJanela > 768) {
    containerTopo.appendChild(nav);
    document.querySelector(".nav").style.width = "40rem";
    document.querySelector(".header__modal").style.display = "none";
  }
  else if (larguraJanela <= 768 && nav.style.width === '250px'){
    document.querySelector(".nav") = "250px";
  }
  else {
    document.querySelector(".nav").style.width = "0px";
  }
}
window.addEventListener("resize", redimensionaMenu);