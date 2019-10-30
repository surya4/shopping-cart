'use strict';

const express  = require('express');
const router  = express.Router();
const userController = require('../controllers/users');
const {authenticator, allowCustomer, 
  allowAdmin, allowSeller} = require('../lib/common');

// CRUD user
router.post('/register',  async (req, res) => {
  const response = await userController.createUser(req.body);

  if (response.success && response.meta) {
    req.session.email = response.meta.email;
    req.session.password = req.body.password;
    req.session.user_roles = response.meta.user_roles;
  }

  return res.status(response.status).send(response)
});

router.get('/fetch/:id', authenticator, async (req, res) => {
  req.body.id = Number(req.params.id);
  const response = await userController.fetchUser(req.body)
  return res.status(response.status).send(response)
});

// authenticate
router.post('/login', async (req, res) => {
  const response = await userController.loginUser(req.body);
  if (response.success && response.meta) {
    req.session.email = response.meta.email;
    req.session.password = req.body.password;
    req.session.user_roles = response.meta.user_roles;
  }

  return res.status(response.status).send(response)
});

router.post('/logout', authenticator, async (req, res) => {
  req.session.destroy(err => {
    res.clearCookie('sid')
    return res.status(200).send('loggedout');
  })
});

router.post('/permission', authenticator, allowAdmin,  async (req, res) => {
  const response = await userController.createUserPermission(req.body);
  return res.status(response.status).send(response)
});

router.post('/role', authenticator, allowAdmin, async (req, res) => {
  const response = await userController.createUserRole(req.body);
  return res.status(response.status).send(response)
});

router.post('/seller', async (req, res) => {
  const response = await userController.createSeller(req.body)
  return res.status(response.status).send(response)
})

module.exports = router;
