products = [
    {"category": "Vegetables", "name": "Cabbage", "price": "$19.99", "seller": "Kojo"},
    {"category": "Vegetables", "name": "Chilli Pepper", "price": "$19.99", "seller": "Ama"},
    {"category": "Spices", "name": "Ginger", "price": "$19.99", "seller": "Akos"},
    {"category": "Vegetables", "name": "Tomatoes", "price": "$19.99", "seller": "Kofi"},
    {"category": "Meat", "name": "Chicken", "price": "$19.99", "seller": "Akua"},
    {"category": "Spices", "name": "Garlic", "price": "$19.99", "seller": "Kojo"},
    {"category": "Grains", "name": "Rice", "price": "$19.99", "seller": "Ama"},
    {"category": "Meat", "name": "Goat Meat", "price": "$19.99", "seller": "Akos"},
    {"category": "Dairy", "name": "Eggs", "price": "$19.99", "seller": "Kofi"},
    {"category": "Grains", "name": "Maize", "price": "$19.99", "seller": "Akua"},
    {"category": "Fruits", "name": "Pineapple", "price": "$19.99", "seller": "Kojo"},
    {"category": "Grains", "name": "Millet", "price": "$19.99", "seller": "Ama"},
    {"category": "Tubers", "name": "Cassava", "price": "$19.99", "seller": "Akos"},
    {"category": "Tubers", "name": "Potato", "price": "$19.99", "seller": "Kofi"},
    {"category": "Tubers", "name": "Yam", "price": "$19.99", "seller": "Akua"}
];





class ProductFilter {
    constructor(products) {
        this.products = products;
    }

    filterByCategory(category) {
        return this.products.filter(product => product.category === category);
    }

    filterByName(name) {

        const product = this.products.filter(product => product.name.toLowerCase() === name.toLowerCase());
        console.log("prrrr",product)
        return product
    }

    filterBySeller(seller) {
        return this.products.filter(product => product.seller === seller);
    }

    search(term) {
        return this.products.filter(product => product.name.toLowerCase().includes(term.toLowerCase()) || product.category.toLowerCase().includes(term.toLowerCase()) || product.seller.toLowerCase().includes(term.toLowerCase()));
    }
}

let productFilter = new ProductFilter(products);

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const productList = document.querySelector('.product-list');
  
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      const searchTerm = searchInput.value.trim().toLowerCase();
  
      // Use the search method to filter products based on the search term
      let searchResults = productFilter.search(searchTerm);

      // Clear the product list
      productList.innerHTML = '';

      // Add the search results to the product list
      for (let product of searchResults) {
        productList.innerHTML += `
         
<div class="card">
<div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
  data-mdb-ripple-color="light">
  <img src="./img/${product.name.toLowerCase().replace(' ', '_')}.png" class="w-100" alt="${product.name}">
 
  <a href="#!">
    <div class="hover-overlay">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
    </div>
  </a>
</div>


<div class="card-body">
  <a href="" class="text-reset">
    <h5 class="card-title mb-2">${product.name}</h5>
    <h6 class="mb-3 price">${product.price}</h6>

<a href="../cart/cart.html" class="text-reset ">🛒</a>

   
</div>
</div>
</div>


        `;
      }
    });
});





// Select all 'Add to Cart' buttons
const cartButtons = document.querySelectorAll('.cart-icon');

cartButtons.forEach(button => {
  button.addEventListener('click', event => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get product details
    let product = event.target.parentElement;

    // Create an object to represent the cart item
    let cartItem = {
      name: product.querySelector('h2').innerText,
      price: product.querySelector('p').innerText,
      quantity: 1
    };

    // Add the item to the cart
    addToCart(cartItem);
  });
});

function addToCart(item) {
  // Get the current cart from local storage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if item is already in the cart
  let existingItem = cart.find(cartItem => cartItem.name === item.name);

  if (existingItem) {
    // If item exists, increment the quantity
    existingItem.quantity += 1;
  } else {
    // If item does not exist, add it to the cart
    cart.push(item);
  }

  // Save the updated cart back to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
}
