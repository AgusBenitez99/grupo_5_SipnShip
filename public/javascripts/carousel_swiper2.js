var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    //cuando supere los 480
    480: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 6,
      spaceBetween: 20,
    }
  },

});