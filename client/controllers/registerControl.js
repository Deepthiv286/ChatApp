app.controller('registerCtrl', function ($scope, registerService) {
    $scope.register = function () {
        let data = {
            'firstName': $scope.firstName,
            'lastName': $scope.lastName,
            'email': $scope.email,
            'password': $scope.password,
            'confirmPassword': $scope.confirmPassword
        }
        /**
         * checks if password and confirm password are equal
         */
        if ($scope.password != $scope.confirmPassword) {
            console.log("In controller=====>");
            $scope.message = "password and confirm-password are not a match ";
        } else {
            registerService.register(data, $scope);
        }
    }
});