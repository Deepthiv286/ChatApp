/************************************************************
 * Purpose : jwt token is generated 
 * 
 * file : token.js
 * @author: Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 25/02/2019
 * 
 *************************************************************/
const jwt = require('jsonwebtoken');
module.exports = {
    GenerateToken(payload) {
        const token = jwt.sign({ payload }, 'secretkey', { expiresIn: 604800 })
        const obj = {
            success: true,
            message: 'Token Generated!!',
            token: token
        }
        return obj;
    }
}