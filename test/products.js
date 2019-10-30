const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const http = require('chai-http');
chai.use(http);

const app = require('../app')

describe('Products', () => {
  let customerCookie;
  let adminCookie;
  let sellerCookie;

  describe('add new product category', () => {
    // admin login
    it('should sucess when user logges in', (done) => {
      const agent1 = chai.request(app);
      agent1.post('/shop/v1/user/login')
      .send({ user_name: "barnettpacheco@terrasys.com", password: "abcd"})
      .end((err, res) => {
        console.log("product","1", res)
        expect(err).not.to.exist;
        adminCookie = res.headers['set-cookie'].pop().split('should ;')[0];
        done()
      })
    })
    
    it('should create new product category', (done) => {
      const agent2 = chai.request(app);
      agent2.post('/shop/v1/product/category')
      .set('Cookie', adminCookie)
      .send({'category': 'kitchen' })
      .end((err, res) => {
        console.log("product","2", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(201);
        expect(res.body.message).to.be.equal('created');
        expect(res.body.success).to.be.equal(true);
        expect(res.body.data).to.exist;
        expect(res.body.data).to.be.an('array');
        expect(res.body.data.length).to.be.equal(1);
        expect(res.body.data[0]).to.be.a('number');
        done()
      })
    });
  })

  describe('add new product', () => {
    // seller login
    it('should sucess when user logges in', (done) => {
      const agent3 = chai.request(app);
      agent3.post('/shop/v1/user/login')
      .send({ user_name: "stuartvega@terrasys.com", password: "abcd"})
      .end((err, res) => {
        console.log("product","3", res)
        expect(err).not.to.exist;
        sellerCookie = res.headers['set-cookie'].pop().split('should ;')[0];
        done()
      })
    })

    let item = {
      "name": "abcd1" + Math.random(),
      "sku": "5db1c055332e5e96c26b91f0",
      "seller_id": Math.floor(Math.random() * Math.floor(5)),
      "warehouse_id": Math.floor(Math.random() * Math.floor(3)),
      "picture": "http://placehold.it/32x32",
      "quantity": Math.floor(Math.random() * Math.floor(500)),
      "price": Math.floor(Math.random() * Math.floor(5)),
      "currency": "INR",
      "one_time_limit": Math.floor(Math.random() * Math.floor(5)),
      "description": "Enim ad officia duis fugiat nulla dolore ex. Cillum Lorem enim occaecat esse anim laborum quis voluptate. Fugiat amet ut exercitation ipsum consequat.\r\n",
      "updated_at": "2019-07-26T01:16:09 -04:00",
      "created_at": "2019-06-04T10:13:58 -04:00"
    };
    
    it('should create new item', (done) => {
      const agent4 = chai.request(app);
      let item1 = Object.assign({}, item);
      
      agent4.post('/shop/v1/product/add')
      .set('Cookie', sellerCookie)
      .send(item1)
      .end((err, res) => {
        console.log("product","4", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(201);
        expect(res.body.message).to.be.equal('created');
        expect(res.body.success).to.be.equal(true);
        expect(res.body.data).to.exist;
        expect(res.body.data).to.be.an('array');
        expect(res.body.data.length).to.be.equal(1);
        expect(res.body.data[0]).to.be.a('number');
        done()
      })
    });

    it('should check for param missing', (done) => {
      const agent5 = chai.request(app);
      let item2 = Object.assign({}, item);
      delete item2.name;

      agent5.post('/shop/v1/product/add')
      .set('Cookie', sellerCookie)
      .send(item2)
      .end((err, res) => {
        console.log("product","5", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(400);
        expect(res.body.message).to.be.equal('nameMissing');
        expect(res.body.success).to.be.equal(false);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist;
        done()
      })
    })
  })

  // check later
  describe('products cruds', () => {
    it('should re-add an old item', (done) => {
      const agent6 = chai.request(app);
      agent6.put(`/shop/v1/product/readd/${1}`)
      .set('Cookie', sellerCookie)
      .end((err, res) => {
        console.log("product","6", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(204);
        done()
      })
    });

    it('should remove an exsiting item', (done) => {
      const agent7 = chai.request(app);
      agent7.delete(`/shop/v1/product/item/${1}`)
      .set('Cookie', sellerCookie)
      .end((err, res) => {
        console.log("product","7", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(204);
        done()
      })
    });
 
    it('should update an item details', (done) => {
      const agent8 = chai.request(app);
      agent8.put(`/shop/v1/product/update/${1}`)
      .set('Cookie', sellerCookie)
      .send({name: "new name"})
      .end((err, res) => {
        console.log("product","8", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(204);
        done()
      })
    });

    it('should fetch item details', (done) => {
      const agent9 = chai.request(app);
      agent9.get(`/shop/v1/product/fetch/${1}`)
      .set('Cookie', sellerCookie)
      .end((err, res) => {
        console.log("product","9", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(200);
        expect(res.body.message).to.be.equal('success');
        expect(res.body.success).to.be.equal(true);
        expect(res.body.data).to.exist;
        expect(res.body.meta).not.to.exist;
        expect(res.body.data).to.be.an('array');
        expect(res.body.data[0]).to.exist;
        expect(res.body.data[0]).to.have.all.keys('id','sku','name','seller_id',
        'created_at','warehouse_id','picture','price','one_time_limit','currency',
        'available','description','updated_at', 'quantity');
        done()
      })
    });
  // })
})
})