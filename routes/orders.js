const express  = require('express');
const router  = express.Router();
const ordersController = require('../controllers/orders');

router.post('/add',  async (req, res) => {
  const response = await ordersController.test()
  return res.status(response.status || 200).send(response)
})

module.exports = router;