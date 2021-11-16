require('dotenv').config();
const onshape = require('@jstickets12/functionality');
class OnShape {
  constructor(accessKey, baseUrl, secretKey) {
    this._client = new onshape({ accessKey, baseUrl, secretKey });
  }
  get client() {
    return this._client;
  }
}
const apiKey = process.env.apikey || 'lBZonxdZru9O60AH7gujz711';
const baseUrl = process.env.baseUrl || 'https://cad.onshape.com';
const secretKey =
  process.env.secretKey || 'CESrlGkdMEZeDUfBwLxDzQbnCiTSKyJq2f1ufWpovLUhZinX';
const onshapeClient = new OnShape(apiKey, baseUrl, secretKey).client;

module.exports = onshapeClient;
