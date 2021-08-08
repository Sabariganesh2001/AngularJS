(function(){
    'use strict';
    angular.module("Name Calculator",[]).controller("nameCalculatorController",function($scope,$filter){
        $scope.name = "";
        $scope.result = "";
        $scope.upperConverter = name => {
            $scope.result = $filter('uppercase')(name);
        } 
        //Example for taking the argument in the function through JS
        function demo(arg1,arg2){
            return "something";
        }
        console.log(demo.toString());
        // So by thus we take the functions and parse it and locate the arguments by using '(' , ')', ',' .   
    })
    // Angular also uses this same trick to get the servies (eg: $scope. &filter) that we given as the argument in the controller function. For this it uses $injector service to got the service arguments that we given in the controller function.
    .controller("angularDemo",angularDemo)    
    function angularDemo($scope,$filter,$injector){  
        console.log($injector.annotate(angularDemo));                             
    };   
})();