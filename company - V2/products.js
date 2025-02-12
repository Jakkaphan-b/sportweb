import { products } from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products-container");

    if (!productsContainer) {
        console.error("❌ Error: 'products-container' not found!");
        return;
    }

    for (const category in products) {
        if (!products[category] || products[category].length === 0) {
            console.warn(`⚠️ Warning: No products in category '${category}'`);
            continue;
        }

        // สร้างหัวข้อแต่ละหมวดหมู่
        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        productsContainer.appendChild(categoryTitle);

        // สร้าง container สำหรับสินค้าแต่ละหมวด
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("type");

        products[category].forEach(product => {
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

            categoryDiv.appendChild(productElement);
        });

        productsContainer.appendChild(categoryDiv);
    }
});
