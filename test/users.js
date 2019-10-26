// const userCtrl = require('../controllers/users')

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const http = require('chai-http');
chai.use(http);

const app = require('../app')

describe('Users', () => {
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
    it('create new user', (done) => {
      let new_user1 = Object.assign({}, user);
      new_user1.email = Math.floor(Math.random() * 10000) + new_user1.email;

      chai.request(app).post('/shop/v1/user/register')
      .send(new_user1)
      .end((err, res) => {
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

    it('check for duplicate entry', (done) => {
      let new_user2 = Object.assign({}, user);
      chai.request(app).post('/shop/v1/user/register')
      .send(new_user2)
      .end((err, res) => {
        expect(res).to.have.status(403);
        expect(res.body.message).to.be.equal('userExists');
        expect(res.body.success).to.be.equal(false);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist;
        done()
      })
    })

    it('check for small password', (done) => {
      let new_user3 = Object.assign({}, user);
      new_user3.password = "abc"
      chai.request(app).post('/shop/v1/user/register')
      .send(new_user3)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body.message).to.be.equal('shortPassword');
        expect(res.body.success).to.be.equal(false);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist;
        done()
      })
    })

    it('check for param missing', (done) => {
      let new_user4 = Object.assign({}, user);
      delete new_user4.name;
      chai.request(app).post('/shop/v1/user/register')
      .send(new_user4)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.be.equal('nameMissing');
        expect(res.body.success).to.be.equal(false);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist;
        done()
      })
    })

    it('check for invalid email', (done) => {
      let new_user5 = Object.assign({}, user);
      new_user5.email = "abcd";
      chai.request(app).post('/shop/v1/user/register')
      .send(new_user5)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body.message).to.be.equal('invalidEmail');
        expect(res.body.success).to.be.equal(false);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist
        done()
      })
    })

    it('check for invalid phone', (done) => {
      let new_user6 = Object.assign({}, user);
      new_user6.phone = "abcd";
      chai.request(app).post('/shop/v1/user/register')
      .send(new_user6)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body.message).to.be.equal('invalidPhone');
        expect(res.body.success).to.be.equal(false);
        expect(res.body.data).not.to.exist;
        expect(res.body.meta).not.to.exist;
        done()
      })
    })

  })
});