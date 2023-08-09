const { Router } = require("express");
const { getBooks } = require("../controllers/book");

const router = Router();

router.get('/', getBooks);

router.post('/', (req, res) => {
  res.send('Hello World! Welcome to Book Route! This is a POST request.')
});

router.patch('/', (req, res) => {
  res.send('Hello World! Welcome to Book Route! This is a PATCH request.')
});

router.delete('/', (req, res) => {
  res.send('Hello World! Welcome to Book Route! This is a DELETE request.')
});

module.exports = router;
