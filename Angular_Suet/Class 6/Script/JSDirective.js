/**
 * Created by Lenovo on 9/19/2015.
 */
var myApp=angular.module("myApp",[])

//Attribute thinks like to add behaviour, so will need to be add link functions with Attributes
//Attribute are fo adding behaviour, but C and M for more about CSS adding or decorating elements
myApp.directive('myAttribute', function(){
    return {
        restrict:'A',
        link:function(){
            alert("Hey, I am attribute and working fine!!");
        }
    }

})

//Class
myApp.directive('myClass', function(){
    return {
        restrict:'C',
        link:function(){
            alert("Hey, I am class and working fine!!");
        }
    }

})

//Comment

myApp.directive('myComment', function(){
    return {
        restrict:'M',
        link:function(){
            alert("Hey, I am comment and working fine!!");
        }
    }

})



