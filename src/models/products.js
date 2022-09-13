const conection = require('./conection');

const getAllModel = async () => {
  const [result] = await conection.execute('SELECT id, name FROM StoreManager.products');
  return result;
};

const getByIdModel = async (id) => {
  const [[result]] = await conection
    .execute('SELECT id, name FROM StoreManager.products WHERE id = ?', [id]);
  return result;
};

module.exports = {
  getAllModel,
  getByIdModel,
};