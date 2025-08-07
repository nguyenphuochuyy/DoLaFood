// Wishlist Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sample wishlist data (in real app, this would come from localStorage or API)
    let wishlistItems = [
        {
            id: 1,
            name: "Pizza Puff_Gà BBQ Nướng Phô Mai",
            description: "Gà nướng đưa cùng phô mai thơm ngon và sốt Thousand...",
            currentPrice: "89.000₫",
            oldPrice: null,
            image: "https://bizweb.dktcdn.net/thumb/large/100/510/571/products/0003269-pizza-puff-chicken-delig.png?v=1708679416303",
            badge: "new"
        },
        {
            id: 2,
            name: "Gà Nướng BBQ (2 miếng)",
            description: "Thịt gà mềm ngọt, thấm đẫm gia vị, da gà giòn rụm, màu vàng...",
            currentPrice: "99.000₫",
            oldPrice: null,
            image: "https://bizweb.dktcdn.net/thumb/large/100/510/571/products/ga-nuong-bbq-2-mieng.jpg?v=1708679416303",
            badge: null
        },
        {
            id: 3,
            name: "Gà Giòn Xốt Hàn - Truyền thống",
            description: "Gà tẩm bột chiên giòn rụm phủ lớp xốt (có chút vị cay) rất nhẹ...",
            currentPrice: "249.000₫",
            oldPrice: null,
            image: "https://bizweb.dktcdn.net/thumb/large/100/510/571/products/ga-gion-xot-han-truyen-thong.jpg?v=1708679416303",
            badge: "new"
        },
        {
            id: 4,
            name: "Gà Giòn Xốt Hàn - Truyền thống",
            description: "Gà tẩm bột chiên giòn rụm phủ lớp xốt (có chút vị cay) rất nhẹ...",
            currentPrice: "429.000₫",
            oldPrice: null,
            image: "https://bizweb.dktcdn.net/thumb/large/100/510/571/products/ga-gion-xot-han-cao-cap.jpg?v=1708679416303",
            badge: "new"
        },
        {
            id: 5,
            name: "Gà Giòn Xốt Tương Tỏi Hàn Quốc",
            description: "Những miếng gà tươi ngon tắm bột chiên giòn phủ xốt tương tỏi...",
            currentPrice: "99.000₫",
            oldPrice: null,
            image: "https://bizweb.dktcdn.net/thumb/large/100/510/571/products/ga-gion-xot-tuong-toi-han-quoc.jpg?v=1708679416303",
            badge: "new"
        }
    ];

    // Initialize user dropdown functionality
    initializeUserDropdown();

    // Get DOM elements
    const wishlistContainer = document.getElementById('wishlist-items');
    const emptyWishlist = document.getElementById('empty-wishlist');

    // Initialize wishlist
    initializeWishlist();

    function initializeUserDropdown() {
        const userDropdown = document.querySelector('.user-dropdown');
        const userMenu = document.querySelector('.user-menu');
        
        if (userDropdown && userMenu) {
            // Show dropdown on hover
            userDropdown.addEventListener('mouseenter', function() {
                userMenu.style.display = 'block';
                userMenu.style.opacity = '1';
                userMenu.style.visibility = 'visible';
            });
            
            // Hide dropdown when mouse leaves
            userDropdown.addEventListener('mouseleave', function() {
                userMenu.style.opacity = '0';
                userMenu.style.visibility = 'hidden';
                setTimeout(() => {
                    if (userMenu.style.opacity === '0') {
                        userMenu.style.display = 'none';
                    }
                }, 300);
            });
        }
    }

    function initializeWishlist() {
        // Check if wishlist has items
        if (wishlistItems.length === 0) {
            showEmptyWishlist();
        } else {
            renderWishlistItems();
        }
    }

    function showEmptyWishlist() {
        wishlistContainer.style.display = 'none';
        emptyWishlist.style.display = 'block';
    }

    function renderWishlistItems() {
        wishlistContainer.style.display = 'flex';
        emptyWishlist.style.display = 'none';
        
        // Clear existing items
        wishlistContainer.innerHTML = '';
        
        // Render each item
        wishlistItems.forEach(item => {
            const itemHTML = createWishlistItemHTML(item);
            wishlistContainer.innerHTML += itemHTML;
        });
        
        // Attach event listeners after rendering
        attachEventListeners();
    }

    function createWishlistItemHTML(item) {
        const badgeHTML = item.badge ? `
            <div class="product-badges">
                <span class="badge-${item.badge}">${getBadgeText(item.badge)}</span>
            </div>
        ` : '';

        const oldPriceHTML = item.oldPrice ? `
            <span class="old-price">${item.oldPrice}</span>
        ` : '';

        return `
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                <div class="product-card" data-product-id="${item.id}">
                    <div class="product-image-wrapper">
                        <img src="${item.image}" alt="${item.name}" class="product-image" onerror="this.src='assets/images/default-product.jpg'">
                        ${badgeHTML}
                        <button class="wishlist-btn active" data-product-id="${item.id}">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${item.name}</h3>
                        <p class="product-description">${item.description}</p>
                        <p class="product-link">Xem thêm</p>
                        <div class="product-actions">
                            <div class="price-section">
                                <span class="price-label">Giá chỉ từ</span>
                                <span class="current-price">${item.currentPrice}</span>
                                ${oldPriceHTML}
                            </div>
                            <button class="add-to-cart-btn" data-product-id="${item.id}">
                                Thêm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function getBadgeText(badge) {
        const badgeTexts = {
            'new': 'Mới',
            'sale': '-20%',
            'bestseller': 'Bán chạy'
        };
        return badgeTexts[badge] || '';
    }

    function attachEventListeners() {
        // Wishlist buttons
        const wishlistBtns = document.querySelectorAll('.wishlist-btn');
        wishlistBtns.forEach(btn => {
            btn.addEventListener('click', handleWishlistToggle);
        });

        // Add to cart buttons
        const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', handleAddToCart);
        });
    }

    function handleWishlistToggle(event) {
        event.preventDefault();
        const productId = parseInt(event.currentTarget.getAttribute('data-product-id'));
        const productCard = event.currentTarget.closest('.product-card');
        
        // Add removal animation
        productCard.style.transform = 'scale(0.9)';
        productCard.style.opacity = '0.7';
        
        setTimeout(() => {
            // Remove item from wishlist
            wishlistItems = wishlistItems.filter(item => item.id !== productId);
            
            // Show notification
            showNotification(`Đã xóa khỏi danh sách yêu thích`, 'success');
            
            // Update localStorage (if using)
            updateWishlistStorage();
            
            // Re-render wishlist
            initializeWishlist();
        }, 300);
    }

    function handleAddToCart(event) {
        event.preventDefault();
        const productId = parseInt(event.currentTarget.getAttribute('data-product-id'));
        const btn = event.currentTarget;
        const productCard = btn.closest('.product-card');
        
        // Add loading state
        btn.classList.add('loading');
        btn.innerHTML = '<i class="fas fa-spinner"></i> Đang thêm...';
        
        // Simulate API call
        setTimeout(() => {
            // Remove loading state
            btn.classList.remove('loading');
            btn.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
            
            // Add success state
            productCard.classList.add('added-to-cart');
            
            // Update cart count (if cart system exists)
            updateCartCount();
            
            // Show notification
            showNotification('Đã thêm vào giỏ hàng!', 'success');
            
            // Reset button after 2 seconds
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-plus"></i> Thêm';
                productCard.classList.remove('added-to-cart');
            }, 2000);
            
        }, 1000);
    }

    function updateCartCount() {
        const cartCountElement = document.querySelector('.cart-count');
        if (cartCountElement) {
            let currentCount = parseInt(cartCountElement.textContent) || 0;
            cartCountElement.textContent = currentCount + 1;
        }
    }

    function updateWishlistStorage() {
        // Save to localStorage
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }

    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#006a31' : '#007bff'};
            color: white;
            padding: 12px 20px;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;
        
        // Add to body
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Add CSS animations for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .notification-content i {
            font-size: 16px;
        }
    `;
    document.head.appendChild(style);

    // Search functionality (if search box exists)
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            filterWishlistItems(searchTerm);
        });
    }

    function filterWishlistItems(searchTerm) {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            const description = card.querySelector('.product-description').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.closest('.col-lg-3').style.display = 'block';
            } else {
                card.closest('.col-lg-3').style.display = 'none';
            }
        });
    }

    // Load wishlist from localStorage on page load
    function loadWishlistFromStorage() {
        const savedWishlist = localStorage.getItem('wishlistItems');
        if (savedWishlist) {
            try {
                wishlistItems = JSON.parse(savedWishlist);
            } catch (e) {
                console.log('Error loading wishlist from storage:', e);
            }
        }
    }

    // Initialize from storage
    loadWishlistFromStorage();
    
    // Export functions for external use
    window.WishlistManager = {
        addToWishlist: function(productData) {
            wishlistItems.push(productData);
            updateWishlistStorage();
            renderWishlistItems();
        },
        
        removeFromWishlist: function(productId) {
            wishlistItems = wishlistItems.filter(item => item.id !== productId);
            updateWishlistStorage();
            initializeWishlist();
        },
        
        getWishlistItems: function() {
            return wishlistItems;
        },
        
        clearWishlist: function() {
            wishlistItems = [];
            updateWishlistStorage();
            showEmptyWishlist();
        }
    };
}); 