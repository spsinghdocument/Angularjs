angular.module('myApp', []).controller('employeeCtrl', function($scope)
{
    $scope.name="Sujeet Srivastava",
        $scope.city="noida",
        $scope.country ="India",
        $scope.empInfo = function()
        {
            return $scope.name + " "+$scope.city + " "+$scope.country;
        }

});

