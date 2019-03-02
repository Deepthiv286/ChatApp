const model = require('../model/usersModel');

exports.login = (req, callBack) => {
    model.login(req, (err, data) => {
        if (err) {
            return callBack(err);
        }
        else {
            return callBack(null, data);
        }
    })
}
exports.register = (req, callBack) => {
    model.register(req, (err, data) => {
        if (err) {
            return callBack(err);
        }
        else {
            return callBack(null, data);
        }
    })
}
exports.forgotPassword = (req, callBack) => {
    model.forgotPassword(req, (err, data) => {
        if (err) {
            return callBack(err);
        }
        else {
            return callBack(null, data);
        }
    })
}
exports.resetPassword = (req, callBack) => {
    model.resetPassword(req, (err, data) => {
        if (err) {
            return callBack(err);
        }
        else {
            return callBack(null, data);
        }
    })
}
exports.getAllUser = (req,callBack)=>{
    model.getAllUser((err, data) => {
        if (err) {
            return callBack(err);
        }
        else {
            return callBack(null, data);
        }
    })
}