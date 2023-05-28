/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Import necessary CSS files if needed\r\n// import './styles.css';\r\n\r\n// Sample data array\r\nconst data = [\r\n \"Item 1\",\r\n \"Item 2\",\r\n \"Item 3\",\r\n // ... more items\r\n];\r\n\r\n// Configuration\r\nconst itemsPerPage = 5; // Number of items to display per page\r\nlet currentPage = 1; // Current page\r\n\r\n// Function to render the current page's data\r\nfunction renderPage() {\r\n const startIndex = (currentPage - 1) * itemsPerPage;\r\n const endIndex = startIndex + itemsPerPage;\r\n const pageData = data.slice(startIndex, endIndex);\r\n\r\n const dataContainer = document.getElementById(\"dataContainer\");\r\n dataContainer.innerHTML = \"\"; // Clear previous content\r\n\r\n // Render the data for the current page\r\n pageData.forEach(item => {\r\n   const itemElement = document.createElement(\"div\");\r\n   itemElement.textContent = item;\r\n   dataContainer.appendChild(itemElement);\r\n });\r\n\r\n // Update the current page indicator\r\n const currentPageElement = document.getElementById(\"currentPage\");\r\n currentPageElement.textContent = currentPage;\r\n}\r\n\r\n// Function to navigate to the previous page\r\nfunction goToPreviousPage() {\r\n if (currentPage > 1) {\r\n   currentPage--;\r\n   renderPage();\r\n }\r\n}\r\n\r\n// Function to navigate to the next page\r\nfunction goToNextPage() {\r\n const totalPages = Math.ceil(data.length / itemsPerPage);\r\n if (currentPage < totalPages) {\r\n   currentPage++;\r\n   renderPage();\r\n }\r\n}\r\n\r\n// Event listeners for the pagination buttons\r\nconst prevPageButton = document.getElementById(\"prevPageButton\");\r\nprevPageButton.addEventListener(\"click\", goToPreviousPage);\r\n\r\nconst nextPageButton = document.getElementById(\"nextPageButton\");\r\nnextPageButton.addEventListener(\"click\", goToNextPage);\r\n\r\n// Initial render\r\nrenderPage();\r\n\n\n//# sourceURL=webpack://project_/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;