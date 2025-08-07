// Auth Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const authTabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            authTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show/hide forms
            if (targetTab === 'login') {
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
            } else {
                loginForm.classList.add('hidden');
                registerForm.classList.remove('hidden');
            }
        });
    });

    // Form validation
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{10,11}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    function showError(input, message) {
        input.classList.add('error');
        let errorElement = input.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            input.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    function hideError(input) {
        input.classList.remove('error');
        const errorElement = input.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.classList.remove('show');
        }
    }

    // Login form handling
    const loginFormElement = document.getElementById('loginForm');
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail');
            const password = document.getElementById('loginPassword');
            let isValid = true;

            // Clear previous errors
            hideError(email);
            hideError(password);

            // Validate email
            if (!email.value.trim()) {
                showError(email, 'Vui lòng nhập email');
                isValid = false;
            } else if (!validateEmail(email.value)) {
                showError(email, 'Email không hợp lệ');
                isValid = false;
            }

            // Validate password
            if (!password.value.trim()) {
                showError(password, 'Vui lòng nhập mật khẩu');
                isValid = false;
            } else if (!validatePassword(password.value)) {
                showError(password, 'Mật khẩu phải có ít nhất 6 ký tự');
                isValid = false;
            }

            if (isValid) {
                // Here you would typically send the data to your server
                alert('Đăng nhập thành công!');
                // window.location.href = 'index.html';
            }
        });
    }

    // Register form handling
    const registerFormElement = document.getElementById('registerForm');
    if (registerFormElement) {
        registerFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const lastName = document.getElementById('registerLastName');
            const firstName = document.getElementById('registerFirstName');
            const email = document.getElementById('registerEmail');
            const phone = document.getElementById('registerPhone');
            const password = document.getElementById('registerPassword');
            let isValid = true;

            // Clear previous errors
            hideError(lastName);
            hideError(firstName);
            hideError(email);
            hideError(phone);
            hideError(password);

            // Validate last name
            if (!lastName.value.trim()) {
                showError(lastName, 'Vui lòng nhập họ');
                isValid = false;
            }

            // Validate first name
            if (!firstName.value.trim()) {
                showError(firstName, 'Vui lòng nhập tên');
                isValid = false;
            }

            // Validate email
            if (!email.value.trim()) {
                showError(email, 'Vui lòng nhập email');
                isValid = false;
            } else if (!validateEmail(email.value)) {
                showError(email, 'Email không hợp lệ');
                isValid = false;
            }

            // Validate phone
            if (!phone.value.trim()) {
                showError(phone, 'Vui lòng nhập số điện thoại');
                isValid = false;
            } else if (!validatePhone(phone.value)) {
                showError(phone, 'Số điện thoại không hợp lệ');
                isValid = false;
            }

            // Validate password
            if (!password.value.trim()) {
                showError(password, 'Vui lòng nhập mật khẩu');
                isValid = false;
            } else if (!validatePassword(password.value)) {
                showError(password, 'Mật khẩu phải có ít nhất 6 ký tự');
                isValid = false;
            }

            if (isValid) {
                // Here you would typically send the data to your server
                alert('Đăng ký thành công!');
                // Switch to login tab after successful registration
                document.querySelector('[data-tab="login"]').click();
            }
        });
    }

    // Social login handlers
    const facebookBtns = document.querySelectorAll('.facebook-btn');
    const googleBtns = document.querySelectorAll('.google-btn');

    facebookBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Here you would integrate with Facebook SDK
            alert('Chức năng đăng nhập Facebook sẽ được triển khai sau!');
        });
    });

    googleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Here you would integrate with Google SDK
            alert('Chức năng đăng nhập Google sẽ được triển khai sau!');
        });
    });

    // Real-time input validation
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            const value = this.value.trim();
            const inputType = this.type;

            // Clear error when user starts typing
            if (value) {
                hideError(this);
            }

            // Validate based on input type
            if (value) {
                switch (inputType) {
                    case 'email':
                        if (!validateEmail(value)) {
                            showError(this, 'Email không hợp lệ');
                        }
                        break;
                    case 'password':
                        if (!validatePassword(value)) {
                            showError(this, 'Mật khẩu phải có ít nhất 6 ký tự');
                        }
                        break;
                    case 'tel':
                        if (!validatePhone(value)) {
                            showError(this, 'Số điện thoại không hợp lệ');
                        }
                        break;
                }
            }
        });

        // Clear error when user starts typing
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                hideError(this);
            }
        });
    });
}); 