'use strict';

const express  = require('express');
const router  = express.Router();
const userController = require('../controllers/users');

// CRUD user
router.post('/register',  async (req, res) => {
  const response = await userController.createUser(req.body);
  return res.status(response.status).send(response)
});

router.get('/user/:id',  async (req, res) => {
  req.body.user_id = Number(req.params.id);
  const response = await userController.fetchUser(req.body)
  return res.status(response.status).send(response)
});

router.put('/user/:id',  async (req, res) => {
  req.body.user_id = Number(req.params.id);
  const response = await userController.updateUser(req.body)
  return res.status(response.status).send(response)
});

// authenticate
router.post('/login',  async (req, res) => {
  const response = await userController.loginUser(req.body)
  return res.status(response.status).send(response)
});

router.post('/logout',  async (req, res) => {
  const response = await userController.logoutUser(req.body)
  return res.status(response.status).send(response)
});

module.exports = router;
