const express  = require('express');
const router  = express.Router();

router.get('/',  async (req, res) => {
  console.log('Inside router');
  const response = {
    status: 200,
    success : true,
    message : 'Success',
    data : ['I am test or index router'],
    meta:{}
  };
  return res.status(200).send(response)
})

module.exports = router;
