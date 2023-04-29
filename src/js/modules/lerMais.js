"use strict";

const botoesVerMais = document.querySelectorAll("[data-ver-mais]");
const container = document.querySelector("[data-container-paragrafo]");
const projetosEscondidos = document.querySelector(".projetos-escondidos");

botoesVerMais.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    verMais(index)
  });
});

export default function verMais(index) {
  const botao = botoesVerMais[index];
  if (index === 0) {
    container.classList.toggle('ativo');
    if (container.classList.contains('ativo')) {
      botao.innerText = 'Ler menos';
    } else {
      botao.innerText = 'Continuar lendo';
    }
  }
  else {
    projetosEscondidos.classList.toggle('ativo');
    if (projetosEscondidos.classList.contains('ativo')) {
      botao.innerText = 'Ver menos';
    } else {
      botao.innerText = 'Mais projetos';
    }
  }
}