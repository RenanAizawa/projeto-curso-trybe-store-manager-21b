const sinon = require('sinon');
const { expect } = require('chai');
const { products } = require('../helper/fakeDB');
const productsModel = require('../../../src/models/products');
const productsService = require('../../../src/services/products');

describe('Testando a camada de Services de products', () => {
  beforeEach(sinon.restore)
  describe('testando a função getAll', () => {
    const fakeAll = products;
    const fakeId = products[0];
    it('testando uma chamada bem sucedida', async () => {
      sinon.stub(productsModel, 'getAllModel').resolves(fakeAll)
      const getAll = await productsService.getAllService();
      expect(getAll).to.be.deep.eq(fakeAll);
    });
  });
});