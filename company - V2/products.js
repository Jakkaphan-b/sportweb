document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-name");
            const productPrice = button.getAttribute("data-price");
            const productImage = button.parentElement.querySelector("img").src;

            const product = {
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            };

            // ตรวจสอบว่าสินค้าซ้ำหรือไม่
            const existingProduct = cart.find((item) => item.name === productName);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push(product);
            }

            // บันทึกลง Local Storage
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Added to Cart!");
        });
    });
});
