const larguraJanela = window.innerWidth;
console.log(larguraJanela)

// Ao redimensionar a página, a largura da janela será atribuida a uma variável. 
// O valor da variável será passado como argumento para a função "quantidadeProjetos"
window.addEventListener("resize", function () {
  const larguraNavegador = document.documentElement.clientWidth;
  quantidadeProjetos(larguraNavegador);
});

// Define, de acordo com a largura da janela, a quantidade de projetos que serão exibidos na seção "Projetos"
export default function quantidadeProjetos(larguraNavegador) {
  if (larguraNavegador >= 768) {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } 
  else {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

// Invoca a função assim que a página é carregada
quantidadeProjetos(larguraJanela);