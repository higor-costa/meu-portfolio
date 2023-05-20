'use strict';

export default function avisoDinamico() {
  const aviso = document.querySelector('.projetos__aviso');
  const eventos = ['load', 'resize'];
  
  eventos.forEach(evento => {
    window.addEventListener(evento, () => {
      const larguraJanela = window.innerWidth;
  
      if(larguraJanela > 1023) 
      aviso.innerText = 'Posicione o mouse em cima do projeto para visualizar a sua descrição';
      else 
      aviso.innerText = 'Toque em um projeto para visualizar a sua descrição.';
    })
  })
}
avisoDinamico();
