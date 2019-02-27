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
const chatUser = mongoose.model('chat', chatSchema);

chatModel.prototype.chatSave = (req, callBack) => {
    let chatMsg = new chatUser({
        'senderUserId': req.senderUserId,
        'senderName': req.senderName,
        'recieverUserId': req.recieverUserId,
        'recieverName': req.recieverName,
        'message': req.message
    });
    chatMsg.save((err, data) => {
        if (err) {
            console.log("Storing data failed");
            return callBack(err);
        }
        else {
            return callBack(null, data);
        }
    })
}
chatModel.prototype.getData = (callBack) => {
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