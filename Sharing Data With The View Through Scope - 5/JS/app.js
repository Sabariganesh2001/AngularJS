(function(){
    angular.module("MyFirstApp",[]).controller("MyFirstController",function($scope){
        $scope.name = "";
        $scope.greetings = name => `Hello ${name}`;
    });   
})();