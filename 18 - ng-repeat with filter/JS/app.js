(function(){
    'use strict' 
    let shoppingListFunction = function($scope){
        $scope.list1 = ["Milk","Butter","Jam","Cheese","Lays","Dairy Milk","Kitkat","Center Fresh", "Dark Fantasy"];
        $scope.list2 = [
            {
                name: "Lays",
                quantity: 2
            },
            {
                name: "Dairy Milk",
                quantity: 5
            },
            {
                name: "Kitkat",
                quantity: 3
            },
            {
                name: "Center Fresh",
                quantity: 10
            },
            {
                name: "Dark Fantasy",
                // quantity: 1
            }
        ];
        $scope.addToList = function(item){
            $scope.list1.push(item);  
        }
    }
    angular.module("Shopping List",[]).controller("ShoppingListController",shoppingListFunction); 
    shoppingListFunction.$inject=['$scope'];     
})();