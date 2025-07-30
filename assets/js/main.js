document.addEventListener('DOMContentLoaded', () => {
  // Featured Products Swiper - Món ăn nổi bật
  const featuredProductsSwiper = new Swiper('.featured-products-swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.featured-products-swiper .swiper-button-next',
      prevEl: '.featured-products-swiper .swiper-button-prev',
    },
    breakpoints: {
      // Mobile (small screens) - 2 products
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      // Tablet - 2 products
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // Desktop - 2 products
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
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
  // customer swiper
  var customerSwiper = new Swiper('.customer-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.customer-swiper .swiper-button-next',
      prevEl: '.customer-swiper .swiper-button-prev',
    },
  });
  // tại sao chọn chúng tôi
  var whySwiper = new Swiper('.why-swiper', {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      nextEl: '.why-swiper .swiper-button-next',
      prevEl: '.why-swiper .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 20,
      }
    }
  });

  // News Swiper
  var newsSwiper = new Swiper('.news-swiper', {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
      nextEl: '.news-swiper .swiper-button-next',
      prevEl: '.news-swiper .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 24,
      }
    }
  });


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
      // Mobile (small screens) - 1 slide
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      // Small screens - 1 slide
      576: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      // Tablet (768px) - 3 slides
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // Large screens (1200px+) - 4 slides
      1200: {
        slidesPerView: 4,
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
  window.addEventListener('resize', function () {
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
    item.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });

  // Thêm sự kiện click cho chef items
  chefItems.forEach(item => {
    item.addEventListener('click', function () {
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

const featuredProductsSwiper = new Swiper('.featured-products-swiper1', {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: '.featured-products-swiper .swiper-button-next',
    prevEl: '.featured-products-swiper .swiper-button-prev',
  },
  breakpoints: {
    // Mobile (small screens) - 2 products
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // Tablet - 2 products
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Desktop - 2 products
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

// banner section swiper
const bannerSwiper = new Swiper('.banner-swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
})

// Food Menu Swiper for Mobile
const foodMenuSwiper = new Swiper('.food-menu-swiper', {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  breakpoints: {
    // Mobile (small screens) - 1 product
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // Tablet - 1.5 products
    576: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    // Desktop - hidden (grid layout used instead)
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
});

//Scroll food menu
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.menu-section');
  const navLinks = document.querySelectorAll('.food-menu-tabs .nav-link');
  const foodMenuTabs = document.querySelector('.food-menu-tabs');
  const foodMenuSections = document.querySelectorAll('.food-menu');

  function onScroll() {
    let scrollPos = window.scrollY || window.pageYOffset;
    let offset = 120;

    // Xử lý sticky tabs
    if (foodMenuTabs) {
      const firstFoodMenu = document.querySelector('.food-menu');
      const lastFoodMenu = document.querySelector('.food-menu:last-of-type');

      if (firstFoodMenu && lastFoodMenu) {
        const firstTop = firstFoodMenu.offsetTop;
        const lastBottom = lastFoodMenu.offsetTop + lastFoodMenu.offsetHeight;

        // Kiểm tra xem có đang trong vùng food menu không
        if (scrollPos >= firstTop - 100 && scrollPos <= lastBottom) {
          foodMenuTabs.classList.add('sticky');
        } else {
          foodMenuTabs.classList.remove('sticky');
        }
      }
    }

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
        const offsetTop = target.offsetTop - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Thêm sự kiện cho header navigation
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function () {
      navbarCollapse.classList.toggle('show');
    });
  }

  // Dropdown menu
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    if (dropdownToggle && dropdownMenu) {
      dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
      });
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
      });
    }
  });

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
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
    searchForm.addEventListener('submit', function (e) {
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
    cartIcon.addEventListener('click', function () {
      // Thêm logic cart ở đây
      console.log('Cart clicked');
      // Có thể mở modal cart hoặc redirect
    });
  }

  // Function to attach cart dropdown events
  function attachCartEvents() {
    // Cart dropdown quantity controls
    const quantityButtons = document.querySelectorAll('.quantity-btn');
    console.log('Found quantity buttons:', quantityButtons.length);
    
    quantityButtons.forEach((button, index) => {
      console.log(`Attaching event to button ${index}:`, button);
      // Remove existing event listeners to prevent duplication
      button.removeEventListener('click', handleQuantityClick);
      button.addEventListener('click', handleQuantityClick);
    });

    // Delete cart item functionality
    const deleteButtons = document.querySelectorAll('.cart-item-note');
    console.log('Found delete buttons:', deleteButtons.length);
    
    deleteButtons.forEach((button, index) => {
      console.log(`Attaching event to delete button ${index}:`, button);
      // Remove existing event listeners to prevent duplication
      button.removeEventListener('click', handleDeleteClick);
      button.addEventListener('click', handleDeleteClick);
    });
  }

  // Handle quantity button clicks
  function handleQuantityClick(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const button = e.target;
    const isPlus = button.classList.contains('plus');
    const quantityValue = button.parentElement.querySelector('.quantity-value');
    const cartItemPrice = button.closest('.cart-item').querySelector('.cart-item-price');
    
    let currentQuantity = parseInt(quantityValue.textContent);
    const unitPrice = 99000; // Giá đơn vị (có thể lấy từ data attribute)
    
    if (isPlus) {
      currentQuantity++;
    } else {
      if (currentQuantity > 1) {
        currentQuantity--;
      }
    }
    
    quantityValue.textContent = currentQuantity;
    
    // Cập nhật giá
    const newPrice = (unitPrice * currentQuantity).toLocaleString('vi-VN');
    cartItemPrice.textContent = newPrice + 'đ';
    
    // Cập nhật tổng tiền
    updateCartTotal();
    
    console.log('Quantity updated:', currentQuantity);
  }

  // Handle delete button clicks
  function handleDeleteClick(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const button = e.target;
    const cartItem = button.closest('.cart-item');
    cartItem.remove();
    
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    updateCartCount();
    updateCartTotal();
    
    console.log('Item deleted');
  }

  // Update cart total
  function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    
    cartItems.forEach(item => {
      const priceText = item.querySelector('.cart-item-price').textContent;
      const price = parseInt(priceText.replace(/[^\d]/g, ''));
      total += price;
    });
    
    const totalElement = document.querySelector('.total-price');
    if (totalElement) {
      totalElement.textContent = total.toLocaleString('vi-VN') + 'đ';
    }
  }

  // Update cart count
  function updateCartCount() {
    const cartItems = document.querySelectorAll('.cart-item');
    const cartCountElement = document.querySelector('.cart-count');
    
    if (cartCountElement) {
      cartCountElement.textContent = cartItems.length;
    }
  }

  // Initialize cart events
  attachCartEvents();
  
  // Event delegation for cart dropdown (backup method)
  document.addEventListener('click', function(e) {
    // Handle quantity buttons
    if (e.target.classList.contains('quantity-btn')) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('Quantity button clicked via delegation:', e.target);
      
      const button = e.target;
      const isPlus = button.classList.contains('plus');
      const quantityValue = button.parentElement.querySelector('.quantity-value');
      const cartItemPrice = button.closest('.cart-item').querySelector('.cart-item-price');
      
      if (!quantityValue || !cartItemPrice) {
        console.error('Could not find required elements');
        return;
      }
      
      let currentQuantity = parseInt(quantityValue.textContent);
      const unitPrice = 99000;
      
      if (isPlus) {
        currentQuantity++;
      } else {
        if (currentQuantity > 1) {
          currentQuantity--;
        }
      }
      
      quantityValue.textContent = currentQuantity;
      
      // Cập nhật giá
      const newPrice = (unitPrice * currentQuantity).toLocaleString('vi-VN');
      cartItemPrice.textContent = newPrice + 'đ';
      
      // Cập nhật tổng tiền
      updateCartTotal();
      
      console.log('Quantity updated via delegation:', currentQuantity);
    }
    
    // Handle delete buttons
    if (e.target.classList.contains('cart-item-note')) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('Delete button clicked via delegation:', e.target);
      
      const cartItem = e.target.closest('.cart-item');
      if (cartItem) {
        cartItem.remove();
        updateCartCount();
        updateCartTotal();
        console.log('Item deleted via delegation');
      }
    }
  });
  
  // Re-attach events when cart content changes (for dynamic content)
  const cartDropdown = document.querySelector('.cart-dropdown');
  if (cartDropdown) {
    // Use MutationObserver to watch for changes in cart content
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          // Re-attach events when cart items are added/removed
          setTimeout(attachCartEvents, 100);
        }
      });
    });
    
    observer.observe(cartDropdown, {
      childList: true,
      subtree: true
    });
  }

  // User icon functionality
  const userIcon = document.querySelector('.fa-user');

  if (userIcon) {
    userIcon.addEventListener('click', function () {
      // Thêm logic user menu ở đây
      console.log('User menu clicked');
      // Có thể mở dropdown menu hoặc redirect
    });
  }

  // Custom button functionality
  const customBtns = document.querySelectorAll('.custom-btn');
  customBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
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
    link.addEventListener('click', function (e) {
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
    background:#006a31;
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
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  // Back to top functionality
  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add loading animation
  window.addEventListener('load', function () {
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
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('openMenu');
  const closeBtn = document.getElementById('closeMenu');
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('menuOverlay');

  if (openBtn && closeBtn && menu && overlay) {
    openBtn.addEventListener('click', function() {
      menu.classList.add('active');
      overlay.classList.add('active');
    });
    closeBtn.addEventListener('click', function() {
      menu.classList.remove('active');
      overlay.classList.remove('active');
    });
    overlay.addEventListener('click', function() {
      menu.classList.remove('active');
      overlay.classList.remove('active');
    });
  }
});

  // User Dropdown Menu
  const userDropdown = document.querySelector('.user-dropdown');
  const userMenu = document.querySelector('.user-menu');
  
  if (userDropdown && userMenu) {
    // Show menu on hover
    userDropdown.addEventListener('mouseenter', function() {
      userMenu.style.opacity = '1';
      userMenu.style.visibility = 'visible';
      userMenu.style.transform = 'translateY(0)';
    });
    
    // Hide menu when mouse leaves
    userDropdown.addEventListener('mouseleave', function() {
      userMenu.style.opacity = '0';
      userMenu.style.visibility = 'hidden';
      userMenu.style.transform = 'translateY(-10px)';
    });
    
    // Prevent menu from closing when hovering over menu items
    userMenu.addEventListener('mouseenter', function() {
      userMenu.style.opacity = '1';
      userMenu.style.visibility = 'visible';
      userMenu.style.transform = 'translateY(0)';
    });
    
    userMenu.addEventListener('mouseleave', function() {
      userMenu.style.opacity = '0';
      userMenu.style.visibility = 'hidden';
      userMenu.style.transform = 'translateY(-10px)';
    });
  }

  // Set active menu item based on current page
  function setActiveMenuItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.navbar-nav .nav-item');
    
    menuItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      if (link) {
        const href = link.getAttribute('href');
        const dataPage = item.getAttribute('data-page');
        
        // Remove existing active class
        item.classList.remove('active-btn');
        
        // Check if current page matches the link or data-page attribute
        if (href === currentPage || dataPage === currentPage) {
          item.classList.add('active-btn');
        }
        
        // Special case for index.html (homepage)
        if (currentPage === 'index.html' && (href === 'index.html' || dataPage === 'index.html')) {
          item.classList.add('active-btn');
        }
        
        // Special case for product pages
        if (currentPage.includes('chitietsanpham') && (href === 'tatcasanpham.html' || dataPage === 'tatcasanpham.html')) {
          item.classList.add('active-btn');
        }
        
        // Special case for empty path (root)
        if (currentPage === '' && (href === 'index.html' || dataPage === 'index.html')) {
          item.classList.add('active-btn');
        }
      }
    });
  }

  // Call the function when page loads
  setActiveMenuItem();