const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const http = require('chai-http');
chai.use(http);

const app = require('../app')

describe('Users', () => {
  let customerCookie;
  let adminCookie;

  describe('create user', () => {
    let user = {
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "name": "JOhn Wick",
      "gender": "male",
      "email": "john4@wick.com",
      "password": "abcd",
      "phone": "+971555555555",
      "street": "209 Balfour Place, Linwood, Arizona, 9647",
      "city": "Kersey",
      "state": "Virginia",
      "country": "Viet Nam",
      "about_me": "Elit anim laborum ut aliqua cupidatat Lorem eu eu proident sint cillum minim reprehenderit. Velit et et velit nostrud anim. Esse sint id quis laborum labore ut sunt exercitation labore eu mollit dolore. Nisi anim do pariatur quis duis labore deserunt minim incididunt.\r\n",
      "verified_email": 0,
      "verified_phone": 1,
      "latitude": 65.155827,
      "longitude": -160.861496
    };
    it('should create new user', (done) => {
      let new_user1 = Object.assign({}, user);
      new_user1.email = Math.floor(Math.random() * 10000) + new_user1.email;

      chai.request(app).post('/shop/v1/user/register')
      .send(new_user1)
      .end((err, res) => {
        console.log("user","1", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(201);
        expect(res.body.message).to.be.equal('userRegistered');
        expect(res.body.success).to.be.equal(true);
        expect(res.body.data).to.exist;
        expect(res.body.meta).to.exist;
        expect(res.body.meta.user_roles).to.exist;
        expect(res.body.meta.user_roles).to.be.an('array')
        expect(res.body.meta.email).to.exist;
        expect(res.body.meta.user_roles.length).not.to.be.equal(0);
        done()
      })
    })

    it('should check for duplicate entry', (done) => {
      let new_user2 = Object.assign({}, user);
      chai.request(app).post('/shop/v1/user/register')
      .send(new_user2)
      .end((err, res) => {
        console.log("user","2", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(403);
        expect(res.body.message).to.be.equal('userExists');
        expect(res.body.success).to.be.equal(false);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist;
        done()
      })
    })

    it('should check for small password', (done) => {
      let new_user3 = Object.assign({}, user);
      new_user3.password = "abc"
      chai.request(app).post('/shop/v1/user/register')
      .send(new_user3)
      .end((err, res) => {
        console.log("user","3", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(401);
        expect(res.body.message).to.be.equal('shortPassword');
        expect(res.body.success).to.be.equal(false);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist;
        done()
      })
    })

    it('should check for param missing', (done) => {
      let new_user4 = Object.assign({}, user);
      delete new_user4.name;
      chai.request(app).post('/shop/v1/user/register')
      .send(new_user4)
      .end((err, res) => {
        console.log("user","4", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(400);
        expect(res.body.message).to.be.equal('nameMissing');
        expect(res.body.success).to.be.equal(false);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist;
        done()
      })
    })

    it('should check for invalid email', (done) => {
      let new_user5 = Object.assign({}, user);
      new_user5.email = "abcd";
      chai.request(app).post('/shop/v1/user/register')
      .send(new_user5)
      .end((err, res) => {
        console.log("user","5", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(401);
        expect(res.body.message).to.be.equal('invalidEmail');
        expect(res.body.success).to.be.equal(false);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist
        done()
      })
    })

    it('should check for invalid phone', (done) => {
      let new_user6 = Object.assign({}, user);
      new_user6.phone = "abcd";
      chai.request(app).post('/shop/v1/user/register')
      .send(new_user6)
      .end((err, res) => {
        console.log("user","6", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(401);
        expect(res.body.message).to.be.equal('invalidPhone');
        expect(res.body.success).to.be.equal(false);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist;
        done()
      })
    })
  })

  describe('user login', () => {
    let user = {
      "user_name": "john4@wick.com",
      "password": "abcd",
    };
    it('should sucess when user logges in', (done) => {
      let new_user1 = Object.assign({}, user);
      chai.request(app).post('/shop/v1/user/login')
      .send(new_user1)
      .end((err, res) => {
        console.log("user","7", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(200);
        expect(res.body.message).to.be.equal('success');
        expect(res.body.success).to.be.equal(true);
        expect(res.body.data).to.exist;
        expect(res.body.meta).to.exist;
        expect(res.body.data).to.be.an('array');
        expect(res.body.data[0]).to.exist;
        expect(res.body.data[0]).to.have.all.keys('DOB','about_me','city','country',
        'created_at','email','id','latitude','longitude','name','password','phone',
        'picture','state','street','updated_at','verified_email','verified_phone','zipcode');
        expect(res.body.meta.user_roles).to.exist;
        expect(res.body.meta.user_roles).to.be.an('array')
        expect(res.body.meta.email).to.exist;
        expect(res.body.meta.user_roles.length).not.to.be.equal(0);

        customerCookie = res.headers['set-cookie'].pop().split('should ;')[0];
        done()
      })
    })

    it('should login failure for missing field', (done) => {
      let new_user2 = Object.assign({}, user);
      delete new_user2.user_name;
      chai.request(app).post('/shop/v1/user/login')
      .send(new_user2)
      .end((err, res) => {
        console.log("user","8", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(400);
        expect(res.body.message).to.be.equal('user_nameMissing');
        expect(res.body.success).to.be.equal(false);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist;
        done()
      })
    })

    it('should login failure for wrong password', (done) => {
      let new_user3 = Object.assign({}, user);
      new_user3.password = "password";
      chai.request(app).post('/shop/v1/user/login')
      .send(new_user3)
      .end((err, res) => {
        console.log("user","9", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(401);
        expect(res.body.message).to.be.equal('wrongPassword');
        expect(res.body.success).to.be.equal(false);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist;
        done()
      })
    })
  })

  describe('fetch user', () => {
    const agent1 =  chai.request(app);
    const agent2 =  chai.request(app);

    it('should get user by id', (done) => {
      const userId = 25;
      agent1.get(`/shop/v1/user/fetch/${userId}`)
      .set('Cookie', customerCookie)
      .end((err, res) => {
        console.log("user","10", res)

        console.log("1", res)

        expect(err).not.to.exist;
        expect(res).to.have.status(200);
        expect(res.body.message).to.be.equal('success');
        expect(res.body.success).to.be.equal(true);
        expect(res.body.data).to.exist;
        expect(res.body.meta).not.to.exist;
        expect(res.body.data).to.be.an('array');
        expect(res.body.data[0]).to.exist;
        expect(res.body.data[0]).to.have.all.keys('DOB','about_me','city','country',
        'created_at','email','id','latitude','longitude','name','password','phone',
        'picture','state','street','updated_at','verified_email','verified_phone','zipcode');
        done()
      })
    })

    it('should check for param missing', (done) => {
      let userId = "abcd";
      agent2.get(`/shop/v1/user/fetch/${userId}`)
      .set('Cookie', customerCookie)
      .end((err, res) => {
        console.log("user","11", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(401);
        expect(res.body.message).to.be.equal('unauthorizedRequest');
        expect(res.body.success).to.be.equal(false);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist;
        done()
      })
    })
  })

  describe('create permission', () => {
    const agent3 =  chai.request(app);
    const agent4 =  chai.request(app);

    it('should get sucess when admin user logges in', (done) => {
      agent3.post('/shop/v1/user/login')
      .send({ user_name: "barnettpacheco@terrasys.com", password: "abcd"})
      .end((err, res) => {
        console.log("user","12", res)
        expect(err).not.to.exist;
        adminCookie = res.headers['set-cookie'].pop().split('should ;')[0];
        done()
      })
    })

    it('should create new permission', (done) => {
      agent4.post('/shop/v1/user/permission')
      .set('Cookie', adminCookie)
      .send({user_id: 1, role_id: 1})
      .end((err, res) => {
        console.log("user","13", res)
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
    })
  })

  describe('create role', () => {
    it('should create new role', (done) => {
      const agent5 =  chai.request(app);
      agent5.post('/shop/v1/user/role')
      .set('Cookie', adminCookie)
      .send({"role": "admin"})
      .end((err, res) => {
        console.log("user","14", res)
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
    })
  })

  describe('create seller', () => {
    let user = {
      "picture": "http://placehold.it/32x32",
      "logo": "http://placehold.it/32x32",
      "age": 20,
      "name": "JOhn Seller",
      "gender": "male",
      "email": "john-seller@wick.com",
      "password": "abcd",
      "phone": "+971555555555",
      "street": "209 Balfour Place, Linwood, Arizona, 9647",
      "city": "Kersey",
      "state": "Virginia",
      "country": "Viet Nam",
      "about_me": "Elit anim laborum ut aliqua cupidatat Lorem eu eu proident sint cillum minim reprehenderit. Velit et et velit nostrud anim. Esse sint id quis laborum labore ut sunt exercitation labore eu mollit dolore. Nisi anim do pariatur quis duis labore deserunt minim incididunt.\r\n",
      "about_us": "Elit anim laborum ut aliqua cupidatat Lorem eu eu proident sint cillum mi",
      "verified_email": 0,
      "verified": 1,
      "verified_phone": 1,
      "latitude": 65.155827,
      "longitude": -160.861496
    };
    user.email = Math.floor(Math.random() * 10000) + user.email;

    it('should create new seller', (done) => {
      chai.request(app).post('/shop/v1/user/seller')
      .send(user)
      .end((err, res) => {
        console.log("user","15", res)
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
    })

    it('should check if seller account exists', (done) => {
      chai.request(app).post('/shop/v1/user/seller')
      .send(user)
      .end((err, res) => {
        console.log("user","16", res)
        expect(err).not.to.exist;
        expect(res).to.have.status(400);
        expect(res.body.message).to.be.equal('existingSeller');
        expect(res.body.success).to.be.equal(false);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist;
        done()
      })
    })

  })
});