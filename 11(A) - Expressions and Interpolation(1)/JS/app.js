(function(){
    'use strict' 
    let msg = function($scope){
        $scope.message = "Hello everyone, Hope all are fine."
        $scope.name = "SabariGanesh";
    }
    angular.module("MsgApp",[]).controller("MsgAppController",msg);
    msg.$inject=['$scope']; //To protect the dependencies from minifier     
})();