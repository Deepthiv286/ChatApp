var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');
var chatController = require("../controller/chatController");
var auth = require('../authentication/authentication');
router.get('/getAllUser', auth, userController.getAllUser);
router.get('/getUserMsg', auth, chatController.getUserMsg);
module.exports = router;