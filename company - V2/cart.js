document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");
    const clearCartButton = document.getElementById("clear-cart");

    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cart.forEach((product, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td><img src="${product.image}" width="50"></td>
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td>${product.quantity}</td>
                <td>$${(product.price * product.quantity).toFixed(2)}</td>
                <td><button class="remove-item" data-index="${index}">Remove</button></td>
            `;

            cartList.appendChild(row);
            total += product.price * product.quantity;
        });

        cartTotal.textContent = total.toFixed(2);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // ลบสินค้าจากตะกร้า
    cartList.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-item")) {
            const index = event.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCart();
        }
    });

    // เคลียร์ตะกร้า
    clearCartButton.addEventListener("click", () => {
        localStorage.removeItem("cart");
        updateCart();
    });

    updateCart();
});
