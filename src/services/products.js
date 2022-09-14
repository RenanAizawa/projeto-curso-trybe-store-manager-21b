const productsModel = require('../models/products');
const validador = require('../middlewares/nameValidador');

const getAllService = async () => {
  const result = await productsModel.getAllModel();
  if (!result) {
    return (
      {
        message: 'Product not found',
        code: 404,
      }
    );
  }
  return {
    result,
    code: 200,
  };
};

const getByIdService = async (id) => {
  const result = await productsModel.getByIdModel(id);
  if (!result) {
    return (
      {
        message: 'Product not found',
        code: 404,
      }
    );
  }
  return {
    result,
    code: 200,
  };
};

const newProductService = async (name) => {
  const value = validador.nameValidador(name);
  if (value.message) {
    return value;
  }
  const result = await productsModel.newProductModel(value);
  return {
    code: 201,
    result,
  };
};

module.exports = {
  getAllService,
  getByIdService,
  newProductService,
};