// import './styles.css';
// const itemsPerPage = 10;
// let currentPage = 1;
// let tableData = [];
// fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
//   .then(response => response.json())
//   .then(data => {
//     tableData = processData(data.results);
//     renderTable();
//     renderPagination();
//   })
//   .catch(error => {
//     console.log(error);
//   });
//
// function processData(results) {
//
//   return results.map(item => {
//     const row = document.createElement('tr');
//     const column1 = document.createElement('td');
//     column1.textContent = item.name;
//     row.appendChild(column1);
//     return row;
//   });
// }
//
// function renderTable() {
//   const table = document.getElementById('data-table');
//   table.innerHTML = '';
//
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//
//   for (let i = startIndex; i < endIndex; i++) {
//     if (tableData[i]) {
//       table.appendChild(tableData[i]);
//     }
//   }
// }
//
// function renderPagination() {
//   const paginationContainer = document.getElementById('pagination');
//   paginationContainer.innerHTML = ''; // Clear the existing pagination
//
//   const totalPages = Math.ceil(tableData.length / itemsPerPage);
//
//   for (let i = 1; i <= totalPages; i++) {
//     const button = document.createElement('button');
//     button.textContent = i;
//     button.addEventListener('click', () => {
//       currentPage = i;
//       renderTable();
//     });
//
//     paginationContainer.appendChild(button);
//   }
// }

import './styles.css';
const itemsPerPage = 10;
let currentPage = 1;
let tableData = [];
fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then(response => response.json())
    .then(data => {
      tableData = processData(data.results);
      renderTable();
      renderPagination();
    })
    .catch(error => {
      console.log(error);
    });

function processData(results) {
  return results.map(item => {
    const row = document.createElement('tr');
    const column1 = document.createElement('td');
    column1.textContent = item.name;
    row.appendChild(column1);

    row.data = {};
    fetch(item.url)
        .then(response => response.json())
        .then(pokemonData => {
          row.data = pokemonData;
        })
        .catch(error => {
          console.log(error);
        });

    row.addEventListener('click', () => {
      displayPokemonData(row.data);
    });

    return row;
  });
}

function renderTable() {
  const table = document.getElementById('data-table');
  table.innerHTML = '';

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  for (let i = startIndex; i < endIndex; i++) {
    if (tableData[i]) {
      table.appendChild(tableData[i]);
    }
  }
}

function renderPagination() {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = ''; // Clear the existing pagination

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => {
      currentPage = i;
      renderTable();
    });

    paginationContainer.appendChild(button);
  }
}

function displayPokemonData(data) {
  alert(`Name: ${data.name}\nurl: ${data.url}`);
}

