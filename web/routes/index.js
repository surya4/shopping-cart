const express    = require('express');
const router     = express.Router();
const Index = require('../controllers/index');

router.get('/', Index.index);

module.exports = router;