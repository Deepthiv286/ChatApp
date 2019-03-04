/************************************************************
 * Purpose : sending mail using node mailer
 * 
 * file : sendMail.js
 * @author: Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 25/02/2019
 * 
 *************************************************************/
const nodemailer = require('nodemailer');
/**
 * use event emitters
 */
exports.sendEmailFunction = (url) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'deepthiv286@gmail.com',
                pass: ''
            },
        });
        const mailOptions = {
            from: 'deepthiv286@gmail.com',
            to: 'deepthiv286@gmail.com',
            subject: 'Reset password link',
            text: 'Your Email verifaction link is:\n\n' + url
        };
        transporter.sendMail(mailOptions, (err, info) => {

            if (err) {
                console.log("Error on sending mail : ", err)
            }
            else
                console.log('Result of sending mail : ', info);
        });
    } catch (error) {
        console.log(error.message);
    }
}