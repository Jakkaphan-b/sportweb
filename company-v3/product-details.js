import { products } from './data.js';

// ดึงค่า `id` จาก URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// ค้นหาสินค้าที่ตรงกับ `id`
let selectedProduct = null;
for (const category in products) {
    selectedProduct = products[category].find(product => product.id === productId);
    if (selectedProduct) break;
}

document.addEventListener("DOMContentLoaded", () => {
    const productDetailsContainer = document.getElementById("product-details");

    if (!selectedProduct) {
        productDetailsContainer.innerHTML = "<h2>Product Not Found</h2>";
        return;
    }

    productDetailsContainer.innerHTML = `
        <div class="product-details">
            <div class="img">
                <img src="${selectedProduct.image}" alt="${selectedProduct.name}">
            </div>
            <div class="pro-info">
                <h2>${selectedProduct.name}</h2>
                <p class="original-price">Original Price: ฿${selectedProduct.originalPrice.toFixed(2)}</p>
                <p class="discount-price">Discount Price: ฿${selectedProduct.discountPrice.toFixed(2)}</p>
                <p>Choose Size:
                    <select id="size-select">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </p>
                <p>Quantity: <input type="number" id="quantity" value="1" min="1"></p>
                <button id="add-to-cart">Add to Cart</button>
            </div>
        </div>
    `;

    // เพิ่มสินค้าไปยังตะกร้า
    document.getElementById("add-to-cart").addEventListener("click", () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const selectedSize = document.getElementById("size-select").value;
        const quantity = parseInt(document.getElementById("quantity").value);

        const product = {
            name: selectedProduct.name,
            price: selectedProduct.discountPrice,
            image: selectedProduct.image,
            size: selectedSize,
            quantity: quantity
        };

        // ตรวจสอบว่าสินค้าซ้ำหรือไม่
        const existingProduct = cart.find(item => item.name === product.name && item.size === selectedSize);
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Added to Cart!");
    });
    
});
