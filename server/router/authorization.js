/************************************************************
 * Purpose : getting all users and messages with authorization
 * 
 * file : authorization.js
 * @author: Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 22/02/2019
 * 
 *************************************************************/
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const chatController = require("../controller/chatController");
const auth = require('../authentication/authentication');
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