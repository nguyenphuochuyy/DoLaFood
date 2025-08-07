// Cart Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize cart functionality
    initializeCartPage();
    
    function initializeCartPage() {
        setupQuantityControls();
        setupCheckboxToggle();
        setupFormValidation();
        setupDeleteButtons();
        calculateTotals();
        loadCartData();
    }
    
    // Load cart data from localStorage or create sample data
    function loadCartData() {
        // For demo purposes, we'll keep the sample data
        // In a real app, you would load from localStorage or API
        calculateTotals();
    }
    
    // Setup delete buttons
    function setupDeleteButtons() {
        const deleteButtons = document.querySelectorAll('.product-details .delete-btn');
        
        deleteButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const cartItem = this.closest('.cart-item');
                if (confirm('Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?')) {
                    cartItem.remove();
                    calculateTotals();
                    updateCartCount();
                }
            });
        });
    }
    
    // Quantity Controls
    function setupQuantityControls() {
        const quantityBtns = document.querySelectorAll('.quantity-btn');
        const quantityInputs = document.querySelectorAll('.quantity-input');
        
        quantityBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const input = this.parentElement.querySelector('.quantity-input');
                const isPlus = this.classList.contains('plus');
                const isMinus = this.classList.contains('minus');
                
                let currentValue = parseInt(input.value) || 1;
                
                if (isPlus) {
                    currentValue++;
                } else if (isMinus && currentValue > 1) {
                    currentValue--;
                }
                
                input.value = currentValue;
                updateItemTotal(input);
                calculateTotals();
                updateCartCount();
            });
        });
        
        // Handle direct input changes
        quantityInputs.forEach(input => {
            input.addEventListener('change', function() {
                let value = parseInt(this.value) || 1;
                if (value < 1) value = 1;
                this.value = value;
                updateItemTotal(this);
                calculateTotals();
                updateCartCount();
            });
            
            input.addEventListener('blur', function() {
                let value = parseInt(this.value) || 1;
                if (value < 1) value = 1;
                this.value = value;
                updateItemTotal(this);
                calculateTotals();
                updateCartCount();
            });
        });
    }
    
    // Update individual item total
    function updateItemTotal(quantityInput) {
        const cartItem = quantityInput.closest('.cart-item');
        const unitPriceElement = cartItem.querySelector('.unit-price .price');
        const totalPriceElement = cartItem.querySelector('.total-item-price');
        
        // Get unit price from data attribute
        const unitPrice = parseInt(cartItem.dataset.unitPrice) || 0;
        const quantity = parseInt(quantityInput.value) || 1;
        const total = unitPrice * quantity;
        
        totalPriceElement.textContent = formatPrice(total);
    }
    
    // Calculate totals
    function calculateTotals() {
        const cartItems = document.querySelectorAll('.cart-item');
        let grandTotal = 0;
        
        cartItems.forEach(item => {
            const unitPrice = parseInt(item.dataset.unitPrice) || 0;
            const quantity = parseInt(item.querySelector('.quantity-input').value) || 1;
            grandTotal += unitPrice * quantity;
        });
        
        // Update all total amount elements
        const totalAmountElements = document.querySelectorAll('.total-amount');
        totalAmountElements.forEach(element => {
            element.textContent = formatPrice(grandTotal);
        });
        
        // Update cart count in header
        updateCartCount();
    }
    
    // Update cart count in header
    function updateCartCount() {
        const quantityInputs = document.querySelectorAll('.quantity-input');
        let totalItems = 0;
        
        quantityInputs.forEach(input => {
            totalItems += parseInt(input.value) || 0;
        });
        
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(element => {
            element.textContent = totalItems;
        });
    }
    
    // Format price
    function formatPrice(price) {
        return new Intl.NumberFormat('vi-VN').format(price) + '₫';
    }
    
    // Setup checkbox toggle for invoice
    function setupCheckboxToggle() {
        const invoiceCheckbox = document.getElementById('invoice-needed');
        const companyFields = document.querySelector('.company-fields');
        const companyInputs = document.querySelectorAll('#company-name, #tax-code, #company-address, #invoice-email');
        
        if (invoiceCheckbox && companyFields) {
            invoiceCheckbox.addEventListener('change', function() {
                const isChecked = this.checked;
                
                if (isChecked) {
                    companyFields.style.display = 'block';
                    companyInputs.forEach(input => {
                        input.setAttribute('required', '');
                    });
                } else {
                    companyFields.style.display = 'none';
                    companyInputs.forEach(input => {
                        input.removeAttribute('required');
                        input.value = '';
                    });
                }
            });
            
            // Initial state
            if (!invoiceCheckbox.checked) {
                companyFields.style.display = 'none';
                companyInputs.forEach(input => {
                    input.removeAttribute('required');
                });
            }
        }
    }
    
    // Setup form validation
    function setupFormValidation() {
        const checkoutBtn = document.querySelector('.btn-checkout');
        
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (!validateDeliveryForm()) {
                    return;
                }
                
                // Process checkout
                processCheckout();
            });
        }
    }
    
    // Validate delivery form
    function validateDeliveryForm() {
        const deliveryDate = document.getElementById('delivery-date');
        const deliveryTime = document.getElementById('delivery-time');
        const invoiceCheckbox = document.getElementById('invoice-needed');
        
        let isValid = true;
        let errorMessage = '';
        
        // Validate delivery date and time
        if (!deliveryDate.value) {
            errorMessage += 'Vui lòng chọn ngày giao hàng.\n';
            isValid = false;
        }
        
        if (!deliveryTime.value) {
            errorMessage += 'Vui lòng chọn thời gian giao hàng.\n';
            isValid = false;
        }
        
        // Validate company info if invoice is needed
        if (invoiceCheckbox && invoiceCheckbox.checked) {
            const companyName = document.getElementById('company-name');
            const taxCode = document.getElementById('tax-code');
            const companyAddress = document.getElementById('company-address');
            const invoiceEmail = document.getElementById('invoice-email');
            
            if (!companyName.value.trim()) {
                errorMessage += 'Vui lòng nhập tên công ty.\n';
                isValid = false;
            }
            
            if (!taxCode.value.trim()) {
                errorMessage += 'Vui lòng nhập mã số thuế.\n';
                isValid = false;
            }
            
            if (!companyAddress.value.trim()) {
                errorMessage += 'Vui lòng nhập địa chỉ công ty.\n';
                isValid = false;
            }
            
            if (!invoiceEmail.value.trim()) {
                errorMessage += 'Vui lòng nhập email nhận hóa đơn.\n';
                isValid = false;
            } else if (!isValidEmail(invoiceEmail.value)) {
                errorMessage += 'Email không hợp lệ.\n';
                isValid = false;
            }
        }
        
        if (!isValid) {
            alert(errorMessage);
        }
        
        return isValid;
    }
    
    // Validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Process checkout
    function processCheckout() {
        // Show loading state
        const checkoutBtn = document.querySelector('.btn-checkout');
        const originalText = checkoutBtn.textContent;
        checkoutBtn.textContent = 'Đang xử lý...';
        checkoutBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Get form data
            const formData = collectFormData();
            const cartData = collectCartData();
            
            // In a real application, you would send this data to your server
            console.log('Checkout Data:', {
                cart: cartData,
                delivery: formData
            });
            
            // Show success notification
            showSuccessNotification('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
            
            // Reset form (optional)
            // clearCart();
            
            // Reset button state
            checkoutBtn.textContent = originalText;
            checkoutBtn.disabled = false;
            
        }, 2000);
    }
    
    // Show success notification
    function showSuccessNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'success-notification';
        notification.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="fas fa-check-circle me-2"></i>
                <span>${message}</span>
            </div>
        `;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #006a31;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
    
    // Collect form data
    function collectFormData() {
        const deliveryDate = document.getElementById('delivery-date').value;
        const deliveryTime = document.getElementById('delivery-time').value;
        const invoiceNeeded = document.getElementById('invoice-needed').checked;
        
        const formData = {
            deliveryDate: deliveryDate,
            deliveryTime: deliveryTime,
            invoiceNeeded: invoiceNeeded
        };
        
        if (invoiceNeeded) {
            formData.companyName = document.getElementById('company-name').value;
            formData.taxCode = document.getElementById('tax-code').value;
            formData.companyAddress = document.getElementById('company-address').value;
            formData.invoiceEmail = document.getElementById('invoice-email').value;
        }
        
        return formData;
    }
    
    // Collect cart data
    function collectCartData() {
        const cartItems = [];
        const cartItemElements = document.querySelectorAll('.cart-item');
        
        cartItemElements.forEach(item => {
            const productName = item.querySelector('.product-name').textContent;
            const unitPrice = parseInt(item.dataset.unitPrice) || 0;
            const quantity = parseInt(item.querySelector('.quantity-input').value);
            const total = unitPrice * quantity;
            
            cartItems.push({
                name: productName,
                unitPrice: unitPrice,
                quantity: quantity,
                total: total
            });
        });
        
        const grandTotal = cartItems.reduce((sum, item) => sum + item.total, 0);
        
        return {
            items: cartItems,
            total: grandTotal
        };
    }
    
    // Clear cart
    function clearCart() {
        const cartTableBody = document.getElementById('cart-table-body');
        cartTableBody.innerHTML = '<tr><td colspan="4" class="text-center py-4">Giỏ hàng trống</td></tr>';
        calculateTotals();
    }
    
    // Set minimum date to today
    function setMinimumDate() {
        const deliveryDate = document.getElementById('delivery-date');
        if (deliveryDate) {
            const today = new Date();
            const todayString = today.toISOString().split('T')[0];
            deliveryDate.setAttribute('min', todayString);
        }
    }
    
    // Initialize minimum date
    setMinimumDate();
    
    // Animation on scroll
    function addScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        const animatableElements = document.querySelectorAll('.cart-table-wrapper, .delivery-form-wrapper');
        animatableElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    // Initialize scroll animations
    addScrollAnimations();
});

// CSS for animations (add to CSS file)
const animationCSS = `
.cart-table-wrapper,
.delivery-form-wrapper {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.cart-table-wrapper.animate-in,
.delivery-form-wrapper.animate-in {
    opacity: 1;
    transform: translateY(0);
}
`;

// Add animation CSS to head
const style = document.createElement('style');
style.textContent = animationCSS;
document.head.appendChild(style); 