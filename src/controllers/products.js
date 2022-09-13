const products = require('../services/products');

const getAll = async (req, res) => {
  try {
    const { result, message, code } = await products.getAllService();
    if (message !== undefined) {
      return res.status(code).json(message);
    }
    return res.status(code).json(result);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Error na aplicação' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const { result, message, code } = await products.getByIdService(id);
    if (message !== undefined) {
      return res.status(code).json({ message });
    }
    return res.status(code).json(result);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Error na aplicação' });
  }
};

module.exports = {
  getAll,
  getById,
};