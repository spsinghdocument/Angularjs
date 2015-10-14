/**
 * Created by C5189757 on 1/17/2015.
 */
var app = angular.module('IG', ['ngResource','ngGrid','ui.bootstrap']);

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common['Accept'] = 'application/json';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $httpProvider.defaults.useXDomain = true;
}]);

app.controller('MyCtrl', function($scope, $http, $modal) {

    $http.get('jsonFiles/largeLoad.json')
        .then(function(res){
            $scope.myData = res.data;
        });

    //$http.get("http://medicartapi-rxmedicine.rhcloud.com/medcartapi/getPendingOrders")
    //    .success(function(response) {console.log(response);});


    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: "http://medicartapi-rxmedicine.rhcloud.com/medcartapi/getPendingOrders",
        crossDomain: true,
        statusCode: {
            200 : function(data){
                //var json = $.parseJSON(data);
                console.log(data);
            }
        },
        accept:"application/json",
        success: function (data) {
            console.log(data);
        },
        // error:
        error: function (request, status, error) {
            //console.log(request);
            //if error message is null hte n show the defsult message
            console.log(request);
        }
    });

    $scope.gridOptions = {
        data: 'myData',
        columnDefs: [{
            field: 'orderCode',
            displayName: 'Order Code',
            width:200
        }, {
            field: 'creationDate',
            displayName: 'Creation Date',
            width:200
        }, {
            field: 'imagePath',
            displayName: '',
            cellTemplate : '<a href="{{row.entity[col.field]}}"  style="cursor: pointer;">ppt</a>',
            width:50
        }, {
            field: 'orderCode',
            displayName: '',
            cellTemplate : '<button ng-click="showModal(row.entity[col.field])">Edit</button>',
            width:50
        }]
    };

    $scope.showModal = function(id) {
        $scope.name = id;
        $scope.opts = {
            backdrop: true,
            backdropClick: true,
            dialogFade: false,
            keyboard: true,
            templateUrl: 'Views/popUp.html',
            controller: 'ModalInstanceCtrl',
            resolve: {} // empty storage
        };
        $scope.opts.resolve.item = function() {
            return angular.copy({name:$scope.name}); // pass name to Dialog
        }

        var modalInstance = $modal.open($scope.opts);

        modalInstance.result.then(function(){
            //on ok button press
        },function(){
            //on cancel button press
            console.log("Modal Closed");
        });
    }

    $scope.OpenPopUp = function(openType){

    }
});

    app.controller('ModalInstanceCtrl' , function($scope, $modalInstance, $modal, item) {

        $scope.item = item.name;
        $scope.count = 1;
        for(var i=1;i<=9;i++)
        {
            $("#div"+i).css('display','none');
        }
        $scope.ok = function () {
            var itemsList = AddItems();
            var colJSON = [];
            colJSON.orderCode = $scope.item;
            colJSON.items = JSON.stringify(itemsList);
            colJSON.statusMsg = "success";
            var jsonItems = JSON.stringify(colJSON);console.log(jsonItems);
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.addMore = function() {
            $("#div"+$scope.count).css('display','inline');
            if($scope.count == 9)
            {
                $("#btnAddMore").hide();
            }
            $scope.count = $scope.count + 1;
            $scope.TotalAmount = 0;
        }

        function AddItems()
        {
            var items = new Array();
            for(var i=1;i<=$scope.count;i++)
            {   var subitems = new Array();
                var tabCol = $("#tab"+i).children().length;
                for(var j=0;j<tabCol;j++){
                    subitems[j] = $("#tab"+i).children()[j].childNodes[1].value;
                }
                items.push(subitems);
            }
            //var jsonItems = JSON.stringify(items);console.log(jsonItems);
            //[["ttytyt","wqw","rer","trt","rer"],["fds","as","qw","zx","cv"],["oi","khj","kj","nb","424"]]
            return items;
        }

    });


