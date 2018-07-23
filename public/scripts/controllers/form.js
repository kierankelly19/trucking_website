angular.module('truckinApp')
.controller('formCtrl', function($scope, $http) {

	$scope.formData = {};

    $scope.createEmail = function() {

        $http.post('/api/info', $scope.formData)
        .success(function(data) {

                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.info = data;
                console.log(data);
            })

    }



});
