/**
 * Created by Lenovo on 9/19/2015.
 */
var myApp=angular.module("myApp",[])

myApp.directive('myDirective', function(){

    return {
        restrict:'E',
        replace: true,
        template:"<div>Hello, Congratulations!!!, you have successfully created Custome Diretive</div>"
    }

})