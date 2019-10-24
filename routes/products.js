const express  = require('express');
const router  = express.Router();
const productsController = require('../controllers/products');

router.post('/add',  async (req, res) => {
  const response = await productsController.test()
  return res.status(response.status || 200).send(response)
})

module.exports = router;