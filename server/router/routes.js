/************************************************************
 * Purpose : api calls takes place
 * 
 * file : routes.js
 * @author: Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 20/02/2019
 * 
 *************************************************************/
const userCtrl = require('../controller/userController');
// const chatCtrl = require('../controller/chatController');
const author = require('./authorization');
const express = require('express');
const router = express.Router();
router.post('/login',userCtrl.login);
router.post('/register',userCtrl.register);
router.post('/forgotPassword',userCtrl.forgotPassword);
router.post('/resetPassword',userCtrl.resetPassword);
// router.get('/getAllUser',userCtrl.getAllUser);
router.use('/auth',author);
module.exports = router;