/**
 * Created by USER on 6/13/2015.
 */

//defining module
var app = angular.module('IG', []);

//the run function acts as a main method for the angular app.
app.run(function ($rootScope) {
    $rootScope.site = "interviewgully.com";
    $rootScope.name = "Sujeet Srivastava"
});

app.controller("myController", function ($scope, $rootScope) {
    $scope.name = "Rajesh Kumar";
    $scope.welcome = "Welcome to " + $rootScope.site;
});

app.controller("testController", function ($scope, $rootScope) {
    $scope.welcome = "Welcome to " + $rootScope.site;
});

