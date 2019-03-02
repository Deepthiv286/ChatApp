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
                    console.log("Login successfullyyyyyy ");
                    let userid = response.data.message[0]._id;
                    console.log(userid);
                    
                    let name = response.data.message[0].firstName;
                    let token = response.data.token;
                    localStorage.setItem("userid", userid);
                    localStorage.setItem("name", name);
                    localStorage.setItem("token", token);
                    $scope.loginMessage = "Login successfull";
                    $location.path('dashBoard');
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