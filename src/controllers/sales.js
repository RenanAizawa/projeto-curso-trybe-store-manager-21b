const salesServices = require('../services/sales');

const getAll = async (req, res) => {
  try {
    const { result, code, message } = await salesServices.getAllServices();
    if (message !== undefined) {
      return res.status(code).json({ message });
    }
    return res.status(code).json(result);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro na aplicação' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const { result, code, message } = await salesServices.getByIdServices(id);
    if (message !== undefined) {
      return res.status(code).json({ message });
    }
    return res.status(code).json(result);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro na aplicação' });
  }
};

module.exports = {
  getAll,
  getById,
};