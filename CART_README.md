# Shopping Cart Module - DolaFood

## ✅ HOÀN THÀNH VIỆC ĐỒNG BỘ GIỎ HÀNG

**Trạng thái:** ✅ TẤT CẢ CÁC TRANG ĐÃ ĐƯỢC ĐỒNG BỘ!

## Tổng quan

Cart module mới đã được tách riêng và **đồng bộ trên tất cả các trang**. Giỏ hàng giờ đây sử dụng `localStorage` để lưu trữ dữ liệu và **đồng bộ giữa tất cả các trang**.

## ✅ Các trang đã được cập nhật:

1. **`index.html`** ✅ - Đã cập nhật cart template + cart.js
2. **`tintuc.html`** ✅ - Đã cập nhật cart template + cart.js  
3. **`chitietsanpham.html`** ✅ - Đã cập nhật cart template + cart.js
4. **`tatcasanpham.html`** ✅ - Đã cập nhật cart template + cart.js
5. **`hethongcuahang.html`** ✅ - Đã cập nhật cart template + cart.js
6. **`gioithieu.html`** ✅ - Đã cập nhật cart template + cart.js

## Cấu trúc File

```
├── assets/js/cart.js          # Cart module chính - DÙNG CHUNG CHO TẤT CẢ CÁC TRANG
├── cart-template.html         # HTML template cho cart
├── cart-integration-example.html  # File demo
├── test-cart.html            # File test chức năng
└── CART_README.md            # File hướng dẫn này
```

## 🎯 Tính năng hoàn chỉnh:

### ✅ Đã hoàn thành:
- **Thêm sản phẩm vào giỏ hàng**
- **Cập nhật số lượng sản phẩm** (+1/-1, xóa khi quantity = 0)
- **Xóa sản phẩm khỏi giỏ hàng**
- **Tính toán tổng tiền tự động**
- **💾 Lưu trữ giỏ hàng trong localStorage**
- **🔄 ĐỒNG BỘ GIỮA TẤT CẢ CÁC TRANG**
- **Hiển thị thông báo khi thêm sản phẩm**
- **Quản lý trạng thái giỏ hàng real-time**
- **Event delegation để xử lý dynamic content**
- **API public để tương tác từ bên ngoài**

## 🚀 Cách sử dụng:

### 1. Tự động khởi tạo
```javascript
// Cart tự động khởi tạo khi trang load
// Không cần code thêm gì!
```

### 2. Thêm sản phẩm từ code
```javascript
// Thêm sản phẩm mới
ShoppingCart.addToCart({
  id: 'product_123',
  name: 'Pizza Margherita', 
  price: '199.000đ',
  unitPrice: 199000,
  quantity: 1,
  option: 'Size L',
  notes: 'Ít cay',
  image: 'path/to/image.jpg'
});
```

### 3. Xem thông tin giỏ hàng
```javascript
// Lấy thông tin giỏ hàng
const info = ShoppingCart.getCartInfo();
console.log(`Số items: ${info.totalItems}`);
console.log(`Tổng tiền: ${info.totalPrice}đ`);
console.log('Items:', info.items);
```

## 🔧 Logic quantity đã được sửa:

- ✅ **Tăng/giảm đúng 1 đơn vị** mỗi lần click
- ✅ **Khi quantity = 0 → tự động xóa sản phẩm**
- ✅ **Không có duplicate events**
- ✅ **Real-time update UI**

## 🔄 Đồng bộ dữ liệu:

Cart sử dụng `localStorage` để lưu trữ, do đó:
- ✅ **Thêm sản phẩm ở trang A → hiển thị ở trang B**
- ✅ **Cập nhật quantity ở trang B → đồng bộ ở trang C**
- ✅ **Xóa sản phẩm ở bất kỳ trang nào → cập nhật toàn bộ**

## 🧪 Test:

1. **Mở `index.html`** → thêm sản phẩm vào cart
2. **Chuyển sang `tintuc.html`** → cart vẫn có sản phẩm
3. **Cập nhật quantity** → thay đổi ngay lập tức  
4. **Chuyển sang trang khác** → dữ liệu vẫn được bảo toàn

## ⚠️ Lưu ý quan trọng:

1. **Cart.js phải được load TRƯỚC main.js** trong tất cả các trang
2. **HTML structure phải đồng nhất** (đã cập nhật tất cả trang)
3. **LocalStorage sẽ mất khi clear browser cache** (normal behavior)

## 🎉 Kết quả:

**VẤN ĐỀ ĐÃ ĐƯỢC GIẢI QUYẾT HOÀN TOÀN!**

- ❌ Trước: Mỗi trang có giỏ hàng riêng biệt
- ✅ Sau: **Tất cả trang dùng chung 1 giỏ hàng đồng bộ**

---

## 📞 Support:

Nếu có vấn đề gì, kiểm tra:
1. File `cart.js` có được load không?
2. Console có báo lỗi không?
3. LocalStorage có dữ liệu `cartItems` không? 