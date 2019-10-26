const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const http = require('chai-http');
chai.use(http);

const app = require('../app')

describe('Orders', () => {
  let customerCookie;
  let adminCookie;
  let sellerCookie;

  describe('add or update order, shop or warehouse', () => {
    // seller login
    it('should sucess when admin user logged in', (done) => {
      const agent1 = chai.request(app);
      agent1.post('/shop/v1/user/login')
      .send({ user_name: "martinezprince@terrasys.com", password: "abcd"})
      .end((err, res) => {
        expect(err).not.to.exist;
        customerCookie = res.headers['set-cookie'].pop().split('should ;')[0];
        done()
      })
    })
    
    it('should add item for later', (done) => {
      const agent2 = chai.request(app);
      const input =   {
        "product_id": 2,
        "user_id": 1,
        "quantity":2,
        "sub_total":2,
        "stage": "later",
      }
      agent2.post('/shop/v1/order/create')
      .set('Cookie', customerCookie)
      .send(input)
      .end((err, res) => {
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

    it('should sucess when customer logged in', (done) => {
      const agent1 = chai.request(app);
      agent1.post('/shop/v1/user/login')
      .send({ user_name: "martinezprince@terrasys.com", password: "abcd"})
      .end((err, res) => {
        expect(err).not.to.exist;
        adminCookie = res.headers['set-cookie'].pop().split('should ;')[0];
        done()
      })
    })

    it('should create new shipment', (done) => {
      const agent3 = chai.request(app);
      const input = {
        user_id: 1,
        seller_id: 1,
        order_id: 1,
        carier_company: "abvcd",
        carier_id: 4,
        status: 'shipped',
        tracking_id: 1
      }
      agent3.post('/shop/v1/order/ship')
      .set('Cookie', customerCookie)
      .send(input)
      .end((err, res) => {
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

    it('should create new warehouse', (done) => {
      const inp = {
        "seller_id": 2,
        "pictures": "http://placehold.it/32x32",
        "about_us": "Occaecat officia laborum nostrud Lorem aliquip aliqua laborum nulla pariatur. Sunt pariatur reprehenderit elit adipisicing ut quis ipsum duis cupidatat laboris mollit. In et cupidatat dolor incididunt veniam ea duis sunt commodo.\r\n",
        "verified": 1,
        "email": "orderkep@terrasys.com",
        "phone": "+971 (893) 573-3907",
        "street": "292 Quay Street, Whitestone, Georgia, 643",
        "city": "Fairforest",
        "state": "Vermont",
        "country": "Comoros",
        "latitude": 37.580078,
        "longitude": -35.486104,
        "updated_at": "2019-03-25T11:44:02 -04:00",
        "created_at": "2019-07-25T11:19:12 -04:00"
      };
      inp.email = Math.floor(Math.random() * 10000) + inp.email;
      const agent4 = chai.request(app);
      agent4.post('/shop/v1/order/warehouse')
      .set('Cookie', adminCookie)
      .send(inp)
      .end((err, res) => {
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

    it('should update order status', (done) => {
      const agent5 = chai.request(app);
      const orderId = 1
      agent5.put(`/shop/v1/order/order/${orderId}`)
      .set('Cookie', adminCookie)
      .send({'status': 'delivered' })
      .end((err, res) => {
        expect(err).not.to.exist;
        expect(res).to.have.status(201);
        expect(res.body.message).to.be.equal('updated');
        expect(res.body.success).to.be.equal(true);
        expect(res.body.data).not.to.exist;
        done()
      })
    });

    it('should update order details', (done) => {
      const agent6 = chai.request(app);
      const orderId = 1
      agent6.put(`/shop/v1/order/order/${orderId}`)
      .set('Cookie', adminCookie)
      .send({'quantity': 3 })
      .end((err, res) => {
        expect(err).not.to.exist;
        expect(res).to.have.status(201);
        expect(res.body.message).to.be.equal('updated');
        expect(res.body.success).to.be.equal(true);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist;
        done()
      })
    });

    // same prd update case, obj rmpty
    it('should update shipment details', (done) => {
      const agent7 = chai.request(app);
      const shipId = 1;
      agent7.put(`/shop/v1/order/ship/${shipId}`)
      .set('Cookie', customerCookie)
      .send({'tracking_id': 1234 })
      .end((err, res) => {
        console.log("prrr", err, res.body)
        expect(err).not.to.exist;
        expect(res).to.have.status(204);
        expect(res.body.message).to.be.equal('updated');
        expect(res.body.success).to.be.equal(true);
        expect(res.body.data).to.exist;
        expect(res.body.data).to.be.an('array');
        expect(res.body.data.length).to.be.equal(1);
        expect(res.body.data[0]).to.be.a('number');
        done()
      })
    });
  })


  describe('fetch items', () => {
    // seller login
    it('should sucess when user logges in', (done) => {
      const agent8 = chai.request(app);
      agent8.post('/shop/v1/user/login')
      .send({ user_name: "martinezprince@terrasys.com", password: "abcd"})
      .end((err, res) => {
        expect(err).not.to.exist;
        customerCookie = res.headers['set-cookie'].pop().split('should ;')[0];
        done()
      })
    })
    
    it('should get order details', (done) => {
      const agent9 = chai.request(app);
      const id = 1;
      agent9.get(`/shop/v1/order/order/${id}`)
      .set('Cookie', customerCookie)
      // .send(item1)
      .end((err, res) => {

        console.log("order45", res.body)

        expect(res).to.have.status(200);
        expect(res.body.message).to.be.equal('created');
        expect(res.body.success).to.be.equal(true);
        expect(res.body.data).to.exist;
        expect(res.body.data).to.be.an('array');
        expect(res.body.data.length).to.be.equal(1);
        expect(res.body.data[0]).to.be.a('number');
         expect(res.body.data[0]).to.have.all.keys('id','user_id','quantity','sub_total',
        'created_at','updated_at','new');
        done()
      })
    });

    it('should get shipment details', (done) => {
      const agent10 = chai.request(app);
      // let item1 = Object.assign({}, item);
      const id = 1;
      agent10.get(`/shop/v1/order/ship/${id}`)
      .set('Cookie', customerCookie)
      .end((err, res) => {
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

  // // check later
  // describe('orders cruds', () => {
  //   it('should re-add an old item', (done) => {
  //     const agent6 = chai.request(app);
  //     agent6.put(`/shop/v1/order/readd/${1}`)
  //     .set('Cookie', sellerCookie)
  //     .end((err, res) => {
  //       expect(err).not.to.exist;
  //       // expect(res).to.have.status(204);
  //       // expect(res.body.message).to.be.equal('readded');
  //       // expect(res.body.success).to.be.equal(true);
  //       // expect(res.body.data).not.to.exist;
  //       // expect(res.body.meta).not.to.exist;
  //       done()
  //     })
  //   });

  //   it('should remove an exsiting item', (done) => {
  //     const agent7 = chai.request(app);
  //     agent7.delete(`/shop/v1/order/item/${1}`)
  //     .set('Cookie', sellerCookie)
  //     .end((err, res) => {
  //       expect(err).not.to.exist;
  //       // expect(res).to.have.status(204);
  //       // expect(res.body.message).to.be.equal('removed');
  //       // expect(res.body.success).to.be.equal(true);
  //       // expect(res.body.data).not.to.exist;
  //       // expect(res.body.meta).not.to.exist;
  //       done()
  //     })
  //   });
 
  //   it('should update an item details', (done) => {
  //     const agent8 = chai.request(app);
  //     agent8.put(`/shop/v1/order/update/${1}`)
  //     .set('Cookie', sellerCookie)
  //     .send({name: "new name"})
  //     .end((err, res) => {
  //       expect(err).not.to.exist;
  //       // expect(res).to.have.status(204);
  //       // expect(res.body.message).to.be.equal('updated');
  //       // expect(res.body.success).to.be.equal(true);
  //       // expect(res.body.data).not.to.exist;
  //       // expect(res.body.meta).not.to.exist;
  //       done()
  //     })
  //   });

  //   it('should fetch item details', (done) => {
  //     const agent9 = chai.request(app);
  //     agent9.get(`/shop/v1/order/fetch/${1}`)
  //     .set('Cookie', sellerCookie)
  //     .end((err, res) => {
  //       expect(err).not.to.exist;
  //       expect(res).to.have.status(200);
  //       expect(res.body.message).to.be.equal('success');
  //       expect(res.body.success).to.be.equal(true);
  //       expect(res.body.data).to.exist;
  //       expect(res.body.meta).not.to.exist;
  //       expect(res.body.data).to.be.an('array');
  //       expect(res.body.data[0]).to.exist;
  //       expect(res.body.data[0]).to.have.all.keys('id','sku','name','seller_id',
  //       'created_at','warehouse_id','picture','price','one_time_limit','currency',
  //       'available','description','updated_at', 'quantity');
  //       done()
  //     })
  //   });
  // // })
  // })
})