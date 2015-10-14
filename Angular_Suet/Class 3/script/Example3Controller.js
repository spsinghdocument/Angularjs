/**
 * Created by USER on 6/20/2015.
 */
//defining module
var app = angular.module('IG', []);

app.controller('ParentController', function ($scope) {
    $scope.person = { greeted: false };
});

//Property: person
app.controller('FController', function ($scope,data) {
    $scope.person.name = data.Message;
});

//Property: person(
app.controller('SController', function ($scope,data) {
    $scope.person.name = data;
});

//factory services
app.factory('data', function () {

       return Message= 'hey I am ur service'

});
