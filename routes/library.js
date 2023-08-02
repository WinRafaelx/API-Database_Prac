const router = require('express').Router();
const {
  books,
  manageId
} = require('../data.js');
const fs = require('fs');
const connection = require('../database.js');

router.get("/", (req, res) => {
  // const data = await fetchBooks();
  let sql = "SELECT * FROM pokemon_info";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
  // res.json(books);
});

router.get("/:id", (req, res) => {
  const search = books.find(book => book.id === Number.parseInt(req.params.id), 10);
  res.json(search)
});

router.post("/", (req, res) => {
  const newBook = {
    id: Object.keys(books).length + 1,
    ...req.body
  }
  books.push(newBook);
  res.json(newBook)
});

router.put("/:id", (req, res) => {
  const replaceId = Number.parseInt(req.params.id, 10);
  const newBook = {
    id: replaceId,
    ...req.body
  }
  books[replaceId - 1] = newBook;
  fs.writeFileSync('books.json', JSON.stringify(books));
  res.json(newBook)
});

router.delete("/:id", (req, res) => {
  const search = books.find(book => book.id === Number.parseInt(req.params.id, 10));
  books.splice(search.id - 1, 1);
  manageId();
  fs.writeFileSync('books.json', JSON.stringify(books));
  res.json(books)
});

module.exports = router;