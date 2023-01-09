'use strict';

const containerTopo = document.querySelector('.container-topo');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');

// Função para controle da abertura e fachamento do menu. Ao parâmetro "Controle", através de um botão, pode ser atribuido os valores "abrir" ou "fechar". 
function menu(controle) {
  if (controle == 'abrir') {
    nav.style.width = '250px';
    modal.style.display = 'block';
  } 
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

// Função para navegação interna
function scrollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollParaSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
      behavior: 'smooth',
      top: topo - 82,
    });
  }

  // [Inicio, Sobre Mim. Habilidades, Meus Projetos]
  linksInternos.forEach(link => {
    link.addEventListener('click', scrollParaSection);
  });
}
scrollSuave();

// Função para controle do menu quando a página for redimensionada
function redimensionaMenu() {
  const larguraJanela = document.documentElement.clientWidth;
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


const botaoVerMais = document.querySelector("[data-ler-mais]");
botaoVerMais.addEventListener("click", lerMais);

function lerMais() {
  const container = document.querySelector("[data-container-paragrafo]");
  container.classList.toggle("ativo");

  if (container.classList.contains("ativo"))
    botaoVerMais.innerText = "Ler menos";
  else 
    botaoVerMais.innerText = "Continuar lendo";
}