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

//Scroll food menu 
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.menu-section');
  const navLinks = document.querySelectorAll('.food-menu-tabs .nav-link');

  function onScroll() {
    let scrollPos = window.scrollY || window.pageYOffset;
    let offset = 120; 

    sections.forEach((section, idx) => {
      if (
        section.offsetTop - offset <= scrollPos &&
        section.offsetTop + section.offsetHeight - offset > scrollPos
      ) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[idx].classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll);

  // Click tab scroll to section
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
});
