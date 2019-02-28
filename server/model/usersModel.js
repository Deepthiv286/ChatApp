const mongoose = require('mongoose');
/**
 * accessing/importing mongoose
 */
const bcrypt = require('bcryptjs');
/**
 * accessing/importing bcryptjs and schema
 */
const mongoSchema = mongoose.Schema;
/**
 * creating mongoSchema object
 */
const userSchema = new mongoSchema({
    'firstName': { type: String, required: [true, "First name is required"] },
    'lastName': { type: String, required: [true, "Last name is required"] },
    'email': { type: String, required: [true, "Email is required"] },
    'password': { type: String, required: [true, "Password is required"] }
},
    {
        timestamps: true
    });
function userModel() {

}
const user = mongoose.model('user', userSchema);
/**
 * accessing model
 */
function hash(password) {
    let salt = bcrypt.genSaltSync(10);
    let hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
}

userModel.prototype.register = (body, callBack) => {
    try {
        user.find({ 'email': body.email }, (err, data) => {
            if (err) {
                console.log("Error in registration schema");
                return callBack(err);
            }
            else if (data.length > 0) {
                response = { "error": true, "message": "Email already exists", "errorCode": 404 };
                return callBack(response);
            }
            else {
                let newUser = new user({
                    'firstName': body.firstName,
                    'lastName': body.lastName,
                    'email': body.email,
                    'password': hash(body.password)
                });
                newUser.save((err, result) => {
                    if (err) {
                        console.log("Error in the model file", err);
                        return callBack(err);
                    }
                    else {
                        console.log("Registered successfully", result);
                        return callBack(null, result);
                    }
                })
            }
        });
    }
    catch (error) {
        console.log(error.message);
    }
}

userModel.prototype.login = (body, callBack) => {
    try {
        user.find({ 'email': body.email }, (err, data) => {
            if (err) {
                return callBack(err);
            }
            else if (data.length > 0) {
                bcrypt.compare(body.password, data[0].password, function (err, res) {
                    if (err) {
                        console.log("Incorrect password");
                        return callBack(err);
                    }
                    else if (res) {
                        console.log("Login successfull");
                        return callBack(null, data);
                    }
                    else {
                        return callBack("Incorrect password").status(500);
                    }
                });
            }
            else {
                return callBack("Invalid user");
            }
        })
    }
    catch (error) {
        console.log(error.message);
    }
}

userModel.prototype.forgotPassword = (body, callBack) => {
    try {
        user.find({ 'email': body.email }, (err, data) => {
            if (err) {
                return callBack(err);
            }
            else if (data) {
                console.log("Data in models =>", data[0]._id);
                return callBack(null, data);
            }
            else {
                return callBack("Invalid User");
            }
        });
    }
    catch (error) {
        console.log(error.message);
    }
}

userModel.prototype.resetPassword = (res, callBack) => {
    try {
        let password = hash(res.body.data);
        user.update({ _id: res.decoded.payload.user_id }, { password: password }, (err, data) => {
            if (err) {
                callBack(err);
            }
            else {
                callBack(null, data);
            }
        });
    }
    catch (error) {
        console.log(error.message);
    }
}
userModel.prototype.getAllUser = (req,callBack) => {
    user.find({}, (err, data) => {
        if (err) {
            return callBack("Error in the model" + err);
        }
        else {
            return callBack(null, data);
        }
    })
}
module.exports = new userModel;