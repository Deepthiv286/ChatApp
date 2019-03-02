const chatModel = require('../model/chatModel');

exports.addMessage = (req, callback) => {
    console.log("Request on chat service");
    chatModel.addMessage(req, (err, data) => {
        if (err) {
            callback("Error on service file : "+err);
        } else {
            console.log("Data on service file : ", data);
            callback(null, data);
        }
    })
}
exports.getUserMsg = (req, callback) => {
    chatModel.getUserMsg((err, data) => {
        if (err) {
            callback("Chat services is not working : "+err);
        } else {
            console.log("Chat service is working");
            callback(null, data);
        }
    })
}