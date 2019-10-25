const express  = require('express');
const router  = express.Router();
const ordersController = require('../controllers/orders');

router.post('/add',  async (req, res) => {
  const response = await ordersController.createOrder(req.body)
  return res.status(response.status).send(response)
})

module.exports = router;