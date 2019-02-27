app.service('loginService', function ($http, $location) {
    try {
        let self = this;
        self.login = function (data, $scope) {
            $http({
                /**
                 * applying http properties
                 */
                method: 'POST',
                url: 'http://localhost:5000/login',
                data: data
            }).then(
                function successCallBack(response) {
                    /**
                     * function to proceed with login if successfull
                     */
                    console.log("Login successfull");
                    $location.path('/dashBoard');
                    console.log(response);
                    $scope.loginMessage = "Login successfull";
                },
                function errorCallBack(error) {
                    /**
                     * function to show error if login fails
                     */
                    console.log("Login failed");
                    console.log(error);
                    $scope.loginMessage = "Login unsuccessfull";
                }
            )
        }
    } catch (error) {
        console.log(error.message);
    }
});