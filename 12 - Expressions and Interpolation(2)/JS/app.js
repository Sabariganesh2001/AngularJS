(function(){
    'use strict' 
    let msg = function($scope){
        $scope.authorImgName = '';
        $scope.assignAuthorImg = function(){  
            $scope.authorImgName = 'csg'; 
        }
    }

    angular.module("MsgApp",[]).controller("MsgAppController",msg);
    msg.$inject=['$scope']; //To protect the dependencies from minifier     
})();