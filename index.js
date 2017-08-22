const app = require('express')();
const consign = require('consign');

consign()
  .include('db.js')
  .include('models')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app);



module.exports = app;