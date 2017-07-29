const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/user')
/* GET users listing. */
router.post('/register-user', controllerUser.registerUser);

module.exports = router;
