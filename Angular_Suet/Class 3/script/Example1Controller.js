/**
 * Created by USER on 6/20/2015.
 */
var myApp= angular.module('IG',[]);
//Action Method: Increase Amount
//Action Method: Decrease Amount

myApp.controller('FirstController', function($scope){
    $scope.counter=0;
    $scope.add=function(amount){
        $scope.counter+=amount;
    };

    $scope.subtract=function(amount){
        $scope.counter-=amount;
    };
})

myApp.controller('FController', function($scope){
    $scope.counter=0;
    $scope.add=function(amount){
        $scope.counter+=amount;
    };

    $scope.subtract=function(amount){
        $scope.counter-=amount;
    };
})