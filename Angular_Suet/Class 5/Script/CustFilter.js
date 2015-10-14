/**
 * Created by USER on 6/27/2015.
 */
var app = angular.module('IG', [])
//Example 1

app.factory('Avengers', function(){
var Avengers={};
    Avengers.cast=[
    {
        name: 'David',
        street: '1234 Anywhere St.'
    },
    {
        name: 'Tina',
        street: '1800 Crest St.'
    },
    {
        name: 'Brajesh',
        street: 'Noida'
    },
    {
        name: 'Sujeet',
        street: '890 Delhi'
    },
    {
        name: 'David',
        street: '1234 Anywhere St.'
    },
    {
        name: 'Rahul',
        street: '123 Test City'
    },
    {
        name: 'Amit',
        street: 'Test City Amit'
    },
    {
        name: 'Rajesyt',
        street: '890 UK'
    },
    {
        name: 'Ravish',
        street: '1234 Test.'
    },
    {
        name: 'Jitendra',
        street: '1800 Allahabad.'
    },
    {
        name: 'Ganesh',
        street: 'Utter pradesh'
    },
    {
        name: 'Sujeet123',
        street: '890 Delhi'
    },
    {
        name: 'David123',
        street: '1234 Anywhere St.'
    },
    {
        name: 'Tina123',
        street: '1800 Crest St.'
    },
    {
        name: 'Brajesh1234Test',
        street: 'Noida'
    },
    {
        name: 'SujeetTest',
        street: '890 Delhi'
    }
];
return Avengers;
})
app.controller('CustController', function ($scope, Avengers) {
    $scope.avengers =Avengers;

})
//Example 2
/*
app.factory('Data', function(){
    return {message:"Hello, I am coming from Service!!"}
})

app.filter('reverse', function(){
    return (function(text){
        return text.split("").reverse().join("");
    })
})
app.controller('FstCtrl', function($scope, Data){
    $scope.data=Data;
})

app.controller('ScndCtrl',function ($scope, Data){
    $scope.data=Data;
    $scope.reverseMessage=function(message){
        return message.split("").reverse().join("");
    }
})
*/


