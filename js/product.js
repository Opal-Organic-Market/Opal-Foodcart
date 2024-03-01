
const products = [
    {
      id: 1,
      name: "Lettuce",
      category: "Vegetable",
      price: 3.00, // Ghana cedis
      seller: "Adjoa",
      image: "./assets/lettuce.jpg",
    },
    {
      id: 2,
      name: "Soybeans",
      category: "Legume",
      price: 10.00, // Ghana cedis
      seller: "Kojo",
      image: "./assets/soybeans.jpg",
    },
    {
      id: 3,
      name: "Gizzard",
      category: "Poultry",
      price: 8.00, // Ghana cedis
      seller: "Ama",
      image: "./assets/gizzard.jpg",
    },
    {
      id: 4,
      name: "Rosemary",
      category: "Spice",
      price: 5.00, // Ghana cedis
      seller: "Yaw",
      image: "./assets/rosemary.jpg",
    },
    {
      id: 5,
      name: "Green Pepper",
      category: "Vegetables",
      price: 4.00, // Ghana cedis
      seller: "Adjoa",
      image: "./assets/greenpepper.jpg",
    },
    {
      id: 6,
      name: "Watermelon",
      category: "Fruits",
      price: 7.00, // Ghana cedis
      seller: "Kojo",
      image: "./assets/watermelon.jpg",
    },
    {
      id: 7,
      name: "Tilapia",
      category: "Fish",
      price: 15.00, // Ghana cedis
      seller: "Ama",
      image: "./assets/tilapia.jpg",
    },
    {
      id: 8,
      name: "Apple",
      category: "Fruit",
      price: 6.00, // Ghana cedis
      seller: "Yaw",
      image: "./assets/apple.jpg",
    },
    {
      id: 9,
      name: "Redfish",
      category: "Fish",
      price: 20.00, // Ghana cedis
      seller: "Adjoa",
      image: "./assets/redfish.jpg",
    },
    {
      id: 10,
      name: "Bambara Beans",
      category: "Legume",
      price: 8.00, // Ghana cedis
      seller: "Kojo",
      image: "./assets/bambarabeans.jpg",
    },
    {
      id: 11,
      name: "Beef",
      category: "Meat",
      price: 25.00, // Ghana cedis
      seller: "Ama",
      image: "./assets/beef.jpg",
    },
    {
      id: 12,
      name: "Cloves",
      category: "Spice",
      price: 4.00, // Ghana cedis
      seller: "Yaw",
      image: "./assets/cloves.jpg",
    },
    {
      id: 13,
      name: "Carrot",
      category: "Vegetable",
      price: 3.50, // Ghana cedis
      seller: "Adjoa",
      image: "./assets/carrot.jpg",
    },
    {
      id: 14,
      name: "Flaxseed",
      category: "Spice",
      price: 7.00, // Ghana cedis
      seller: "Kojo",
      image: "./assets/flaxseed.jpg",
    },
    {
      id: 15,
      name: "Cinnamon",
      category: "Spice",
      price: 6.00, // Ghana cedis
      seller: "Ama",
      image: "./assets/cinnamon.jpg",
    },
    {
      id: 16,
      name: "Soybeans",
      category: "Legume",
      price: 10.00, // Ghana cedis
      seller: "Kojo",
      image: "./assets/soybeans.jpg",
    },
    {
      id: 17,
      name: "Gizzard",
      category: "Poultry",
      price: 8.00, // Ghana cedis
      seller: "Ama",
      image: "./assets/gizzard.jpg",
    },
    {
      id: 18,
      name: "Rosemary",
      category: "Spice",
      price: 5.00, // Ghana cedis
      seller: "Yaw",
      image: "./assets/rosemary.jpg",
    },
    {
      id: 19,
      name: "Green Pepper",
      category: "Vegetable",
      price: 4.00, // Ghana cedis
      seller: "Adjoa",
      image: "./assets/greenpepper.jpg",
    },
    {
      id: 20,
      name: "Watermelon",
      category: "Fruit",
      price: 7.00, // Ghana cedis
      seller: "Kojo",
      image: "./assets/watermelon.jpg",
    },
    {
      id: 21,
      name: "Lettuce",
      category: "Vegetables",
      price: 3.00, // Ghana cedis
      seller: "Adjoa",
      image: "./assets/lettuce.jpg",
    },]


    let items = []
function mappedData (){
  const pro = products.map((item) => {
   return items.push(item )
    // console.log('hhhhh', item)
  })
}



// filter by category

let category = []
function filterProductsByCategory (category){
  return products.filter(product => product.category === category);
}

console.log('category',category)

function displayProducts(searchTerm) {
  const searchResults = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Clear previous search results
  document.getElementById('searchResults').innerHTML = '';

  // Display search results
  const resultsContainer = document.getElementById('searchResults');
  if (searchResults.length > 0) {
    searchResults.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>Seller: ${product.seller}</p>
      `;
      resultsContainer.appendChild(productElement);
    });
  } else {
    const noResultsElement = document.createElement('p');
    noResultsElement.textContent = 'No matching products found.';
    resultsContainer.appendChild(noResultsElement);
  }
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const searchTerm = document.getElementById('searchInput').value;
  displayProducts(searchTerm);
});


// Function to filter products based on the selected seller
function filterItems() {
  const selectedSeller = document.getElementById('seller').value;

  // If "All" is selected, render all products
  if (selectedSeller === 'all') {
    renderProducts(products);
  } else {
    // Otherwise, filter products by the selected category
    const filteredProducts = products.filter(product => product.seller === selectedSeller);
    renderProducts(filteredProducts);
  }
}




mappedData()



function renderProducts() {
  const productList = document.querySelector('.catalog-list');

  if (!productList) {
    console.error("Product list container not found!");
    return;
  }

  products.map(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>Seller: ${product.seller}</p>
      <p>Price: $${product.price}</p>
      <p>Category: ${product.category}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `
    <div class="card">
    <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
      <img src="${product.image}" class="w-100" alt="${product.name}">
      <a href="#!">
        <div class="hover-overlay">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </div>
      </a>
    </div>

    <div class="card-body">
      <a href="" class="text-reset">
        <h5 class="card-title mb-2">${product.name}</h5>
        <h6 class="mb-3 price">$${product.price}</h6>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </a>
    </div>
  </div>
`;

    
    
    ;

  
    productList.appendChild(productElement);
  });
}

// Call the function to render products when the page loads
document.addEventListener('DOMContentLoaded', renderProducts);

// Function to add a product to the cart
function addToCart(productId) {
  // This is where you can implement adding the product to the cart
  // You can access the productId to identify which product was added
  console.log('Product added to cart:', productId);
}