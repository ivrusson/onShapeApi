const express = require('express');
const upload = require('./routes/upload.js');
const getVol = require('./routes/get-vol.js');
const getStp = require('./routes/get-stp.js');
const getStl = require('./routes/get-stl.js');
const getProcess = require('./routes/get-process.js');
const getImage = require('./routes/get-image.js');
const getBoundingBox = require('./routes/get-bb.js');
const getUpload = require('./routes/check-upload.js');
const createDocument = require('./routes/createDocuments.js');
const getPart = require('./routes/check-part.js');
const fileUpload = require('express-fileupload');
const app = express();
const bodyParser = require('body-parser');
//Enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);
//todas las rutas se encuentran aquí
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(createDocument);
app.use(upload);
app.use(getVol);
app.use(getStp);
app.use(getProcess);
app.use(getImage);
app.use(getBoundingBox);
app.use(getUpload);
app.use(getPart);
app.use(getVol);
app.use(upload);
app.all('*', (req, res) => {
  res.status(404).send('<h1>Route not found <h1>');
});

module.exports = app;
