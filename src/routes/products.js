const express = require('express');
const productsControler = require('../controllers/products');

const productsRouter = express.Router();

productsRouter.get('/', productsControler.getAll);
productsRouter.get('/:id', productsControler.getById);
productsRouter.post('/', productsControler.newProduct);
productsRouter.delete('/:id', productsControler.deleteProduct);

module.exports = productsRouter;