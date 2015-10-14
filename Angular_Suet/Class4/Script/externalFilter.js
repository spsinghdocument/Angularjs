/**
 * Created by USER on 6/27/2015.
 */
var app = angular.module('IG', [])

app.controller('FilterController', ['$scope', function ($scope) {
    $scope.customers = [
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
} ])


app.controller('DemoController', ['$scope', '$filter',
    function ($scope, $filter) {
        $scope.name = $filter('lowercase')('Sujeet');
        $scope.testStr = $filter('uppercase')('I have done.');
        $scope.testCurr = $filter('currency')(768767);
        $scope.testNum = $filter('number')(879989878686);
    }]);
