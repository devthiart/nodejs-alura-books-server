const express = require("express");
const bookRoute = require('./routes/book');

const app = express();

app.use('/books', bookRoute);

const port = 8000; 

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port} `);
});
