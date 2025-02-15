document.addEventListener("DOMContentLoaded", function() {
    loadInventory();
});

function loadInventory() {
    const tableBody = document.querySelector("#inventoryTable tbody");
    tableBody.innerHTML = "";
    
    const storedProducts = JSON.parse(localStorage.getItem("products")) || {};
    for (const category in storedProducts) {
        storedProducts[category].forEach(product => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><img src="${product.image}" width="50"></td>
                <td>${product.name}</td>
                <td>${product.originalPrice}</td>
                <td>${product.discountPrice}</td>
                <td>${product.sizes.join(", ")}</td>
                <td>${product.stock}</td>
                <td>
                    <button onclick="editProduct('${product.id}')">แก้ไข</button>
                    <button onclick="deleteProduct('${product.id}')">ลบ</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }
}

function saveProduct() {
    const name = document.getElementById("productName").value;
    const originalPrice = document.getElementById("originalPrice").value;
    const discountPrice = document.getElementById("discountPrice").value;
    const sizes = document.getElementById("sizes").value.split(",");
    const stock = document.getElementById("stock").value;
    
    if (name && originalPrice && sizes.length > 0 && stock) {
        alert("บันทึกสินค้าเรียบร้อย!");
        hideForm();
        loadInventory();
    } else {
        alert("กรุณากรอกข้อมูลให้ครบ!");
    }
}