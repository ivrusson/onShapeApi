const express = require('express');
const router = express.Router();
router.get('/stp', (req, res) => {
  res.send('<h1>stp</h1>');
});

module.exports = router;
