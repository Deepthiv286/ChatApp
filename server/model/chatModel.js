const mongoose = require('mongoose');
const mongoSchema = mongoose.Schema;
const chatSchema = new mongoSchema({
    'senderUserId': { type: mongoSchema.Types.ObjectId, ref: 'user', required: [true, "Sender Id is required"] },
    'senderName': { type: String, required: [true, "Sender name is required"] },
    'recieverUserId': { type: mongoSchema.Types.ObjectId, ref: 'user', required: [true, "Reciever Id is required"] },
    'recieverName': { type: String, required: [true, "reciever name is required"] },
    'message': { type: String, required: [true, " Message is required "] }
}, {
        timestamps: true
    });
function chatModel() {

}
const chat = mongoose.model('chatData', chatSchema);

chatModel.prototype.addMessage = (chatData, callBack) => {
    let newMsg = new chat({
        'senderUserId': chatData.senderUserId,
        'senderName': chatData.senderName,
        'recieverUserId': chatData.recieverUserId,
        'recieverName': chatData.recieverName,
        'message': chatData.message
    });
    newMsg.save((err, data) => {
        if (err) {
            console.log("Storing data failed");
            return callBack(err);
        }
        else {
            console.log("Chat data saved successfully");
            return callBack(null, data);
        }
    })
}
chatModel.prototype.getUserMsg = (req,callBack) => {
    chatUser.find({}, (err, data) => {
        if (err) {
            return callBack("Error in chat model" + err);
        }
        else {
            return callBack(null, data);
        }
    })
}
module.exports = new chatModel();