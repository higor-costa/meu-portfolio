"use strict";

const botaoVerMais = document.querySelector("[data-ler-mais]");
botaoVerMais.addEventListener("click", lerMais);

export default function lerMais() {
  const container = document.querySelector("[data-container-paragrafo]");
  container.classList.toggle("ativo");

  if (container.classList.contains("ativo"))
    botaoVerMais.innerText = "Ler menos";
  else 
    botaoVerMais.innerText = "Continuar lendo";
}