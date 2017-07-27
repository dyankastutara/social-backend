var express = require('express');
var router = express.Router();
const crypto = require('crypto');
/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(crypto.getCiphers())
  res.render('index', { title: 'Express' });
});

module.exports = router;
