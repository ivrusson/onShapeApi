const app = require('./app.js');
require('dotenv').config();

const OnshapeClient = require('@jstickets12/functionality');

let client;
const port = process.env.port || 4001;
app.listen(port, () => {
  console.log(`server listeing on port: ${port}`);
});

module.exports = client;
