const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers.js');
const Signup = require('../controllers/register');
const Login = require('../controllers/login');
const UpdateLoginCount = require('../controllers/updatelogincount');
const UpdateDuration = require('../controllers/updateDuration');
const DeleteUser = require('../controllers/deleteUser');
const GetCode = require('../controllers/getcode');


router.get('/say-something', controllers.saySomething);
router.post('/signup',Signup);
router.post('/login',Login);
router.post('/updatelogincount',UpdateLoginCount);
router.post('/updateduration',UpdateDuration);
router.post('/deleteuser',DeleteUser);
router.post('/getcode',GetCode);

module.exports = router;    