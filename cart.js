// Product list with Diamond amounts and prices in GEL
const products = [
    { diamonds: 86, price: 4 },
    { diamonds: 172, price: 7 },
    { diamonds: 257, price: 10 },
    { diamonds: 343, price: 13 },
    { diamonds: 429, price: 16 },
    { diamonds: 514, price: 20 },
    { diamonds: 700, price: 23 },
    { diamonds: 1049, price: 38 },
    { diamonds: 1135, price: 40 },
    { diamonds: 1220, price: 44 },
    { diamonds: 1412, price: 50 },
    { diamonds: 1584, price: 55 },
    { diamonds: 1669, price: 59 },
    { diamonds: 2195, price: 74 },
    { diamonds: 3688, price: 125 },
    { diamonds: 5532, price: 185 },
    { diamonds: 9288, price: 316 }
];

// Initialize products on page load
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-list');
    
    products.forEach(product => {
        productGrid.innerHTML += `
            <div class="product">
                <h3>${product.diamonds} Diamonds</h3>
                <p class="price">${product.price} GEL</p>
                <button onclick="addToCart(${product.diamonds}, ${product.price})">Add to Cart</button>
            </div>
        `;
    });

    updateCartCount();
});