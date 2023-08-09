function getBooks(req, res) {
  try {
    // throw new Error("Error: Testing error");
    res.send('Hello World! Welcome to Book Route! This is a GET request.');
  }
  catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getBooks
}
