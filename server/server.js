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
/**
 * to include the HTTP module
 */
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./router/routes');
const mongoose = require('mongoose');
const db = require('./config/config');
const PORT = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const expressValidator = require('express-validator');
app.use(expressValidator());
/**
 * calling router
 */
app.use('/', routes);
app.use(express.static('../client'));
const server = app.listen(PORT, function () {
    console.log("Server running on localhost : " + PORT);
})
const chatController = require('./controller/chatController');
const io = require('socket.io')(server);
/**
* connecting to the socket
*/
io.on('connection', function (socket) {
    console.log("Socket is connected!");
    /**
     * waits for event and callback function is called whenever that event is triggered
     */
    socket.on('createMessage', function (message) {
        /**
         * saving message to the database
         */
        chatController.message(message, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(message + " in server")
                /**
                 * emits message to all the sockets connected to it
                 */
                io.emit('newMessageSingle', message);
            }
        })
        /**
         * disconnect event is called when the client is disconnected
         */
        socket.on('disconnect', function () {
            console.log("Socket Disconnected!")
        });
    });
});
const cors = require('cors');
app.use(cors());
mongoose.connect(db.url, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected."))
    .catch(err => console.log(err))
