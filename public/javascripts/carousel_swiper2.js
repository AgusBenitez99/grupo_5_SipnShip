var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    //cuando supere los 480
    480: {
      slidesPerView: 4,
    },
    769: {
      slidesPerView: 6
    }
  },

});