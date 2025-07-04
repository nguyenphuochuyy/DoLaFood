# Responsive Swiper Configuration

## Mô tả
File JavaScript và CSS để tạo Swiper responsive với các breakpoint tùy chỉnh và navigation buttons.

## Tính năng
- **Responsive breakpoints:**
  - Mobile (< 768px): Hiển thị 1 item
  - Tablet (768px - 979px): Hiển thị 2 items  
  - Desktop (>= 980px): Hiển thị 3 items
- **Navigation buttons** với styling đẹp
- **Pagination** có thể click
- **Auto-play** với delay 3 giây
- **Touch/swipe support** cho mobile
- **Responsive navigation** (ẩn trên mobile)

## Cách sử dụng

### 1. Thêm CSS và JS vào HTML
```html
<!-- Swiper CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">

<!-- Custom CSS -->
<link rel="stylesheet" href="assets/css/swiper-responsive.css">

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

<!-- Custom JS -->
<script src="assets/js/responsive-swiper.js"></script>
```

### 2. HTML Structure
```html
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <!-- Thêm slides khác... -->
    </div>
    
    <!-- Navigation buttons -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    
    <!-- Pagination -->
    <div class="swiper-pagination"></div>
</div>
```

### 3. Khởi tạo Swiper
File `responsive-swiper.js` sẽ tự động khởi tạo Swiper cho tất cả elements có class `.swiper-container`.

### 4. Tùy chỉnh cho nhiều Swiper
```javascript
// Khởi tạo Swiper với options tùy chỉnh
const customSwiper = initResponsiveSwiper('.custom-swiper', {
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 30,
});
```

## Cấu hình

### Breakpoints
- **768px**: Chuyển từ 1 sang 2 items
- **980px**: Chuyển từ 2 sang 3 items

### Options mặc định
```javascript
{
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
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
}
```

## Styling

### Navigation Buttons
- Hình tròn với background trắng
- Hover effect với scale và shadow
- Responsive size (35px mobile, 40px tablet, 45px desktop)
- Ẩn trên mobile (< 768px)

### Pagination
- Bullets có thể click
- Active bullet có màu xanh và scale effect
- Responsive margin

### Slides
- Border radius và shadow
- Hover effect với translateY
- Animation khi slide active

## Browser Support
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- Touch devices support

## Accessibility
- Focus states cho navigation buttons
- High contrast mode support
- Keyboard navigation
- Screen reader friendly

## Demo
Mở file `swiper-demo.html` để xem demo hoạt động.

## Tùy chỉnh
Để thay đổi breakpoints, chỉnh sửa trong file `responsive-swiper.js`:
```javascript
breakpoints: {
    768: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    980: {
        slidesPerView: 3,
        spaceBetween: 30,
    }
}
```

## Troubleshooting
1. **Swiper không hoạt động**: Kiểm tra đã load Swiper JS chưa
2. **Navigation buttons không hiển thị**: Kiểm tra CSS có bị conflict không
3. **Responsive không hoạt động**: Kiểm tra viewport meta tag
4. **Performance issues**: Giảm số lượng slides hoặc tắt autoplay 