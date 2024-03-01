// seller_dashboard.js

document.addEventListener('DOMContentLoaded', function () {
    displayItems();
});

function addItem() {
    const productName = document.getElementById('productName').value;
    const productSeller = document.getElementById('productSeller').value;
    const productImgUpload = document.getElementById('productImgUpload');
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productCategory = document.getElementById('productCategory').value;
    const productLocation = document.getElementById('productLocation').value;

    // Check if a file is selected
    if (!productImgUpload.files.length) {
        alert('Please select an image for the item.');
        return;
    }

    const productImg = URL.createObjectURL(productImgUpload.files[0]);

    if (!productName || !productSeller || !productImg || isNaN(productPrice) || !productCategory || !productLocation) {
        alert('Please fill in all fields.');
        return;
    }

    const newItem = {
        id: generateItemId(),
        name: productName,
        seller: productSeller,
        img: productImg,
        price: productPrice,
        category: productCategory,
        location: productLocation,
    };

    // Retrieve existing items or initialize an empty array
    const existingItems = JSON.parse(localStorage.getItem('sellerItems')) || [];

    // Add the new item to the array
    existingItems.push(newItem);

    // Save the updated array back to local storage
    localStorage.setItem('sellerItems', JSON.stringify(existingItems));

    // Refresh the displayed items
    displayItems();

    // Clear the form fields
    clearForm();
}

function displayItems() {
    const itemListContainer = document.getElementById('itemList');
    itemListContainer.innerHTML = '';

    // Retrieve items from local storage
    const sellerItems = JSON.parse(localStorage.getItem('sellerItems')) || [];

    sellerItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');

        itemCard.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="item-img">
            <div class="item-details">
                <p class="item-name">${item.name}</p>
                <p class="item-price">$${item.price.toFixed(2)}</p>
                <p class="item-location">${item.location}</p>
            </div>
            <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
        `;

        itemListContainer.appendChild(itemCard);
    });
}

function removeItem(itemId) {
    // Retrieve items from local storage
    const sellerItems = JSON.parse(localStorage.getItem('sellerItems')) || [];

    // Filter out the item with the specified ID
    const updatedItems = sellerItems.filter(item => item.id !== itemId);

    // Save the updated array back to local storage
    localStorage.setItem('sellerItems', JSON.stringify(updatedItems));

    // Refresh the displayed items
    displayItems();
}

function generateItemId() {
    const existingItems = JSON.parse(localStorage.getItem('sellerItems')) || [];
    return existingItems.length > 0 ? Math.max(...existingItems.map(item => item.id)) + 1 : 1;
}

function clearForm() {
    document.getElementById('productName').value = '';
    document.getElementById('productSeller').value = '';
    document.getElementById('productImgUpload').value = ''; // Clear the file input
    document.getElementById('productPrice').value = '';
    document.getElementById('productCategory').value = '';
    document.getElementById('productLocation').value = '';
}

function toggleForm() {
    const addItemForm = document.getElementById('addItemForm');
    addItemForm.style.display = addItemForm.style.display === 'none' ? 'block' : 'none';
}
