console.log("sdfhjk");

app.controller('chatController', function ($scope, SocketService, $state, chatServices) {
    
    
    $scope.message = '';
    $scope.allUserArr = [];
    $scope.currUserName = localStorage.getItem('name');
    $scope.currUser = localStorage.getItem('userid');
    $scope.recieverUserName = localStorage.getItem('rusername');
    console.log("===============",$scope.recieverUserName);
    var token = localStorage.getItem("token");  
    if (token === null) {
        /**
         * goes to login page if token is null
         */
        $state.go('login');
    }

    SocketService.on('newMessage', (message) => {
        try {
            /**
             * listening to the events
             */
            if (localStorage.getItem('userid') == message.senderUserId || (localStorage.getItem('userid') == message.recieverUserId && localStorage.getItem('ruserId') == message.senderUserId)) {
                if ($scope.allUserArr === undefined) {
                    $scope.allUserArr = message;
                    /**
                     * assigns message to the variable
                     */
                } else {
                    $scope.allUserArr.push(message);
                    /**
                     * the message is pushed or added to the array
                     */
                }
            }
        }
        catch (err) {
            console.log("Error in finding the message");
        }
    })
    $scope.getAllUsers = function () {
        chatServices.getAllUsers($scope, token);
    }
    $scope.getAllUsers();
    $scope.person = function (userData) {
        console.log("================",userData);
        
        /**
         * select person from the list
         */
        $scope.allUserArr = '';
        /**
         * getting data from local storage
         */
        localStorage.setItem('rusername', userData.firstName);
        localStorage.setItem('ruserId', userData._id);
        $scope.recieverUserName = localStorage.getItem('rusername');
        $scope.getUserMsg();
    }
    /**
     * get all the messages
     */
    $scope.getUserMsg = function () {
        console.log("i am called");
        chatServices.getUserMsg($scope);
    }
    $scope.getUserMsg();
    $scope.sendMessage = function () {
        try {
            var msg = {
                'senderUserId': localStorage.getItem('userid'),
                'senderName': localStorage.getItem('name'),
                'recieverUserId': localStorage.getItem('ruserId'),
                'recieverName': localStorage.getItem('rusername'),
                'message': $scope.message
            };
            $scope.message = '';
            SocketService.emit('createMessage', msg);
            /**
             * emmiting the message to the browser
             */
        }
        catch (err) {
            console.log("Error in sending message to the reciever");
        }
    }
    $scope.logout = function () {
        try {
            localStorage.clear();
            $state.go('login');
            /**
             * return back to login page
             */
        }
        catch (err) {
            console.log("Error in logging out");
        }
    }
});