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

const newProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const { code, message, result } = await products.newProductService(name);
    if (message) {
      return res.status(code).json({ message });
    }
    return res.status(code).json(result);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro na aplicação' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await products.deleteProductService(id);
    if (message === 'done') {
      return res.status(code).json();
    }
    return res.status(code).json({ message });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro na aplicação' });
  }
};

module.exports = {
  getAll,
  getById,
  newProduct,
  deleteProduct,
};