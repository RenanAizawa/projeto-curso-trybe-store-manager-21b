const salesModel = require('../models/sales');

const getAllServices = async () => {
  const result = await salesModel.getAllModel();
  if (!result) {
    return (
      {
      code: 404,
      message: 'Sale not found',
      }
    );
  }
  return {
    code: 200,
    result,
  };
};

const getByIdServices = async (id) => {
  const result = await salesModel.getByIdModel(id);
  // console.log('services', result);
  if (result.length === 0) {
    // console.log('if', result);
    return (
      {
        code: 404,
        message: 'Sale not found',
      }
    );
  }
  return {
    code: 200,
    result,
  };
};

module.exports = {
  getAllServices,
  getByIdServices,
};