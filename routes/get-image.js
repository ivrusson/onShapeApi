const express = require('express');
const router = express.Router();
router.get('/image', async (req, res) => {
  res.send('<h1>image</h1>');
});

module.exports = router;
