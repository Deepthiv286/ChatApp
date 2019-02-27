app.service('registerService', function ($http, $location) {
    try {
        this.register = function (data, $scope) {
            $http({
                /**
                 * applying http properties
                 */
                method: 'POST',
                url: 'http://localhost:5000/register',
                data: data
            }).then(
                function successCallBack(response) {
                    /**
                     * function to proceed with registration if successfull
                     */
                    console.log("registration successfull");
                    $location.path('/login');
                    console.log(response);
                    $scope.registerMessage = "Registration successfull";
                },
                function errorCallBack(response) {
                    /**
                     * function to show error if registration fails
                     */
                    console.log("Registration failed");
                    console.log(response);
                    $scope.registerMessage = "Registration unsuccessfull";
                }
            )
        }
    } catch (error) {
        console.log(error.message);
    }
});