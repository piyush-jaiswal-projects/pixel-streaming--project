const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers.js');
const Signup = require('../controllers/register');
const Login = require('../controllers/login');
const UpdateLoginCount = require('../controllers/updatelogincount');
const UpdateLanguage = require('../controllers/updatelangage.js');
const UpdateDuration = require('../controllers/updateDuration');
const DeleteUser = require('../controllers/deleteUser');
const GetCode = require('../controllers/getcode');
const CheckUser = require('../controllers/checkuser');
const StartTimer = require('../controllers/startTimer');
const SetNewAdmin = require('../controllers/adminPanel/setNewAdmin.js');
const SetStreamDuration = require('../controllers/adminPanel/setStreamDuration.js');
const GetStreamDuration = require('../controllers/adminPanel/getStreamDuration.js');


router.get('/say-something', controllers.saySomething);
router.post('/signup',Signup);
router.post('/login',Login);
router.post('/updatelogincount',UpdateLoginCount);
router.post('/updatelanguage',UpdateLanguage);
router.post('/updateduration',UpdateDuration);
router.post('/deleteuser',DeleteUser);
router.post('/getcode',GetCode);
router.post('/checkuser',CheckUser);
router.post('/startTimer',StartTimer);
router.post('/setNewAdmin', SetNewAdmin);
router.post('/setStreamDuration', SetStreamDuration);
router.post('/getStreamDuration', GetStreamDuration);

module.exports = router;    