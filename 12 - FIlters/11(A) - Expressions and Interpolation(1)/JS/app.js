(function(){
    'use strict' 
    let msg = function($scope,$filter){
        $scope.message = "Hello everyone, Hope all are fine."
        $scope.name = "SabariGanesh";
        $scope.nam = $filter("uppercase")($scope.name); 
        let currencyFilter = $filter('currency');  
        $scope.pay = currencyFilter(199,'$',2);   // By default it is '$' 
        $scope.rupPay = 14769.18;  
    }
    angular.module("MsgApp",[]).controller("MsgAppController",msg);
    msg.$inject=['$scope','$filter']; //To protect the dependencies from minifier     
})();