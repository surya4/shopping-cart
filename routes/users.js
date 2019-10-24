const express  = require('express');
const router  = express.Router();
const userController = require('../controllers/users');

router.post('/register',  async (req, res) => {
  const response = await userController.test()
  return res.status(response.status || 200).send(response)
})

module.exports = router;
