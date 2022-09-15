const conection = require('./conection');

const getAllModel = async () => {
  const f1 = 'SELECT sProducts.sale_id AS saleId, sales.date,';
  const f2 = 'sProducts.product_id AS productId, sProducts.quantity';
  const f3 = 'FROM StoreManager.sales AS sales INNER JOIN';
  const f4 = 'StoreManager.sales_products AS sProducts ON sales.id = sProducts.sale_id';
  const full = `${f1} ${f2} ${f3} ${f4}`;

  const [result] = await conection
    .execute(full);
  // console.log(result);
  return result;
};

const getByIdModel = async (id) => {
  const f1 = 'SELECT sales.date,';
  const f2 = 'sProducts.product_id AS productId, sProducts.quantity';
  const f3 = 'FROM StoreManager.sales AS sales INNER JOIN';
  const f4 = 'StoreManager.sales_products AS sProducts ON sales.id = sProducts.sale_id';
  const f5 = 'WHERE sProducts.sale_id = ?';
  const full = `${f1} ${f2} ${f3} ${f4} ${f5}`;
  const [result] = await conection.execute(full, [id]);
  // console.log(result);
  return result;
};

module.exports = {
  getAllModel,
  getByIdModel,
};