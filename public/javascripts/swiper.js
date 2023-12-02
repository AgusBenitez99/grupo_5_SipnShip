/*script para swiper carousel */
var swiper = new Swiper(".swiper-container-carousel", {
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
/*script para swiper carousel */
/*script para swiper card effect */
var swiper = new Swiper('.swiper-container-card', {
  effect: 'cards', 
  grabCursor: true, 
  centeredSlides: true,
  loop:true,
  
});
/*script para swiper card effect */