const conection = require('./conection');

const getAllModel = async () => {
  const [result] = await conection.execute('SELECT id, name FROM StoreMannager.products');
  return result;
};

module.exports = {
  getAllModel,
};