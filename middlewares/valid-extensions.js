const fileArray = require('./extFiles-array');
const mime = require('mime');
const _ = require('lodash');
const validExtensions = (req, res, next) => {
  req.body.files = [];
  if (!req.files) {
    throw new Error('No file uploaded');
  }
  _.forEach(_.keysIn(req.files.photos), (key) => {
    let file = req.files.photo[key];
    let mimeFile;
    fileArray.forEach((val) => {
      const getMime = mime.getType(val);
      if (getMime === file.mimetype) {
        mimeFile = getMime;
      }
    });
    if (mimeFile === undefined) {
      req.body.files.push({
        name: file.name,
        mimetype: file.mimetype,
        size: file.size,
        type: 'not-valid',
      });
    }
    const extension = mime.getExtension(mimeFile);
    file.mv(`../uploads/${extension}` + file.name);

    req.body.files.push({
      name: file.name,
      mimetype: file.mimetype,
      size: file.size,
      type: 'valid',
    });
  });
  next();
};

module.exports = validExtensions;
