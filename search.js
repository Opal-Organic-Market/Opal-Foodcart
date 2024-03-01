document.addEventListener('DOMContentLoaded', function () {
    const productListContainer = document.getElementById('product-list');
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');

    // Populate product list on page load
    displayProducts(products);

    // Add event listener for category filter changes
    categoryFilter.addEventListener('change', function () {
        filterAndDisplayProducts();
    });

    // Add event listener for search input changes
    searchInput.addEventListener('input', function () {
        filterAndDisplayProducts();
    });

    function displayProducts(productsToDisplay) {
        productListContainer.innerHTML = '';
        productsToDisplay.forEach(product => {
            const productCard = createProductCard(product);
            productListContainer.appendChild(productCard);
        });
    }

    function createProductCard(product) {
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

        return productCard;
    }

    function filterAndDisplayProducts() {
        const selectedCategory = categoryFilter.value.toLowerCase();
        const searchTerm = searchInput.value.toLowerCase();

        // Filter products based on category and search term
        const filteredProducts = products.filter(product => {
            const matchesCategory = selectedCategory === '' || product.category.toLowerCase() === selectedCategory;
            const matchesSearch = searchTerm === '' || product.name.toLowerCase().includes(searchTerm);

            return matchesCategory && matchesSearch;
        });

        // Display the filtered products
        displayProducts(filteredProducts);
    }

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
});
