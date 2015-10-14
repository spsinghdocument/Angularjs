/**
 * Created by Lenovo on 9/26/2015.
 */
var app=angular.module("behaviourApp", []);
//Now create to behaviour. one for mouse over element and other for mover enter

/*app.directive("enter", function(){
    return {
        //restrict:"A",//if you don't put restrict here then there will be default A Now let me use that
        link:function(){
            //Now if you don't want to use link fubction then will need to be use return object directly
        }
    }
})*/



/*app.directive("enter", function(){
    return function(scope, element){
        element.bind("mouseenter", function(){
            console.log("I am inside of you!!")
        })
    }
})


app.directive("leave", function(){
    return function(scope, element){
        element.bind("mouseleave", function(){
            console.log("I am leaving jet plane!!")
        })
    }
})*/

//Its most common use case finding element behaviour

//Now lests add some more usefull behaviours, add jQuery like panel


/*app.directive("enter", function(){
    return function(scope, element){
        element.bind("mouseenter", function(){
            element.addClass("panel");
        })
    }
})


app.directive("leave", function(){
    return function(scope, element){
        element.bind("mouseleave", function(){
            element.removeClass("panel");
        })
    }
})*/

// We do really want to amke it reusable
/*app.directive("enter", function(){
    return function(scope, element, attrs){
        element.bind("mouseenter", function(){
            element.addClass(attrs.enter);
        })
    }
})


app.directive("leave", function(){
    return function(scope, element, attrs){
        element.bind("mouseleave", function(){
            element.removeClass(attrs.enter);
        })
    }
})*/


//Class Direction 5:
//Ca