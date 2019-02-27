/************************************************************
 * Purpose : Server application starts here.
 * 
 * file : server.js
 * @overview : Import all required packages here.
 * @author: Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 16/02/2019
 * 
 *************************************************************/
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./router/routes');
const mongoose = require('mongoose');
const db = require('./config/config');
const PORT = 5000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const expressValidator = require('express-validator');
app.use(expressValidator());
/**
 * calling router
 */
app.use('/', routes);
app.use(express.static('../client'));
require('dotenv').config();
app.get('/', function (req, res) {
    res.json('Database is connected successfully');
});
app.listen(PORT, function () {
    console.log("Server running on localhost" + PORT);
})
// mongoose.connect(db.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Connected to the database successfully");
// }).catch(err => {
//     console.log("Connection to the database failed\n" + err);
//     process.exit();
// });

// var url = 'mongodb+srv://admin:admin123@cluster0-5opho.mongodb.net/test?retryWrites=true';

mongoose.connect(db.url,{useNewUrlParser:true})
.then(()=> console.log("MongoDB connected."))
.catch(err => console.log(err))
