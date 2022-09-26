'use strict'

function menu(controle) {
    if (controle == 'abrir') {
        document.querySelector('.header__modal').style.display = 'block';
        document.querySelector(".nav").style.width = "250px";
    }
    else {
        document.querySelector(".nav").style.width = "0px";
        document.querySelector('.header__modal').style.display = 'none';
    }
}

function menuOpcao() {
    const larguraDispositivo = window.screen.width
    
    if(larguraDispositivo <= 480) {
        closeMenu()
    }
}

const btnHome = document.querySelector(".item")
    .addEventListener("click", () => {
        window.scrollTo(0, 0);
    })