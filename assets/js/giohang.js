// Cart Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize cart functionality
    initializeCartPage();
    
    function initializeCartPage() {
        setupQuantityControls();
        setupCheckboxToggle();
        setupFormValidation();
        calculateTotals();
    }
    
    // Quantity Controls
    function setupQuantityControls() {
        const quantityBtns = document.querySelectorAll('.quantity-btn');
        const quantityInputs = document.querySelectorAll('.quantity-input');
        
        quantityBtns.forEach(btn => {
            btn.addEventListener('click', function() {
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
            });
            
            input.addEventListener('blur', function() {
                let value = parseInt(this.value) || 1;
                if (value < 1) value = 1;
                this.value = value;
                updateItemTotal(this);
                calculateTotals();
            });
        });
    }
    
    // Update individual item total
    function updateItemTotal(quantityInput) {
        const cartItem = quantityInput.closest('.cart-item');
        const unitPriceElement = cartItem.querySelector('.unit-price .price');
        const totalPriceElement = cartItem.querySelector('.total-item-price');
        
        const unitPrice = parseFloat(unitPriceElement.textContent.replace(/[^\d]/g, ''));
        const quantity = parseInt(quantityInput.value) || 1;
        const total = unitPrice * quantity;
        
        totalPriceElement.textContent = formatPrice(total);
    }
    
    // Calculate totals
    function calculateTotals() {
        const totalPriceElements = document.querySelectorAll('.total-item-price');
        let grandTotal = 0;
        
        totalPriceElements.forEach(element => {
            const price = parseFloat(element.textContent.replace(/[^\d]/g, ''));
            grandTotal += price;
        });
        
        // Update cart total
        const totalAmountElement = document.querySelector('.total-amount');
        if (totalAmountElement) {
            totalAmountElement.textContent = formatPrice(grandTotal);
        }
        
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
        const companyFields = document.querySelectorAll('#company-name, #tax-code, #company-address, #invoice-email');
        
        if (invoiceCheckbox) {
            invoiceCheckbox.addEventListener('change', function() {
                const isChecked = this.checked;
                
                companyFields.forEach(field => {
                    if (isChecked) {
                        field.setAttribute('required', '');
                        field.closest('.form-group').style.display = 'block';
                    } else {
                        field.removeAttribute('required');
                        field.value = '';
                    }
                });
            });
            
            // Initial state
            companyFields.forEach(field => {
                if (!invoiceCheckbox.checked) {
                    field.removeAttribute('required');
                }
            });
        }
    }
    
    // Setup form validation
    function setupFormValidation() {
        const deliveryForm = document.querySelector('.delivery-form');
        const checkoutBtn = document.querySelector('.btn-checkout');
        
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', function(e) {
                if (!validateDeliveryForm()) {
                    e.preventDefault();
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
            
            // Simulate success
            alert('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
            
            // Reset form
            // window.location.href = 'index.html';
            
            // Reset button state
            checkoutBtn.textContent = originalText;
            checkoutBtn.disabled = false;
            
        }, 2000);
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
            const unitPrice = parseFloat(item.querySelector('.unit-price .price').textContent.replace(/[^\d]/g, ''));
            const quantity = parseInt(item.querySelector('.quantity-input').value);
            const total = parseFloat(item.querySelector('.total-item-price').textContent.replace(/[^\d]/g, ''));
            
            cartItems.push({
                name: productName,
                unitPrice: unitPrice,
                quantity: quantity,
                total: total
            });
        });
        
        const grandTotal = parseFloat(document.querySelector('.total-amount').textContent.replace(/[^\d]/g, ''));
        
        return {
            items: cartItems,
            total: grandTotal
        };
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
    
    // Mobile menu toggle (if needed)
    const openMenuBtn = document.getElementById('openMenu');
    if (openMenuBtn) {
        openMenuBtn.addEventListener('click', function() {
            // Toggle mobile menu logic here
            console.log('Mobile menu toggled');
        });
    }
    
    // Animation on scroll (optional)
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