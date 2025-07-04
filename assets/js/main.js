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

  // Chef Section Swiper - Kéo ngang khi màn hình dưới 768px
  const chefSwiper = new Swiper('.daubep-slider', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    touchRatio: 1,
    touchAngle: 45,
    resistance: true,
    resistanceRatio: 0.85,
    allowTouchMove: true,
    touchStartPreventDefault: false,
    touchMoveStopPropagation: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'slide',
    speed: 600,
    breakpoints: {
      // Khi màn hình < 768px - Kéo ngang
      0: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        allowTouchMove: true,
        grabCursor: true,
        touchRatio: 1,
        touchAngle: 45,
        resistance: true,
        resistanceRatio: 0.85,
      },
      // Khi màn hình >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        allowTouchMove: true,
        grabCursor: true,
      },
      // Khi màn hình >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: true,
        grabCursor: true,
      },
      // Khi màn hình >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        allowTouchMove: true,
        grabCursor: true,
      }
    },
  });

  // Thêm event listener để kích hoạt swipe trên mobile
  const swiperContainer = document.querySelector('.daubep-slider');
  
  // Kích hoạt touch events cho mobile
  if (window.innerWidth <= 768) {
    swiperContainer.style.touchAction = 'pan-x pinch-zoom';
    swiperContainer.style.userSelect = 'none';
    swiperContainer.style.webkitUserSelect = 'none';
    swiperContainer.style.mozUserSelect = 'none';
    swiperContainer.style.msUserSelect = 'none';
  }
  
  // Cập nhật khi resize window
  window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
      swiperContainer.style.touchAction = 'pan-x pinch-zoom';
      swiperContainer.style.userSelect = 'none';
      swiperContainer.style.webkitUserSelect = 'none';
      swiperContainer.style.mozUserSelect = 'none';
      swiperContainer.style.msUserSelect = 'none';
    } else {
      swiperContainer.style.touchAction = 'auto';
      swiperContainer.style.userSelect = 'auto';
      swiperContainer.style.webkitUserSelect = 'auto';
      swiperContainer.style.mozUserSelect = 'auto';
      swiperContainer.style.msUserSelect = 'auto';
    }
  });

  // Thêm sự kiện hover cho chef items
  const chefItems = document.querySelectorAll('.cheaf-section .item');
  chefItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Thêm sự kiện click cho chef items
  chefItems.forEach(item => {
    item.addEventListener('click', function() {
      // Thêm hiệu ứng click
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
      
      // Có thể thêm modal hoặc redirect ở đây
      console.log('Chef item clicked:', this.querySelector('.content span').textContent);
    });
  });
});

// Banner Swiper
const bannerSwiper = new Swiper('.swipper-wrapper', {
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

// Thêm sự kiện cho header navigation
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
    });
  }

  // Dropdown menu
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
    if (dropdownToggle && dropdownMenu) {
      dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
      });
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
      });
    }
  });

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Search functionality
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('.search-input');
  
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        // Thêm logic search ở đây
        console.log('Searching for:', query);
        // Có thể redirect hoặc hiển thị kết quả
      }
    });
  }

  // Cart functionality
  const cartIcon = document.querySelector('.fa-cart-shopping');
  const cartCount = document.querySelector('.cart-count');
  
  if (cartIcon && cartCount) {
    cartIcon.addEventListener('click', function() {
      // Thêm logic cart ở đây
      console.log('Cart clicked');
      // Có thể mở modal cart hoặc redirect
    });
  }

  // User icon functionality
  const userIcon = document.querySelector('.fa-user');
  
  if (userIcon) {
    userIcon.addEventListener('click', function() {
      // Thêm logic user menu ở đây
      console.log('User menu clicked');
      // Có thể mở dropdown menu hoặc redirect
    });
  }

  // Custom button functionality
  const customBtns = document.querySelectorAll('.custom-btn');
  customBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const btnText = this.textContent.trim();
      
      if (btnText === 'Đặt món online') {
        console.log('Order online clicked');
        // Redirect to order page
      } else if (btnText === 'Đặt bàn') {
        console.log('Book table clicked');
        // Redirect to booking page
      }
    });
  });

  // Footer social links
  const socialLinks = document.querySelectorAll('.footer-social-icon');
  socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        window.open(href, '_blank');
      }
    });
  });

  // Lazy loading for images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));

  // Back to top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #e31837;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
  `;
  
  document.body.appendChild(backToTopBtn);

  // Show/hide back to top button
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  // Back to top functionality
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add loading animation
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');
  });
});

// === Popup sản phẩm đã mua ===
function savePurchasedProduct(product) {
  // product: {name, desc, time}
  let list = JSON.parse(localStorage.getItem('purchasedProducts') || '[]');
  list.push(product);
  localStorage.setItem('purchasedProducts', JSON.stringify(list));
}

function getProductPurchased1MinuteAgo() {
  const now = Date.now();
  // tạo product mới
  const product = {
    name: 'Pizza',
    desc: 'Pizza Ý sốt bò bầm',
    time: now
  };
  return product;
}

function showProductPopup(product) {
  let popup = document.querySelector('.product-popup');
  if (!popup) {
    popup = document.createElement('div');
    popup.className = 'product-popup';
    popup.innerHTML = `
      <button class="popup-close" title="Đóng">&times;</button>
      <div>
        <div class="popup-title"></div>
        <div class="popup-desc"></div>
        <div>Vừa được mua cách đây 1 phút</div>
      </div>
    `;
    document.body.appendChild(popup);
    popup.querySelector('.popup-close').onclick = () => {
      popup.classList.remove('active');
    };
  }
  popup.querySelector('.popup-title').textContent = product.name;
  popup.querySelector('.popup-desc').textContent = product.desc;
  popup.classList.add('active');
  // Tự động ẩn sau 5s
  clearTimeout(popup._hideTimeout);
  popup._hideTimeout = setTimeout(() => popup.classList.remove('active'), 5000);
}

// Định kỳ 1 phút kiểm tra popup
setInterval(() => {
  const product = getProductPurchased1MinuteAgo();
  if (product) showProductPopup(product);
}, 20000);



