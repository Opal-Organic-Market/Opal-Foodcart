// Get references to select elements
const categorySelect = document.getElementById("categorySelect");
const itemSelect = document.getElementById("itemSelect");

// Define options for the second select input based on the first select input's value
const optionsByValue = {
  option1: [
    "Cabbage",
    "Pineapple",
    "Tomatoes",
    "Chilli pepper",
    "Ginger",
    "Garlic",
  ],
  option2: ["Chicken", "Eggs", "Goat meat"],
  option3: ["Maize", "Millet", "Rice"],
  option4: ["Yam", "Sweet potato", "Cassava"],
};

// Function to update options of the second select input
function updateSecondSelectOptions(value) {
  // Clear existing options
  itemSelect.innerHTML = '<option value="">Select an option</option>';

  // Add options based on the selected value from the first select input
  optionsByValue[value].forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    itemSelect.appendChild(optionElement);
  });

  // Enable the second select input
  itemSelect.disabled = false;
}

// Add event listener to the first select input
categorySelect.addEventListener("change", function () {
  const selectedValue = this.value;
  updateSecondSelectOptions(selectedValue);
});

// ------------------- Country and City

// Get references to select elements
const itemRegion = document.getElementById("itemRegion");
const itemCity = document.getElementById("itemCity");

// Define options for the second select input based on the first select input's value
const cityOptionsByValue = {
  option1: ["Accra", "Tema", "Lapaz"],
  option2: ["Kumasi"],
};

// Function to update options of the second select input
function updateCitySelectOptions(value) {
  // Clear existing options
  itemCity.innerHTML = '<option value="">Select an option</option>';

  // Add options based on the selected value from the first select input
  cityOptionsByValue[value].forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    itemCity.appendChild(optionElement);
  });

  // Enable the second select input
  itemCity.disabled = false;
}

// Add event listener to the first select input
itemRegion.addEventListener("change", function () {
  const selectedValue = this.value;
  updateCitySelectOptions(selectedValue);
});

const itemData = [];

function submitForm() {
  // var name = document.getElementById("name").value;
  // var email = document.getElementById("email").value;

  // if (name === "" || email === "") {
  // alert("Name and email are required.");
  // return false; // Prevent form submission
  // }
  console.log("$$$$$");

  // If validation passes, return true to allow form submission
  return false;
}
