const products = [
    {"id": 1, "name": "Apple", "seller": "John", "img": "assets/apple.png", "price" : 9.99, "category": "Fruit"},
    {"id": 2, "name": "Bambara Beans", "seller": "Savanah", "img": "assets/bambarabeans.png", "price" : 90.99, "category": "Legume"},
    {"id": 3, "name": "Beef", "seller": "Joes Store", "img": "assets/Beef.png", "price" : 23.99, "category": "Poultry"},
    {"id": 4, "name": "Brown Beans", "seller": "James", "img": "assets/brownbeans.png", "price" : 43.00, "category": "Legume"},
    {"id": 5, "name": "Cabbage", "seller": "SeaFlavor Market", "img": "assets/cabbage.png", "price" : 35.98, "category": "vegetable"},
    {"id": 6, "name": "Carrot", "seller": "SeaFlavor Market", "img": "assets/carrot.png", "price" : 6.99, "category": "Vegetable"},
    {"id": 7, "name": "Cat Fish", "seller": "SeaFlavor Market", "img": "assets/catfish.png", "price" : 96.99, "category": "Fish"},
    {"id": 8, "name": "chicken", "seller": "Joes Store", "img": "assets/chicken.png", "price" : 19.99, "category": "poultry"},
    {"id": 9, "name": "chicken thigh", "seller": "Joes Store", "img": "assets/chickenthigh.png", "price" : 67.99, "category": "Poultry"},
    {"id": 11, "name": "Cinnamon", "seller": "June ", "img": "assets/cinnamon.png" , "price": 9.99, "category": "Spice"},
    {"id": 12, "name": "Cucumber", "seller": "James", "img": "assets/cucumber.png", "price" : 59.99, "category": "Vegetable"},
    {"id": 13, "name": "Clove", "seller": "SeaFlavor Market", "img": "assets/cloves.png", "price" : 89.99, "category": "Spice"},
    {"id": 14, "name": "Garlic", "seller": "Joes Store", "img": "assets/garlic.png", "price" : 99.99, "category": "Spice"},
    {"id": 15, "name": "Gizzard", "seller": "Joes", "img": "assets/gizzard.png", "price" : 96.99, "category": "Poultry"},
    {"id": 16, "name": "Green Pepper", "seller": "SeaFlavor Market", "img": "assets/greenpepper.png", "price" : 89.99, "category": "Vegetable"},
    {"id": 17, "name": "Lettuce", "seller": "John", "img": "assets/lettuce.png", "price" : 9.99, "category": "Vegetable"},
    {"id": 18, "name": "Pineapple", "seller": "James", "img": "assets/pineapple.png", "price" : 9.99, "category": "Fruit"},
    {"id": 19, "name": "Red Fish", "seller": "SeaFlavor Market", "img": "assets/redfish.png", "price" : 97.99, "category": "Fish"},
    {"id": 20, "name": "Rosemary", "seller": "Jeos", "img": "assets/rosemary.png", "price" : 9.99, "category": "Spice"},
    {"id": 21, "name": "Soy Bean", "seller": "John", "img": "assets/soybeans.png", "price" : 78.99, "category": "Legume"},
    // {"id": 23, "name": "Tilapia", "seller": "SeaFlavor Market", "img": "assets/tilapia.png", "price" : 90.99, "category": "Fish"},
    // {"id": 24, "name": "Watermelon", "seller": "John", "img": "assets/watermelon.png", "price" : 9.99, "category": "Fruit"},
];


// document.addEventListener('DOMContentLoaded', function () {
//     const productListContainer = document.getElementById('product-list');

//     products.forEach(product => {
//         const productCard = document.createElement('div');
//         productCard.classList.add('product-card');

//         productCard.innerHTML = `
//             <img src="${product.img}" alt="${product.name}">
//             <h2>${product.name}</h2>
//             <p>Seller: ${product.seller}</p>
//             <p>Price: $${product.price.toFixed(2)}</p>
//             <p>Category: ${product.category}</p>
//         `;

//         productListContainer.appendChild(productCard);
//     });
// });

// script.js


// add to cart function
// script.js

document.addEventListener('DOMContentLoaded', function () {
    const productListContainer = document.getElementById('product-list');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Seller: ${product.seller}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Category: ${product.category}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productListContainer.appendChild(productCard);
    });

    // Function to handle adding a product to the cart
    window.addToCart = function (productId) {
        const selectedProduct = products.find(product => product.id === productId);

        // Retrieve existing cart items from local storage or create an empty array
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the selected product to the cart
        cartItems.push(selectedProduct);

        // Save the updated cart items back to local storage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        alert(`Added to cart: ${selectedProduct.name}`);
        console.log(selectedProduct);
    };

    // Function to handle searching products
    window.searchProducts = function () {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();

        // Filter products based on the search input
        const filteredProducts = products.filter(product => {
            const productName = product.name.toLowerCase();
            return productName.includes(searchInput);
        });

        displaySearchResults(filteredProducts);
    };

    function displaySearchResults(results) {
        const productListContainer = document.getElementById('product-list');
        productListContainer.innerHTML = '';

        results.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>Seller: ${product.seller}</p>
                <p>Price: $${product.price.toFixed(2)}</p>
                <p>Category: ${product.category}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            `;

            productListContainer.appendChild(productCard);
        });
    }
});
