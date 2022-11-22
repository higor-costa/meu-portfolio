'use strict';

const containerTopo = document.querySelector('.container-topo');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');

// Função para controle da abertura e fachamento do menu. Ao parâmetro "Controle", através de um botão, pode ser atribuido os valores 
// "abrir" ou "fechar". 
function menu(controle) {
  // Se for passado o 1º valor: o modal ficará visivel e irá sobrepor os outros elementos com exceção do menu,
  // o menu terá uma largura de 250px e se tornará filho direto da header,
  // Enquanto o container topo ficará sob o modal
  if (controle == 'abrir') {
    nav.style.width = '250px';
    modal.style.display = 'block';
  } 
  // Se for passado o 2º valor: o menu será filho do container topo e ficará escondido, assim como o modal. 
  // O container topo irá sobrepor todos os outros elementos.
  else {
    nav.style.width = '0px';
    modal.style.display = 'none';
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

//  Ao clicar no primeiro item do menu, ocorrerá uma rolagem para o topo da página
const btnInicio = document
  .querySelector('.item')
  .addEventListener('click', () => {
    window.scrollTo(0, 0);
  });

// Função para controle do menu quando a página for redimensionada
function redimensionaMenu() {
  const larguraJanela = document.documentElement.clientWidth;
  // Caso o menu mobile esteja aberto e a janela seja redimensionada para uma largura maior que 768px, 
  // o menu voltará a ser filho do container topo e terá uma largura de 40rem, 
  // enquanto o modal será escondido
  if (larguraJanela > 768) {
    nav.style.width = '40rem';
    modal.style.display = 'none';
  } 
  //  Este else if evita que o menu seja fechado quando as condições forem atendidas
  else if (larguraJanela <= 768 && nav.style.width === '250px') {
    nav = '250px';
  } 
  // Este else evita que o menu fique com 40rem de largura
  // quando a janela for redimensionada para uma lagura igual ou menor a 768px
  else {
    nav.style.width = '0px';
  }
}
window.addEventListener('resize', redimensionaMenu);