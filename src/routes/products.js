const express = require('express');
const productsControler = require('../controllers/products');

const productsRouter = express.Router();

productsRouter.get('/', productsControler.getAll);
productsRouter.get('/:id', productsControler.getById);

module.exports = productsRouter;