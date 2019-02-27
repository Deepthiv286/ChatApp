const app = angular.module('myChatApp', ['ui.router']);

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
            url: '/resetPassword/:token',
            templateUrl: 'template/resetPassword.html',
            controller: 'resetPasswordCtrl'
        })
        .state('dashBoard',{
            url: '/dashBoard',
            templateUrl: 'template/dashBoard.html',
            controller: 'chatCtrl'
        })
    /**
     *go to login page if no other option is given 
     */
    $urlRouterProvider.otherwise('login');
});

// resetPassword/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOiI1Yzc1MDA3ZWM3ZmZkYzJjNTNjMGY2NjgifSwiaWF0IjoxNTUxMTg1NzQwLCJleHAiOjE1NTEyMDM3NDB9.2OCcnlHM9eXi-