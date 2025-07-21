var express = require('express');
var router = express.Router();

/* GET books listing. */
router.get('/', function(req, res, next) {
  res.send('List of books');
});

/* GET a specific book by ID. */
router.get('/:id', function(req, res, next) {
  const bookId = req.params.id;
  res.send(`Details of book with ID: ${bookId}`);
});

/* POST a new book. */
router.post('/', function(req, res, next) {
  res.send('New book added');
});

module.exports = router;