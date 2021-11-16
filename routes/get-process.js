const express = require('express');
const router = express.Router();
router.get('/process', (req, res) => {
  res.send('<h1>process</h1>');
});

module.exports = router;
