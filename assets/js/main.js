document.addEventListener('DOMContentLoaded', () => {
  // Flash Sale Products Swiper
  const flashSaleSwiper = new Swiper('.flash-sale-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    pagination: {
      el: '.flash-sale-swiper .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.flash-sale-swiper .swiper-button-next',
      prevEl: '.flash-sale-swiper .swiper-button-prev',
    },
    breakpoints: {
      // Mobile (small screens) - 3 products
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // Large screens - 5 products
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  // Best Seller Products Swiper
  const bestSellerSwiper = new Swiper('.best-seller-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.best-seller-swiper .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.best-seller-swiper .swiper-button-next',
      prevEl: '.best-seller-swiper .swiper-button-prev',
    },
    breakpoints: {
      // Mobile (small screens) - 3 products
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // Large screens - 5 products
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
});
// Banner Swiper
const bannerSwiper = new Swiper('.banner-swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: '.banner-swiper .swiper-button-next',
    prevEl: '.banner-swiper .swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    
  }
});
