const chatModel = require('../model/chatModel');

exports.addMessage = (req, callback) => {
    chatModel.addMessage(req, (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}
exports.getAllChat = (req, callback) => {
    chatModel.getData(req, (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}