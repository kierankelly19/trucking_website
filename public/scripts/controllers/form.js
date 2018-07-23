angular.module('truckinApp')
.controller('formCtrl', function($scope, dataService, $http) {

	$scope.formData = {};

    $scope.createEmail = function() {
        $http.post('/api/info', $scope.formData)
        .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.infos = data;
                console.log(data);
            })

        $scope.info.submitted = !$scope.info.submitted;
    }

});
