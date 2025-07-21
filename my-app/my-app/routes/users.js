var express = require('express');
var logger = require('morgan');
var router = express.Router();

// Add a custom token to log the request body
logger.token('body', (req) => JSON.stringify(req.body));

// Use morgan to log requests for this router
router.use(
  logger(':method :url :status :response-time ms - :res[content-length] :body', {
    skip: (req, res) => res.statusCode !== 400, // Log only when status code is 400
  })
);

/* GET users listing. */
router.get('/', function (req, res, next) {
  if (req.query.a === '1') {
    return res.send('Query parameter a=1 received');
  }
  res.send('respond with a resource');
});

/* POST route to receive JSON data */
router.post('/', function (req, res, next) {
  const { name, company } = req.body; // Extract name and company from the request body

  if (name && company) {
    return res.json({
      message: `Received data: Name is ${name}, Company is ${company}`,
    });
  }

  res.status(400).json({ error: 'Please provide both name and company in the request body' });
});

module.exports = router;
