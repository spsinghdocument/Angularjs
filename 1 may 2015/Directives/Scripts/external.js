//defining module
var app = angular.module('IG', []);

//Property: person
app.controller('FirstController', function ($scope) {
    $scope.person = [
        {
            Name: "Brajesh",
            value: "1234"
        },
        {
            Name: "Sujeet",
            value: "2345"
        }
    ];
});



//factory services
app.factory('data', function () {
    return {
        Message: 'hey I am ur service'
    };
});

app.directive('myDirective', function(data) {
    return {
        restrict: 'E',
        template:'<div></div>',
        link: function (scope, elm, attrs, ctrl) {
            var myVars = scope[attrs.details]; // <--- took a time to figure out
            console.log(data);
        }
    }
});

app.directive('myDirectives', function() {
    return {
        restrict: 'E',
        scope: {
            details: "="
        },
        template:
            '<div>'+
            '<p class="body-text">values goes here</p>'+
            '<input type="text" name="txtName" value="{{details[0].Name}}"> - '+
            '<input type="text" name="txtValue" value="{{details[1].value}}">'+
            '</div>',
        replace: true
    }
});


app.directive('myMukesh', function(data) {
    return {
        restrict: 'E',
        template:'<div></div>',
        link: function (scope, elm, attrs, ctrl) {
            var myVars = scope[attrs.details]; // <--- took a time to figure out
            console.log(data);
        }
    }
});

