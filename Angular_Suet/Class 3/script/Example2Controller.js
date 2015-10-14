/**
 * Created by USER on 6/20/2015.
 */
//defining module
var app = angular.module('IG', []);

//Property: person
app.controller('ParentController', function ($scope) {
    $scope.person = { greeted: false };
});

//Action: sayHello
app.controller('ChildController', function ($scope) {
    $scope.sayHello = function () {
        $scope.person.name = "Ari Lerner";
        $scope.person.greeted = true;
    }
});
