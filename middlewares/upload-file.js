const OnshapeClient = require('@jstickets12/functionality');
require('dotenv').config();
const accessKey = process.env.apiKey;
const baseUrl = process.env.baseUrl;
const secretKey = process.env.secretKey;
const client = new OnshapeClient({
  accessKey,
  baseUrl,
  secretKey,
});
const uploadFile = (req, res, next) => {
  next();
};

module.exports = uploadFile;
