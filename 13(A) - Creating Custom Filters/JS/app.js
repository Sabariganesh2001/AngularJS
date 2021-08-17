(function(){
    'use strict' 
    //Filter Factory Function
        //Note: A factory is a central place in our code that produces new objects or functions.(here function). To create custom filter we have to create the factory function.
    let changeGood = function(){ 
        return function(msg){
            msg = msg || ""; 
            return msg.replace("fine","good");   
        };    
    }
    let msg = function($scope,$flter,cust_filter){  
        $scope.message = "Hello everyone, Hope all are fine."
        $scope.name = $flter('uppercase')("SabariGanesh");
            // Note: here $flter('uppercase') is used to call the filterfactory which returns the function and then execute the function with or without passing the arguments. 
        $scope.modMessage = cust_filter($scope.message);   
            // But here we already registerd the factory in the controller thus we directly returns the function to it's arguments and thus we execute directly with or without passing the arguments.   
    }
    angular.module("MsgApp",[]).controller("MsgAppController",msg).filter('good',changeGood); 
    msg.$inject=['$scope','$filter','goodFilter']; // good(name that we used to bind factory function to the controller) + Filter.

    //The service we inject by $inject only should follow the correct name of the dependency the controller function not needed to have correct name we can give any name to the arguments in the controller function as we alredy known that's how minifier compress the names of the arguments in controller function.   
})();