const express  = require('express');
const router  = express.Router();

const prodController = require('../controllers/products');

router.post('/category',  async (req, res) => {
  const response = await prodController.createProductCategory(req.body)
  return res.status(response.status).send(response)
})

router.post('/add',  async (req, res) => {
  const response = await prodController.createProduct(req.body)
  return res.status(response.status).send(response)
})

router.post('/seller',  async (req, res) => {
  const response = await prodController.createSeller(req.body)
  return res.status(response.status).send(response)
})

router.post('/warehouse',  async (req, res) => {
  const response = await prodController.createWarehouse(req.body)
  return res.status(response.status).send(response)
})

module.exports = router;