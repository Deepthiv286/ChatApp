/************************************************************
 * Purpose : user service 
 * 
 * file : userService.js
 * @author: Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 20/02/2019
 * 
 *************************************************************/
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
exports.getAllUser = (req, callBack) => {
    model.getAllUser((err, data) => {
        if (err) {
            return callBack(err);
        }
        else {
            return callBack(null, data);
        }
    })
}