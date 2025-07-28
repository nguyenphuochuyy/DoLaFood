var featuredCategoriesSwiper = new Swiper('.featured-categories-swiper', {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.featured-categories-swiper .swiper-button-next',
    prevEl: '.featured-categories-swiper .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }

})

const cls_mn = document.querySelector('.nav-category .navbar-pills .nav-item i')
const menu_down = document.querySelector('.nav-category .navbar-pills .nav-item .menu_down')
cls_mn.addEventListener('click', function(){
  cls_mn.classList.toggle('cls_mn')
  if(menu_down.style.display === 'block'){
    menu_down.style.display = 'none'
  }else{
    menu_down.style.display = 'block'
  }
 
})


