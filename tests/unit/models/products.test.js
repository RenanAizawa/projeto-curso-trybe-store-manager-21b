const sinon = require('sinon');
const { expect } = require('chai');
const { products, _products1 } = require('../helper/fakeDB');
const productsModel = require('../../../src/models/products');
const connection = require('../../../src/models/conection');

describe('Testando a camada de Models de products', () => {
  beforeEach(sinon.restore)
  describe('Consulta de products', () => {
    const fakeAll = products;
    // const fakeAll1 = products1;
    const fakeId = products[0];
    it('consulta de todos os produtos em caso de sucesso', async () => {
      sinon.stub(connection, 'execute').resolves([fakeAll]);
      const getAll = await productsModel.getAllModel()
      expect(getAll).to.be.eq(fakeAll)
    });
    it('consulta um produto expecifico por id', async () => {
      sinon.stub(connection, 'execute').resolves([[fakeId]]);
      const findById = await productsModel.getByIdModel(1);
      expect(findById).to.be.eq(fakeId);
    });
  });
});