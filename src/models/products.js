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

const newProductModel = async (name) => {
  const [result] = await conection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  const obg = {
    id: result.insertId,
    name,
  };
  return obg;
};

// const getNewProduct = async () => {
//   const [[result]] = await conection
//     .execute('SELECT id, name FROM StoreManager.products ORDER BY id DESC LIMIT 1');
//   return result;
// };

// const newAndGet = async (name) => {
//   newProductModel(name);
//   return getNewProduct();
// };

module.exports = {
  getAllModel,
  getByIdModel,
  // newAndGet,
  newProductModel,
};