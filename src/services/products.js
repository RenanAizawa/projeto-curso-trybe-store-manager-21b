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

const deleteProductService = async (id1) => {
  const result = await productsModel.getByIdModel(id1);
  if (!result) {
    return {
      message: 'Product not found',
      code: 404,
    };
  }
  if (result.id) {
    const { message } = await productsModel.deleteProductModel(result.id);
    return {
      message,
      code: 204,
    };
  }
};

module.exports = {
  getAllService,
  getByIdService,
  newProductService,
  deleteProductService,
};