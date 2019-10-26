const express  = require('express');
const router  = express.Router();

const ordersController = require('../controllers/orders');
const {authenticator, allowCustomer, 
  allowAdmin, allowSeller} = require('../lib/common');
  
// orders
router.post('/order', authenticator, async (req, res) => {
  const response = await ordersController.createOrder(req.body)
  return res.status(response.status).send(response)
})

router.get('/order/:id', authenticator, async (req, res) => {
  req.body.id = Number(req.params.id);
  const response = await ordersController.fetchOrder(req.body)
  return res.status(response.status).send(response)
})

router.put('/order/:id', authenticator, async (req, res) => {
  req.body.id = Number(req.params.id);
  const response = await ordersController.updateOrder(req.body)
  return res.status(response.status).send(response)
})

// carts
router.post('/addToCart', authenticator, allowCustomer, async (req, res) => {
  const response = await ordersController.addToCart(req.body)
  return res.status(response.status).send(response)
})

router.get('/activeCart/:id', authenticator, allowCustomer, async (req, res) => {
  // user id
  req.body.id = Number(req.params.id);
  const response = await ordersController.fetchActiveCartByUser(req.body)
  return res.status(response.status).send(response)
})

router.get('/cart/:id', authenticator, allowCustomer, async (req, res) => {
  // order id
  req.body.id = Number(req.params.id);
  const response = await ordersController.fetchUserCart(req.body)
  return res.status(response.status).send(response)
})

router.put('/removeFromCart', authenticator, allowCustomer, async (req, res) => {
  const response = await ordersController.removeFromCart(req.body)
  return res.status(response.status).send(response)
})

// shipments
router.post('/ship', authenticator, async (req, res) => {
  const response = await ordersController.createShipment(req.body)
  return res.status(response.status).send(response)
})

router.get('/ship/:id', authenticator, async (req, res) => {
  req.body.id = Number(req.params.id);
  const response = await ordersController.fetchUserShipment(req.body)
  return res.status(response.status).send(response)
})

router.put('/ship/:id', authenticator, async (req, res) => {
  req.body.id = Number(req.params.id);
  const response = await ordersController.updateUserShipment(req.body)
  return res.status(response.status).send(response)
})
module.exports = router;