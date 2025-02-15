document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");
    const clearCartButton = document.getElementById("clear-cart");
    const confirmButton = document.getElementById("confirm");

    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cart.forEach((product, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td><input type="checkbox" class="select-item" data-index="${index}"></td>
                <td><img src="${product.image}" width="50"></td>
                <td>${product.name}</td>
                <td>${product.size}</td>
                <td>$${product.price}</td>
                <td><input type="number" class="quantity-input" data-index="${index}" value="${product.quantity}" min="1"></td>
                <td class="total-price">$${(product.price * product.quantity).toFixed(2)}</td>
                <td><button class="remove-item" data-index="${index}">Remove</button></td>
            `;

            cartList.appendChild(row);
            total += product.price * product.quantity;
        });

        cartTotal.textContent = total.toFixed(2);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // อัปเดตจำนวนสินค้า
    cartList.addEventListener("input", (event) => {
        if (event.target.classList.contains("quantity-input")) {
            const index = event.target.getAttribute("data-index");
            cart[index].quantity = parseInt(event.target.value);
            updateCart();
        }
    });

    // ลบสินค้าจากตะกร้า
    cartList.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-item")) {
            const index = event.target.getAttribute("data-index");
            cart.splice(index, 1);
            updateCart();
        }
    });

    // เคลียร์สินค้าที่เลือก
    clearCartButton.addEventListener("click", () => {
        cart = cart.filter((_, index) => !document.querySelector(`.select-item[data-index="${index}"]`).checked);
        updateCart();
    });

    // ยืนยันการซื้อเฉพาะสินค้าที่เลือก
    confirmButton.addEventListener("click", () => {
        const selectedItems = cart.filter((_, index) => document.querySelector(`.select-item[data-index="${index}"]`).checked);
        if (selectedItems.length === 0) {
            alert("Please select at least one item to purchase.");
            return;
        }

        alert("Purchase confirmed!");
        cart = cart.filter((_, index) => !document.querySelector(`.select-item[data-index="${index}"]`).checked);
        updateCart();
    });

    updateCart();
});
