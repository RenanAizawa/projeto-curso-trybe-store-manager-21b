const productsModel = require('../models/products');

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

module.exports = {
  getAllService,
};