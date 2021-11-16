const express = require('express');
const fileUpload = require('../middlewares/extFiles-array');
const client = require('../index.js');
const uploadFile = require('../middlewares/upload-file.js');
const router = express.Router();
router.post('/upload', async (req, res) => {});

module.exports = router;
