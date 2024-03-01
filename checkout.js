// checkout.js

document.addEventListener('DOMContentLoaded', function () {
    displayCheckout();
});

function displayCheckout() {
    const checkoutListContainer = document.getElementById('checkout-list');
    checkoutListContainer.innerHTML = '';

    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartItems.forEach((product, index) => {
        const checkoutItem = document.createElement('div');
        checkoutItem.classList.add('checkout-item');

        checkoutItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="checkout-item-img">
            <div class="checkout-item-details">
                <p class="checkout-item-name">${product.name}</p>
                <p class="checkout-item-price">$${product.price.toFixed(2)}</p>
            </div>
        `;

        checkoutListContainer.appendChild(checkoutItem);
    });

    const total = cartItems.reduce((sum, product) => sum + product.price, 0).toFixed(2);

    const totalElement = document.createElement('div');
    totalElement.classList.add('total');
    totalElement.innerHTML = `<p>Total: $${total}</p>`;

    checkoutListContainer.appendChild(totalElement);
}

// Function to handle the order confirmation
window.confirmOrder = function () {
    // For simplicity, let's just alert the user about the order confirmation
    alert('Order confirmed!');

    // You can add further logic here, such as sending the order to a server, clearing the cart, etc.
};
