app.controller('loginCtrl', function ($scope, loginService) {

    $scope.login = function () {
        let data = {
            'email': $scope.email,
            'password': $scope.password
        }
        loginService.login(data, $scope);
    }
});
