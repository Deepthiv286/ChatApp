/************************************************************
 * 
 * Purpose      :   To authentic the JWT token.
 * 
 * @description
 * 
 * @file        :   authentication.js
 * @overview    :   To authenticate the jwt token sent by user during request.
 * @author      :   Deepthi V <deepthiv286@gmail.com>
 * @version     :   1.0
 * @since       :   24-02-2019
 * 
 * **********************************************************/
const jwt = require('jsonwebtoken');
const secretKey = "abcde";
const auth = function (req, res, next) {
    try {
        let token = req.headers["token"];
        console.log(token);
        let response = {
            'message': "Unauthorised user "
        };
        jwt.verify(token, secretKey, function (err, decodedData) {
            if (err) {
                console.log(err)
                return res.status(401).send(response);
            }
            else {
                console.log(decodedData);
                next();
            }
        });
    }
    catch (err) {
        console.log("Error in generating token")
    }
}
module.exports = auth;
