app.controller('forgotPasswordCtrl', function ($scope, forgotPasswordService){
    $scope.forgotPassword = function(){
        let data = {
            'email':$scope.email
        }
        forgotPasswordService.forgotPassword(data,$scope);
    }
});