// Import necessary CSS files if needed
// import './styles.css';

// Sample data array
const data = [
 "Item 1",
 "Item 2",
 "Item 3",
 // ... more items
];

// Configuration
const itemsPerPage = 5; // Number of items to display per page
let currentPage = 1; // Current page

// Function to render the current page's data
function renderPage() {
 const startIndex = (currentPage - 1) * itemsPerPage;
 const endIndex = startIndex + itemsPerPage;
 const pageData = data.slice(startIndex, endIndex);

 const dataContainer = document.getElementById("dataContainer");
 dataContainer.innerHTML = ""; // Clear previous content

 // Render the data for the current page
 pageData.forEach(item => {
   const itemElement = document.createElement("div");
   itemElement.textContent = item;
   dataContainer.appendChild(itemElement);
 });

 // Update the current page indicator
 const currentPageElement = document.getElementById("currentPage");
 currentPageElement.textContent = currentPage;
}

// Function to navigate to the previous page
function goToPreviousPage() {
 if (currentPage > 1) {
   currentPage--;
   renderPage();
 }
}

// Function to navigate to the next page
function goToNextPage() {
 const totalPages = Math.ceil(data.length / itemsPerPage);
 if (currentPage < totalPages) {
   currentPage++;
   renderPage();
 }
}

// Event listeners for the pagination buttons
const prevPageButton = document.getElementById("prevPageButton");
prevPageButton.addEventListener("click", goToPreviousPage);

const nextPageButton = document.getElementById("nextPageButton");
nextPageButton.addEventListener("click", goToNextPage);

// Initial render
renderPage();
