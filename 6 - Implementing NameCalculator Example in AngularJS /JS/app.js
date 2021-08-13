(function(){
    'use strict'
    angular.module("Name Calculator",[]).controller("nameCalculatorController",function($scope){
        $scope.name = "";
        $scope.result = 0;
        $scope.displayResult = () => {
            $scope.result = calculation($scope.name);
        }
        let calculation = name => {
            let sumUp = 0;
            for(let i=0;i<name.length;i++)
                sumUp += name.charCodeAt(i);
            return sumUp;  
        }
    }); 
})();