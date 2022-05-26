const openModal = document.querySelector('.meus-projetos__button');
openModal.addEventListener('click', open);

function open() {
   let modal = document.querySelector('.modal').style.display = "block";
   let body = document.body.style.overflow = "hidden";
}

const closeModal = document.querySelector('.modal__topo .botao');
closeModal.addEventListener('click', close);

function close() {
    let modal = document.querySelector('.modal').style.display = "none";
    let body = document.body.style.overflow = "visible";
}