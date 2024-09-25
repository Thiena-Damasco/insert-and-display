const express = require('express');
const nodejs = require('./controller/Controller.js')
const routes = express.Router();

routes.get('/', nodejs.index);
routes.post('/save', nodejs.save);

module.exports = routes;