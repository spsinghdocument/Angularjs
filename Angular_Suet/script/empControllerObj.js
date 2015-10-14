angular.module('myApp', []).controller('employeeCtrl', function ($scope)
{
    $scope.Emp_Names = [
        { name: 'Rahul Saxena', country: 'India' },
        { name: 'Shambhu Sharma', country: 'USA' },
        { name: 'Abhishek Nigam', country: 'USA' },
        { name: 'Yogesh Gupta', country: 'USA' },
        { name: 'Rakesh Dixit', country: 'India' },
        { name: 'Manu Khanna', country: 'India' },
        { name: 'Saurabh Mehrotra', country: 'USA' },
        { name: 'mayank Dhulekar', country: 'India' }];
});  