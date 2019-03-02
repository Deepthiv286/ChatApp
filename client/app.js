const app = angular.module('myChatApp', ['ui.router','btford.socket-io']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        /**
         * assigning values to the properties
         */
        url: '/login',
        templateUrl: 'template/login.html',
        controller: 'loginCtrl'
    })
        .state('register', {
            /**
             * assigning values to the properties
             */
            url: '/register',
            templateUrl: 'template/register.html',
            controller: 'registerCtrl'
        })
        .state('forgotPassword', {
            /**
             * assigning values to the properties
             */
            url: '/forgotPassword',
            templateUrl: 'template/forgotPassword.html',
            controller: 'forgotPasswordCtrl'
        })
        .state('resetPassword', {
            /**
             * assigning values to the properties
             */
            url: '/resetPassword',
            templateUrl: 'template/resetPassword.html',
            controller: 'resetPasswordCtrl'
        })
        .state('dashBoard',{
            url: '/dashBoard',
            templateUrl: 'template/dashBoard.html',
            controller: 'chatController'
        })
    /**
     *go to login page if no other option is given 
     */
    $urlRouterProvider.otherwise('login');
});
app.service('SocketService', ['socketFactory', function SocketService(socketFactory){
    return socketFactory({
        ioSocket: io.connect('http://localhost:5000')  
        /**
         * connecting socket io
         */
    })
}])
