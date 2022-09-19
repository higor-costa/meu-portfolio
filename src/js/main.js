'use strict'

const abrirMenu = document.querySelector('.abrir-menu')
abrirMenu.addEventListener("click", openMenu)

function openMenu() {
    document.querySelector('.header__modal').style.display = 'block';
    document.querySelector(".nav").style.width = "250px";
}

const fecharMenu  = document.querySelector('.fechar-menu')
fecharMenu.addEventListener("click", closeMenu)

function closeMenu() {
    document.querySelector(".nav").style.width = "0px";
    document.querySelector('.header__modal').style.display = 'none';
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