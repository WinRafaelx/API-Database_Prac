// async function fetchBooks() {
//   try {
//     const response = await fetch("https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json");
//     const data = await response.json();
//     return data
//   } catch(error) {
//     throw new Error("Error fetching books:", error);
//   }
// }

// module.exports = { fetchBooks };

const fs = require('fs');

let rawdata = fs.readFileSync('books.json');
let books = JSON.parse(rawdata);

function manageId() {
  books.forEach((book, index) => {
    book.id = index + 1;
  });
} 

module.exports = { books, manageId };