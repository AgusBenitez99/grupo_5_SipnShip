var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    //cuando supere los 480

    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    }
  },

});