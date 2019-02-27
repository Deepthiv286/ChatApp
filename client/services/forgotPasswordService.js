app.service('forgotPasswordService', function ($http, $location) {
    try {
        this.forgotPassword = function (data, $scope) {
            $http({
                /**
                 * applying http properties
                 */
                method: 'POST',
                url: 'http://localhost:5000/forgotPassword',
                data: data
            }).then(
                function successCallBack(response) {
                    /**
                     * function to proceed with forgot password if successfull
                     */
                    console.log("Forgot password successfull");
                    //$location.path('dashBoard');
                    console.log(response);
                    $scope.forgotPasswordMessage = "Forgot password successfull";
                },
                function errorCallBack(response) {
                    /**
                     * function to show error if forgot password fails
                     */
                    console.log("Forgot password failed");
                    console.log(response);
                    $scope.forgotPasswordMessage = "Forgot password unsuccessfull";
                }
            )
        }
    } catch (error) {
        console.log(error.message);
    }
});