/************************************************************
 * Purpose : chat controller takes place
 * 
 * file : chatController.js
 * @author: Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 27/02/2019
 * 
 *************************************************************/
const chatServices = require('../services/chatService');

module.exports.message = (req, res) => {
    try {
        chatServices.addMessage(req, (err, data) => {
            if (err) {
                res(err);
            }
            else {
                res(null, data);
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}
module.exports.getUserMsg = (req, res) => {
    try {
        chatServices.getUserMsg(req, (err, data) => {
            var response = {};
            if (err) {
                response.success = false;
                response.result = err;
                return res.status(500).send(response);
            }
            else {
                response.success = true;
                response.result = data;
                return res.status(200).send(response);
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}