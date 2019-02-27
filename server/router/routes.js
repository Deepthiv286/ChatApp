const userCtrl = require('../controller/userController');
const chatCtrl = require('../controller/chatController')
const auth = require('../authentication/authentication');
const express = require('express');
const router = express.Router();
router.post('/login',userCtrl.login);
router.post('/register',userCtrl.register);
router.post('/forgotPassword',userCtrl.forgotPassword);
router.post('/resetPassword/:token',auth.authen,userCtrl.resetPassword);
router.get('/getAllUser',userCtrl.getAllUser);
router.get('/getAllChats',chatCtrl.getAllChats);
//router.use('/auth',authorization);
module.exports = router;