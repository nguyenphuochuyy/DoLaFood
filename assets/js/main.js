document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },  
    loop: false,
    breakpoints: {
      640: {
        slidesPerView: 1, 
      },
    },
  });
});c