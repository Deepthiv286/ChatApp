var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');
var chatController = require("../controller/chatController");
var auth = require('../authentication/authentication');
function getAll() {
    try {
        router.get('/getAllUser', auth, userController.getAllUser);
        router.get('/getUserMsg', auth, chatController.getUserMsg);
    } catch (error) {
        console.log("Error found while receving token - authorization.js");
    }
}
getAll();
module.exports = router;