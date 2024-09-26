const express = require('express');
const thienajs = require('../controller/Controller')
const routes = express.Router();

routes.get('/', thienajs.index);
routes.post('/save', thienajs.save);
routes.get('/display', thienajs.display);

module.exports = routes;


