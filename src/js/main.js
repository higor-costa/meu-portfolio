'use strict';

const containerTopo = document.querySelector('.container-topo');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const headerModal = document.querySelector('.header__modal');

function menu(controle) {
  if (controle == 'abrir') {
    headerModal.style.display = 'block';
    nav.style.width = '250px';
    header.appendChild(nav);
    containerTopo.style.zIndex = '0';
  } else {
    nav.style.width = '0px';
    headerModal.style.display = 'none';
    containerTopo.appendChild(nav);
    containerTopo.style.zIndex = '10';
  }
}

// Fecha o menu quando o usuário clica em alguma das opções do próprio
function menuMobile() {
  const larguraJanela = window.innerWidth;

  if (larguraJanela <= 768) {
    menu('fechar');
  }
}

const btnInicio = document
  .querySelector('.item')
  .addEventListener('click', () => {
    window.scrollTo(0, 0);
  });

function redimensionaMenu() {
  const larguraJanela = document.documentElement.clientWidth;
  if (larguraJanela > 768) {
    containerTopo.appendChild(nav);
    nav.style.width = '40rem';
    headerModal.style.display = 'none';
  } else if (larguraJanela <= 768 && nav.style.width === '250px') {
    nav = '250px';
  } else {
    nav.style.width = '0px';
  }
}
window.addEventListener('resize', redimensionaMenu);