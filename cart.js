// cart.js

document.addEventListener('DOMContentLoaded', function () {
    displayCart();
});

function displayCart() {
    const cartListContainer = document.getElementById('cart-list');
    cartListContainer.innerHTML = '';

    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartItems.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="cart-item-img">
            <div class="cart-item-details">
                <p class="cart-item-name">${product.name}</p>
                <p class="cart-item-price">$${product.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="decrementQuantity(${index})">-</button>
                <input type="number" value="${product.quantity || 1}" min="1" max="99" oninput="changeQuantity(${index}, this.value)">
                <button class="quantity-btn" onclick="incrementQuantity(${index})">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})"><i class="fas fa-trash-alt"></i> Remove</button>
        `;

        cartListContainer.appendChild(cartItem);
    });

    const total = cartItems.reduce((sum, product) => sum + product.price * (product.quantity || 1), 0).toFixed(2);

    const totalElement = document.createElement('div');
    totalElement.classList.add('total');
    totalElement.innerHTML = `<p>Total: $${total}</p>`;

    cartListContainer.appendChild(totalElement);
}

window.changeQuantity = function (index, newQuantity) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Update the quantity of the selected item in the cart array
    cartItems[index].quantity = parseInt(newQuantity, 10);

    // Save the updated cart items back to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Refresh the displayed cart
    displayCart();
};

window.incrementQuantity = function (index) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Increment the quantity of the selected item in the cart array
    cartItems[index].quantity = (cartItems[index].quantity || 1) + 1;

    // Save the updated cart items back to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Refresh the displayed cart
    displayCart();
};

window.decrementQuantity = function (index) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Decrement the quantity of the selected item in the cart array (minimum 1)
    cartItems[index].quantity = Math.max((cartItems[index].quantity || 1) - 1, 1);

    // Save the updated cart items back to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Refresh the displayed cart
    displayCart();
};

window.removeFromCart = function (index) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove the selected item from the cart array
    cartItems.splice(index, 1);

    // Save the updated cart items back to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Refresh the displayed cart
    displayCart();
};
