// Responsive Swiper Configuration
document.addEventListener('DOMContentLoaded', function() {
    // Khởi tạo Swiper với responsive breakpoints
    const swiper = new Swiper('.swiper-container', {
        // Cấu hình cơ bản
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        
        // Responsive breakpoints
        breakpoints: {
            // Khi màn hình >= 768px (tablet)
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // Khi màn hình >= 980px (desktop)
            980: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Hiệu ứng chuyển slide
        effect: 'slide',
        speed: 600,
        
        // Touch/swipe support
        allowTouchMove: true,
        grabCursor: true,
    });
    
    // Hàm cập nhật số lượng slides dựa trên kích thước màn hình
    function updateSlidesPerView() {
        const windowWidth = window.innerWidth;
        
        if (windowWidth < 768) {
            swiper.params.slidesPerView = 1;
        } else if (windowWidth < 980) {
            swiper.params.slidesPerView = 2;
        } else {
            swiper.params.slidesPerView = 3;
        }
        
        // Cập nhật Swiper
        swiper.update();
    }
    
    // Gọi hàm cập nhật khi trang load
    updateSlidesPerView();
    
    // Gọi hàm cập nhật khi resize window
    window.addEventListener('resize', function() {
        updateSlidesPerView();
    });
    
    // Thêm class cho navigation buttons để styling
    const nextBtn = document.querySelector('.swiper-button-next');
    const prevBtn = document.querySelector('.swiper-button-prev');
    
    if (nextBtn) nextBtn.classList.add('custom-swiper-nav');
    if (prevBtn) prevBtn.classList.add('custom-swiper-nav');
    
    // Tùy chọn: Ẩn navigation buttons trên mobile
    function toggleNavigationVisibility() {
        const navButtons = document.querySelectorAll('.swiper-button-next, .swiper-button-prev');
        const windowWidth = window.innerWidth;
        
        navButtons.forEach(button => {
            if (windowWidth < 768) {
                button.style.display = 'none';
            } else {
                button.style.display = 'flex';
            }
        });
    }
    
    // Gọi hàm khi load và resize
    toggleNavigationVisibility();
    window.addEventListener('resize', toggleNavigationVisibility);
});

// Hàm tiện ích để khởi tạo Swiper cho các container khác nhau
function initResponsiveSwiper(containerSelector, options = {}) {
    const defaultOptions = {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            980: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'slide',
        speed: 600,
        allowTouchMove: true,
        grabCursor: true,
    };
    
    // Merge options
    const finalOptions = { ...defaultOptions, ...options };
    
    return new Swiper(containerSelector, finalOptions);
}

// Export để sử dụng trong các file khác
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initResponsiveSwiper };
} 