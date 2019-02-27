var chatServices = require('../services/chatService');

module.exports.chatMessage = (req, res) => {
    try {
        chatServices.chatService(req, (err, data) => {
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
module.exports.getAllChats = (req, res) => {
    try {
        chatServices.getAllChat(req, (err, data) => {
            var response = {};
            if (err) {
                response.sucess = false;
                response.result = err;
                return res.status(500).send(responsee);
            }
            else {
                response.sucess = true;
                response.result = data;
                return res.status(200).send(response);
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}