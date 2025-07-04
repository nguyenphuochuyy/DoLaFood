// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: { slidesPerView: 1},
      480: { slidesPerView: 2},
      768: { slidesPerView: 2},
      900: { slidesPerView: 4},
    },
  });
});
