const products = require('../services/products');

const getAll = async (req, res) => {
  try {
    const { result, message, code } = await products.getAllService();
    if (message) {
      return res.status(code).json(message);
    }
    return res.status(code).json(result);
  } catch (_e) {
    return res.status(500).json({ message: 'Error na aplicação' });
  }
};

module.exports = {
  getAll,
};