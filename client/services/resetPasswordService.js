app.service('resetPasswordService', function ($http, $location) {
    try {
        this.resetPassword = function (data, $scope) {
            $http({
                /**
                 * applying http properties
                 */
                method: 'POST',
                url: 'http://localhost:5000/resetPassword',
                data: data
            }).then(
                function successCallBack(response) {
                    /**
                     * function to proceed with reset password if successfull
                     */
                    console.log("Reset password successfull");
                    $location.path('/login');
                    console.log(response);
                    $scope.resetPasswordMessage = "Reset password successfull";
                },
                function errorCallBack(response) {
                    /**
                     * function to show error if reset password fails
                     */
                    console.log("Reset password failed");
                    console.log(response);
                    $scope.resetPasswordMessage = "Reset password unsuccessfull";
                }
            )
        }
    } catch (error) {
        console.log(error.message);
    }
});