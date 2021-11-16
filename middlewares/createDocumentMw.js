const client = require('../onShapesingleton');
const { body, validationResult } = require('express-validator');
const createDocument = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const email = req.body.email;
  const response = await client.createDocument(email);
  req.body.documentId = response.defaultWorkspace.documentId;
  req.body.workspaceId = response.defaultWorkspace.lastModifier.id;
  next();
};

module.exports = createDocument;
