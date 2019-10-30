const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

describe('Library Functions', () => {

  describe('check cache', () => {
    const cache = require('../lib/cache')
    it('should set a value', (done) => {
      cache.set("test", "abcd", 300)
      .then(res => {
        console.log("res set - ", res)
        expect(res).to.exist;
        expect(res).to.be.an('string');
        expect(res).to.be.equal('OK');
        done()
      })
      .catch(err => {
        console.log("err", err)
        done(err);
      })
    })

    it('should get value for key', (done) => {
      cache.get("test")
      .then(res => {
        console.log("res get - ", res)
        expect(res).to.exist;
        expect(res).to.be.an('string');
        expect(res).to.be.equal('abcd');
        done()
      })
      .catch(err => {
        console.log("err", err)
        done(err);
      })
    })
  })

  describe('check utils', () => {
    const utils = require('../lib/utilities')
    it('should be true for correct email validate', (done) => {
      const res = utils.validateEmail("abcd@gmail.com");
      expect(res).to.exist;
      expect(res).to.be.an('boolean');
      expect(res).to.be.equal(true);
      done()
    })

    it('should be false for in-correct email validate', (done) => {
      const res = utils.validateEmail("abcd@gmail");
      expect(res).to.exist;
      expect(res).to.be.an('boolean');
      expect(res).to.be.equal(false);
      done()
    })

    it('should be true for correct phone validate', (done) => {
      const res = utils.validatePhone("+971555555555");
      expect(res).to.exist;
      expect(res).to.be.an('boolean');
      expect(res).to.be.equal(true);
      done()
    })

    it('should be false for in-correct phone validate', (done) => {
      const res = utils.validatePhone("+97155555555");
      expect(res).to.exist;
      expect(res).to.be.an('boolean');
      expect(res).to.be.equal(false);
      done()
    })

    it('should be false for in-correct phone validate', (done) => {
      const res = utils.validatePhone("+91555555555");
      expect(res).to.exist;
      expect(res).to.be.an('boolean');
      expect(res).to.be.equal(false);
      done()
    })
  })

  describe('check response', () => {
    const response = require('../lib/response')
    it('should be 520 for default errorResponse', (done) => {
      const res = response.errorResponse();
      expect(res).to.exist;
      expect(res.success).to.be.equal(false);
      expect(res.success).to.be.an('boolean');
      expect(res.status).to.be.equal(520);
      expect(res.status).to.be.an('number');
      expect(res.message).to.be.equal('errorFound');
      expect(res.message).to.be.an('string');
      done()
    })

    it('should be false for error code 400', (done) => {
      const res = response.errorResponse(400);
      expect(res).to.exist;
      expect(res.success).to.be.equal(false);
      expect(res.success).to.be.an('boolean');
      expect(res.status).to.be.equal(400);
      expect(res.status).to.be.an('number');
      expect(res.message).to.be.equal('paramMissing');
      expect(res.message).to.be.an('string');
      done()
    })

    it('should be 200 for default successResponse', (done) => {
      const res = response.successResponse();
      expect(res).to.exist;
      expect(res.success).to.be.equal(true);
      expect(res.success).to.be.an('boolean');
      expect(res.status).to.be.equal(200);
      expect(res.status).to.be.an('number');
      expect(res.message).to.be.equal('success');
      expect(res.message).to.be.an('string');
      done()
    })

    it('should be 204 for 204 status code in successResponse', (done) => {
      const res = response.successResponse(204);
      expect(res).to.exist;
      expect(res.success).to.be.equal(true);
      expect(res.success).to.be.an('boolean');
      expect(res.status).to.be.equal(204);
      expect(res.status).to.be.an('number');
      expect(res.message).to.be.equal('updated');
      expect(res.message).to.be.an('string');
      done()
    })
  })
})