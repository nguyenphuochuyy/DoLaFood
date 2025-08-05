/**
 * Shopping Cart Module
 * Quản lý tất cả logic liên quan đến giỏ hàng
 */

class ShoppingCart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('cartItems')) || [];
    this.handleDocumentClick = null; // Track event handler for cleanup
    this.init();
  }

  /**
   * Khởi tạo giỏ hàng
   */
  init() {
    this.bindEvents();
    this.updateCartDisplay();
  }

  /**
   * Bind events cho giỏ hàng
   */
  bindEvents() {
    // Remove any existing event listeners to prevent duplicates
    document.removeEventListener('click', this.handleDocumentClick);
    
    // Bind new event listener
    this.handleDocumentClick = (e) => {
      // Xử lý nút quantity
      if (e.target.classList.contains('quantity-btn')) {
        e.preventDefault();
        e.stopPropagation();
        this.handleQuantityClick(e);
      }

      // Xử lý nút xóa
      if (e.target.classList.contains('cart-item-note')) {
        e.preventDefault();
        e.stopPropagation();
        this.handleDeleteClick(e);
      }

      // Xử lý click vào icon giỏ hàng
      if (e.target.classList.contains('fa-cart-shopping')) {
        this.handleCartIconClick(e);
      }
    };
    
    document.addEventListener('click', this.handleDocumentClick);

    // Xử lý submit form search
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSearch(e);
      });
    }
  }

  /**
   * Xử lý click nút quantity
   */
  handleQuantityClick(e) {
    const button = e.target;
    const isPlus = button.classList.contains('plus');
    const quantityValue = button.parentElement.querySelector('.quantity-value');
    const cartItemPrice = button.closest('.cart-item').querySelector('.cart-item-price');
    const cartItem = button.closest('.cart-item');
    
    if (!quantityValue || !cartItemPrice || !cartItem) {
      console.error('Could not find required elements');
      return;
    }

    const itemId = cartItem.dataset.itemId;
    let currentQuantity = parseInt(quantityValue.textContent);
    
    // Lấy giá đơn vị từ data attribute
    const unitPrice = parseInt(cartItem.dataset.unitPrice);
    
    if (!unitPrice) {
      console.error('Unit price not found');
      return;
    }

    // Tăng hoặc giảm 1 đơn vị
    if (isPlus) {
      currentQuantity += 1;
    } else {
      currentQuantity -= 1;
    }

    // Nếu quantity = 0 thì xóa sản phẩm
    if (currentQuantity <= 0) {
      this.handleDeleteClick(e);
      return;
    }

    // Cập nhật UI
    quantityValue.textContent = currentQuantity;
    const newPrice = (unitPrice * currentQuantity).toLocaleString('vi-VN');
    cartItemPrice.textContent = newPrice + 'đ';

    // Cập nhật localStorage
    this.updateItemQuantity(itemId, currentQuantity);
    
    // Cập nhật tổng tiền
    this.updateCartTotal();

    console.log('Quantity updated:', currentQuantity);
  }

  /**
   * Xử lý click nút xóa
   */
  handleDeleteClick(e) {
    const cartItem = e.target.closest('.cart-item');
    if (!cartItem) return;

    const itemId = cartItem.dataset.itemId;
    
    // Xóa khỏi UI
    cartItem.remove();
    
    // Xóa khỏi localStorage
    this.removeItem(itemId);
    
    // Cập nhật hiển thị
    this.updateCartCount();
    this.updateCartTotal();

    console.log('Item deleted:', itemId);
  }

  /**
   * Xử lý click icon giỏ hàng
   */
  handleCartIconClick(e) {
    console.log('Cart clicked');
    // Có thể thêm logic mở modal cart hoặc redirect
  }

  /**
   * Xử lý tìm kiếm
   */
  handleSearch(e) {
    const searchInput = e.target.querySelector('.search-input');
    if (!searchInput) return;

    const query = searchInput.value.trim();
    if (query) {
      console.log('Searching for:', query);
      // Thêm logic search ở đây
    }
  }

  /**
   * Thêm sản phẩm vào giỏ hàng
   */
  addItem(product) {
    const existingItem = this.items.find(item => 
      item.id === product.id && 
      item.option === product.option
    );

    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      const newItem = {
        id: product.id || this.generateId(),
        name: product.name,
        price: product.price,
        unitPrice: product.unitPrice || this.parsePrice(product.price),
        quantity: product.quantity || 1,
        option: product.option || '',
        notes: product.notes || '',
        image: product.image || '',
        addedAt: new Date().toISOString()
      };
      this.items.push(newItem);
    }

    this.saveToStorage();
    this.updateCartDisplay();
    
    // Hiển thị thông báo
    this.showNotification(`Đã thêm ${product.quantity || 1} ${product.name} vào giỏ hàng!`);
  }

  /**
   * Cập nhật số lượng sản phẩm
   */
  updateItemQuantity(itemId, quantity) {
    const item = this.items.find(item => item.id === itemId);
    if (item) {
      item.quantity = quantity;
      this.saveToStorage();
    }
  }

  /**
   * Xóa sản phẩm khỏi giỏ hàng
   */
  removeItem(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
    this.saveToStorage();
  }

  /**
   * Xóa toàn bộ giỏ hàng
   */
  clearCart() {
    this.items = [];
    this.saveToStorage();
    this.updateCartDisplay();
  }

  /**
   * Lấy tổng số lượng sản phẩm
   */
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  /**
   * Lấy tổng tiền
   */
  getTotalPrice() {
    return this.items.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
  }

  /**
   * Cập nhật hiển thị giỏ hàng
   */
  updateCartDisplay() {
    this.updateCartCount();
    this.updateCartItems();
    this.updateCartTotal();
  }

  /**
   * Cập nhật số lượng sản phẩm hiển thị
   */
  updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = this.getTotalItems();
    
    cartCountElements.forEach(element => {
      element.textContent = totalItems;
    });
  }

  /**
   * Cập nhật danh sách sản phẩm trong giỏ hàng
   */
  updateCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    if (!cartItemsContainer) return;

    if (this.items.length === 0) {
      cartItemsContainer.innerHTML = '<p class="empty-cart">Giỏ hàng trống</p>';
      return;
    }

    cartItemsContainer.innerHTML = this.items.map(item => this.renderCartItem(item)).join('');
    
    // Re-bind events after rendering new items
    setTimeout(() => {
      this.bindEvents();
    }, 100);
  }

  /**
   * Render một item trong giỏ hàng
   */
  renderCartItem(item) {
    const totalPrice = (item.unitPrice * item.quantity).toLocaleString('vi-VN');
    return `
      <div class="cart-item" data-item-id="${item.id}" data-unit-price="${item.unitPrice}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <h6 class="cart-item-name">${item.name}</h6>
          <div class="cart-item-options">
            ${item.option ? `<span class="cart-item-size">${item.option}</span>` : ''}
            <span class="cart-item-note">Xóa</span>
          </div>
          <div class="cart-item-controls">
            <div class="cart-item-quantity">
              <button class="quantity-btn minus">-</button>
              <span class="quantity-value">${item.quantity}</span>
              <button class="quantity-btn plus">+</button>
            </div>
            <div class="cart-item-price">${totalPrice}đ</div>
          </div>
          ${item.notes ? `<div class="cart-item-notes">Ghi chú: ${item.notes}</div>` : ''}
        </div>
      </div>
    `;
  }

  /**
   * Cập nhật tổng tiền
   */
  updateCartTotal() {
    const totalElements = document.querySelectorAll('.total-price');
    const totalPrice = this.getTotalPrice().toLocaleString('vi-VN');
    
    totalElements.forEach(element => {
      element.textContent = totalPrice + 'đ';
    });
  }

  /**
   * Lưu vào localStorage
   */
  saveToStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  /**
   * Hiển thị thông báo
   */
  showNotification(message) {
    // Tạo notification element
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #006a31;
      color: white;
      padding: 12px 20px;
      border-radius: 4px;
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Animate out and remove
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  /**
   * Utility: Generate unique ID
   */
  generateId() {
    return 'cart_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  /**
   * Utility: Parse price string to number
   */
  parsePrice(priceString) {
    return parseInt(priceString.replace(/[^\d]/g, '')) || 0;
  }

  /**
   * Utility: Get unit price from total price and quantity
   */
  getUnitPrice(totalPriceString, quantity) {
    const totalPrice = this.parsePrice(totalPriceString);
    return Math.round(totalPrice / quantity);
  }

  /**
   * Public API: Thêm sản phẩm (để gọi từ bên ngoài)
   */
  static addToCart(productData) {
    if (window.cart) {
      window.cart.addItem(productData);
    }
  }

  /**
   * Public API: Lấy thông tin giỏ hàng
   */
  static getCartInfo() {
    if (window.cart) {
      return {
        items: window.cart.items,
        totalItems: window.cart.getTotalItems(),
        totalPrice: window.cart.getTotalPrice()
      };
    }
    return null;
  }
}

// Initialize cart when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.cart = new ShoppingCart();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ShoppingCart;
} 