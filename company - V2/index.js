import { products } from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    const promotionContainer = document.getElementById("products");

    if (!promotionContainer) {
        console.error("❌ Error: 'products' container not found!");
        return;
    }

    // ค้นหาสินค้าที่มีส่วนลด
    const discountedProducts = [];
    for (const category in products) {
        products[category].forEach(product => {
            if (product.discountPrice < product.originalPrice) {
                discountedProducts.push(product);
            }
        });
    }

    // จำกัดจำนวนสินค้าโปรโมชั่น (สูงสุด 8 ชิ้น)
    const maxPromotionItems = 8;
    const selectedProducts = discountedProducts.slice(0, maxPromotionItems);

    selectedProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <a href="product-details.html?id=${product.id}" class="product-link">
                <div class="img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="pro-des">
                    <h3>${product.name}</h3>
                    <p class="original-price">${product.originalPrice.toFixed(2)} ฿</p>
                    <p class="discount-price">${product.discountPrice.toFixed(2)} ฿</p>
                </div>
            </a>
            <button class="add-to-cart" 
                data-name="${product.name}" 
                data-price="${product.discountPrice}" 
                data-image="${product.image}">
                Add to Cart
            </button>
        `;

        promotionContainer.appendChild(productElement);
    });
});
