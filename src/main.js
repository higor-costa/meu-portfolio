'use strict'

const openModal = document.querySelector('.meus-projetos__button');
openModal.addEventListener('click', open);

function open() {
   document.querySelector('.modal').style.display = "block";
   document.body.style.overflow = "hidden";
}

const closeModal = document.querySelector('.modal__topo .botao');
closeModal.addEventListener('click', close);

function close() {
    document.querySelector('.modal').style.display = "none";
    document.body.style.overflow = "visible";
}

const abrirMenu = document.querySelector('.abrir-menu')
abrirMenu.addEventListener("click", openMenu)

function openMenu() {
    document.querySelector(".nav").style.width = "250px";
    document.querySelector('.abrir-menu').style.display = 'none';
}

const fecharMenu  = document.querySelector('.fechar-menu')
fecharMenu.addEventListener("click", closeMenu)

function closeMenu() {
    document.querySelector(".nav").style.width = "0px";
    document.querySelector('.abrir-menu').style.display = 'block'; 
}