(function(){
    'use strict' 
    let changeGood = function(){ 
        return function(msg){
            msg = msg || ""; 
            return msg.replace("fine","good");   
        };    
    }
    let replace = function(){  //Will use it only in html, So we should have to register with controller alone not needed to inject in controller function unless we not work with this filter in controller function.
        return function(val,target,replace){
            val = val || "";  
            return val.replace(target,replace);  
        }
    }
    let msg = function($scope,$flter,cust_filter){  
        $scope.message = "Hello everyone, Hope all are fine."
        $scope.name = $flter('uppercase')("SabariGanesh");
        $scope.modMessage = cust_filter($scope.message);     
    }
    angular.module("MsgApp",[]).controller("MsgAppController",msg).filter('good',changeGood).filter('replace',replace);  
    msg.$inject=['$scope','$filter','goodFilter']; // good(name that we used to bind factory function to the controller) + Filter.  
})();