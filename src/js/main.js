'use strict';

const containerTopo = document.querySelector('.container-topo');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const headerModal = document.querySelector('.header__modal');

// Função para controle da abertura e fachamento do menu. Ao parâmetro "Controle", através de um botão, pode ser atribuido os valores 
// "abrir" ou "fechar". 
function menu(controle) {
  // Se for passado o 1º valor: o modal ficará visivel e irá sobrepor os outros elementos com exceção do menu,
  // o menu terá uma largura de 250px e se tornará filho direto da header,
  // Enquanto o container topo ficará sob o modal
  if (controle == 'abrir') {
    headerModal.style.display = 'block';
    nav.style.width = '250px';
    header.appendChild(nav);
    containerTopo.style.zIndex = '0';
  } 
  // Se for passado o 2º valor: o menu será filho do container topo e ficará escondido, assim como o modal. 
  // O container topo irá sobrepor todos os outros elementos.
  else {
    nav.style.width = '0px';
    headerModal.style.display = 'none';
    containerTopo.appendChild(nav);
    containerTopo.style.zIndex = '10';
  }
}

// Fecha o menu quando o usuário clica em alguma das opções do próprio, 
// mas somente se a largura da janela for menor ou igual a 768px.
// A invocação da função é feita através de onclick no HTML
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