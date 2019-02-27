const userService = require('../services/service');
const genToken = require('../middleware/token');
const sendMail = require('../middleware/sendMail');

module.exports.register = (req, res) => {
    try {
        req.check('firstName', 'First name is not valid').isLength({ min: 3 }).isAlpha();
        req.check('lastName', 'Last name is not valid').isLength({ min: 1 }).isAlpha();
        req.check('email', 'Email is not valid').isEmail();
        req.check('password', 'Password is not valid').isLength({ min: 8 });
        req.check('confirmPassword','Confirm password is not valid').equals(req.body.password);
        let errors = req.validationErrors();
        let response = {};
        if (errors) {
            console.log(errors);
            response.success = false;
            response.error = errors;
            return res.status(422).send(response);
        }
        else {
            userService.register(req.body, (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send({
                        message: err
                    });
                }
                else {
                    return res.status(200).send({
                        message: data
                    });
                }
            });
        }
    } catch (error) {
        console.log(error.message);
    }
}
module.exports.login = (req, res) => {
    try {
        req.check('email', 'Email is not valid').isEmail();
        req.check('password', 'Password is not valid').isLength({ min: 8 });
        let errors = req.validationErrors();
        let response = {};
        if (errors) {
            console.log(errors);
            response.success = false;
            response.error = errors;
            return res.status(422).send(response);
        }
        else {
            userService.login(req.body, (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send({
                        message: err
                    });
                }
                else {
                    var jwt = require('jsonwebtoken');
                    var token = jwt.sign({ id: data._id }, 'secretKey', { expiresIn: 1400 });
                    return res.status(200).send({
                        message: data,
                        "token": token
                    });
                }
            });
        }
    } catch (error) {
        console.log(error.message);
    }
}
module.exports.forgotPassword = (req, res) => {
    try {
        req.check('email', 'Email is not valid').isEmail();
        let errors = req.validationErrors();
        let response = {};
        if (errors) {
            console.log(errors);
            response.success = false;
            response.error = errors;
            return res.status(422).send(response);
        }
        else {
            userService.forgotPassword(req.body, (err, data) => {
                var responses = {};
                if (err) {
                    console.log(err);
                    return res.status(500).send({
                        message: err
                    });
                }
                else {
                    responses.success = true;
                    responses.result = data;
                    console.log("Data in controller : ", data[0]._id);
                    let payload = {
                        user_id: data[0]._id
                    }
                    let obj = genToken.GenerateToken(payload);
                    const url = `http://localhost:5000/resetPassword/${obj.token}`;
                    console.log("url in controller", url);
                    sendMail.sendEmailFunction(url);
                    return res.status(200).send(url);
                }
            });
        }
    } catch (error) {
        console.log(error.message);
    }
}
module.exports.resetPassword = (req, res) => {
    try {
        req.check('newPassword', 'Password is not valid').isLength({ min: 8 });
        req.check('confirmPassword', 'Confirm password is not valid').isLength({ min: 8 }).equals(req.body.confirmPassword);
        let errors = req.validationErrors();
        let response = {};
        if (errors) {
            console.log(errors);
            response.success = false;
            response.error = errors;
            return res.status(422).send(response);
        }
        else {
            userService.resetPassword(req, (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send({
                        message: err
                    });
                }
                else {
                    return res.status(200).send({
                        message: data
                    });
                }
            });
        }
    } catch (error) {
        console.log(error.message);
    }
}
module.exports.getAllUser = (req, res) => {
    userService.getAllUser(req.body, (err, data) => {
        let response = {};
        if (err) {
            return callBack(err);
        }
        else {
            response.success = true;
            response.error = data;
            return res.status(200).send(response);
        }
    });
} 