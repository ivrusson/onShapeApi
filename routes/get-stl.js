const express = require('express');
const router = express.Router();
router.get('/stl', (req, res) => {
  res.send('<h1>stl</h1>');
});

module.exports = router;
