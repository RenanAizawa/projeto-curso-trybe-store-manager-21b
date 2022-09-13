const sinon = require('sinon');
const { expect } = require('chai');
const { products } = require('../helper/fakeDB');
const productsModel = require('../../../src/models/products');
const productsService = require('../../../src/services/products');

describe('Testando a camada de Services de products', () => {
  beforeEach(sinon.restore)
  const fakeAll = products;
  const fakeId = products[0];
  describe('testando a função getAll', () => {
    it('testando uma chamada bem sucedida', async () => {
      sinon.stub(productsModel, 'getAllModel').resolves(fakeAll)
      const getAll = await productsService.getAllService();
      expect(getAll.result).to.be.deep.eq(fakeAll);
      expect(getAll).to.have.keys('code', 'result')
      expect(getAll.code).to.be.eq(200)
    });
    it('testando chamada em caso de falha', async () => {
      sinon.stub(productsModel, 'getAllModel').resolves()
      const getAll = await productsService.getAllService();
      expect(getAll.code).to.be.eq(404);
      expect(getAll.message).to.be.eq('Product not found')
    })
  });
  describe('testando a função getById', () => {
    it();
  });
});