/**
 * Created by USER on 6/13/2015.
 */
var myApp= angular.module('IG',[]);
 //Action Method: Increase Amount
//Action Method: Decrease Amount

myApp.controller('firstController', function($scope){
    $scope.counter=0;
    $scope.add=function(amount){
        $scope.counter+=amount;
    };

    $scope.sub=function(amount){
        $scope.counter-=amount;
    };
})


//Example : Controller Hierarchy (Scopes within Scopes)

//Property: person
myApp.controller('ParentController', function ($scope) {

    $scope.objP={objScope:"I parent's object"};
    $scope.person = { greeted: false };
});

//Action: sayHello
myApp.controller('ChildController', function ($scope) {
    $scope.sayHello = function () {
        $scope.person.name = "Ari Lerner";
        $scope.person.greeted = true;
        $scope.objP.objScope="I am child's object";
    }
});


//Example: Sharing Data between Controller

//Property: person
myApp.controller('MyFirstController', function ($scope,data) {
    $scope.person.name = data.message;
});

//Property: person
myApp.controller('MySecController', function ($scope,data) {
    $scope.person.name = data;
});



//factory services
myApp.factory('data', function () {
      var message;
      message= "Hey, This is my very First Service!!!"
      return message;
});



