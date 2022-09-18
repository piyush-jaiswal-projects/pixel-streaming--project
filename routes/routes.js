const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers.js');
const Signup = require('../controllers/register');
const Login = require('../controllers/login');
const UpdateLogin = require('../controllers/updatelogin');


router.get('/say-something', controllers.saySomething);
router.post('/signup',Signup);
router.post('/login',Login);
router.post('/updatelogin',UpdateLogin);

module.exports = router;    