const express = require('express');
const router = express.Router();
router.get('/volumen', (req, res) => {
  res.send('<h1>vol</h1>');
});

module.exports = router;
