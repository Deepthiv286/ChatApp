app.controller('resetPasswordCtrl', function ($scope, resetPasswordService) {
    $scope.resetPassword = function () {
        let data = {
            'newPassword': $scope.password,
            'confirmPassword': $scope.confirmPassword
        }
        /**
         * checks if new password is equal to the confirm password
         */
        if ($scope.newPassword != $scope.confirmPassword) {
            $scope.message = "password and confirm-password are not a match ";
        } else {
            resetPasswordService.resetPassword(data, $scope);
        }
    }
});