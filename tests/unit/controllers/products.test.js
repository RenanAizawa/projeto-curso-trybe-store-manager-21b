const sinon = require('sinon');
const { expect } = require('chai');
const { products } = require('../helper/fakeDB');
const productsService = require('../../../src/services/products');
const productsController = require('../../../src/controllers/products');

describe('Testando a camada de Controllers de products', () => {
  beforeEach(sinon.restore)
  const fakeAll = {
    code: 200,
    result: products,
  };
  const fakeId = {
    code: 200,
    result: products[0],
  };
  const noResult = {
    code: 404,
    message: 'Product not found',
  }
  describe('testando a função getAll', () => {
    it('testando uma chamada bem sucedida', async () => {
      sinon.stub(productsService, 'getAllService').resolves(fakeAll)
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await productsController.getAll(req, res);

      expect(res.status.calledWith(200)).to.be.true
      expect(res.json.calledWith(fakeAll.result)).to.be.true

    });
    it('testando uma chamada em caso de falha', async () => {
      sinon.stub(productsService, 'getAllService').resolves(noResult)
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await productsController.getAll(req, res);

      expect(res.status.calledWith(404)).to.be.true
    });
    it('testando a falha da aplicação', async () => {
      sinon.stub(productsService, 'getAllService').rejects()
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await productsController.getAll(req, res);

      expect(res.status.calledWith(500)).to.be.true
    });
  });
  describe('testando a função getById', () => {
    it('testando uma chamada bem sucedida', async () => {
      sinon.stub(productsService, 'getByIdService').resolves(fakeId)
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      req.params = sinon.stub().returns(req);
      await productsController.getById(req, res);

      expect(res.status.calledWith(200)).to.be.true
      expect(res.json.calledWith(fakeId.result)).to.be.true

    });
    it('testando uma chamada em caso de falha', async () => {
      sinon.stub(productsService, 'getAllService').resolves(noResult)
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      req.params = sinon.stub().returns(req);
      await productsController.getById(req, res);

      expect(res.status.calledWith(404)).to.be.true
    });
    it('testando a falha da aplicação', async () => {
      sinon.stub(productsService, 'getByIdService').rejects()
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await productsController.getById(req, res);

      expect(res.status.calledWith(500)).to.be.true
    });
  });
});