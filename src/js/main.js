'use strict'

const containerTopo = document.querySelector(".container-topo");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
function menu(controle) {
    if (controle == 'abrir') {
        document.querySelector('.header__modal').style.display = 'block';
        document.querySelector(".nav").style.width = "250px";
    }
    else {
        document.querySelector(".nav").style.width = "0px";
        document.querySelector('.header__modal').style.display = 'none';
    containerTopo.appendChild(nav);
    }
}

function menuMobile() {
    const larguraJanela = window.innerWidth
    
    if(larguraJanela <= 768) {
        menu('fechar')
    }
}

const btnHome = document.querySelector(".item")
    .addEventListener("click", () => {
        window.scrollTo(0, 0);
    })