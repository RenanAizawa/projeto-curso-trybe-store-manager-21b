const express = require('express');
const productsControler = require('../controllers/products');

const productsRouter = express.Router();

productsRouter.get('/', productsControler.getAll);
productsRouter.get('/:id', productsControler.productsId);
productsRouter.post('/', productsControler.productCreat);

module.exports = productsRouter;