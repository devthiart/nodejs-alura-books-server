const fs = require('fs'); // File System -> To manipulate files.

function getAllBooks() {
  return JSON.parse(fs.readFileSync('books.json'));
}

module.exports = {
  getAllBooks
}
