export const products = {
    shoes: [
        {
            id: "1",
            name: "Football shoes 1",
            image: "../images/shoes/f1.png",
            originalPrice: 50,
            discountPrice: 29.99,
            sizes: ["39", "40", "41", "42", "43"],
            stock: 10
        },
        {
            id: "2",
            name: "Football shoes 2",
            image: "../images/shoes/f2.png",
            originalPrice: 80,
            discountPrice: 49.99,
            sizes: ["39", "40", "41", "42", "43"],
            stock: 10
        },
        {
            id: "11",
            name: "Football shoes 3",
            image: "../images/shoes/f3.png",
            originalPrice: 90,
            discountPrice: 0,
            sizes: ["39", "40", "41", "42", "43"],
            stock: 10
        }
    ],
    shirts: [
        {
            id: "3",
            name: "Pro Football Shirt 1",
            image: "../images/shirt/s1.png",
            originalPrice: 50,
            discountPrice: 29.99,
            sizes: ["S", "M", "L", "XL"],
            stock: 10
        },
        {
            id: "4",
            name: "Pro Football Shirt 2",
            image: "../images/shirt/s2.png",
            originalPrice: 50,
            discountPrice: 29.99,
            sizes: ["S", "M", "L", "XL"],
            stock: 10
        }
    ],
    pants: [
        {
            id: "5",
            name: "Pro Football Pants 1",
            image: "../images/pants/p1.png",
            originalPrice: 30,
            discountPrice: 19.99,
            sizes: ["S", "M", "L", "XL"],
            stock: 10
        },
        {
            id: "6",
            name: "Pro Football Pants 2",
            image: "../images/pants/p2.png",
            originalPrice: 30,
            discountPrice: 19.99,
            sizes: ["S", "M", "L", "XL"],
            stock: 10
        }
    ],
    balls: [
        {
            id: "7",
            name: "Pro Football Ball 1",
            image: "../images/ball/ba01.png",
            originalPrice: 35,
            discountPrice: 20.00,
            sizes: ["S", "M", "L", "XL"],
            stock: 10
        },
        {
            id: "8",
            name: "Pro Football Ball 2",
            image: "../images/ball/ba02.webp",
            originalPrice: 35,
            discountPrice: 20.00,
            sizes: ["S", "M", "L", "XL"],
            stock: 10
        }
    ],
    gloves: [
        {
            id: "9",
            name: "Pro Football Gloves 1",
            image: "../images/hand/h1.png",
            originalPrice: 60,
            discountPrice: 30.00,
            sizes: ["S", "M", "L", "XL"],
            stock: 10
        },
        {
            id: "10",
            name: "Pro Football Gloves 2",
            image: "../images/hand/h2.png",
            originalPrice: 60,
            discountPrice: 30.00,
            sizes: ["S", "M", "L", "XL"],
            stock: 10
        }
    ]
};
localStorage.setItem("products", JSON.stringify(products));
