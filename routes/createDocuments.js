const express = require('express');
const documentMw = require('../middlewares/createDocumentMw');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const client = require('../onShapesingleton');
router.post(
  '/createDocument',
  check('email', 'Email is not valid').isEmail(),
  documentMw,
  (req, res) => {
    const { documentId, workspaceId } = req.body;
    res.send({ documentId, workspaceId });
  }
);

module.exports = router;
