const express = require('express');
const salesControllers = require('../controllers/sales');

const salesRouter = express.Router();

salesRouter.get('/', salesControllers.getAll);
salesRouter.get('/:id', salesControllers.getById);

module.exports = salesRouter;