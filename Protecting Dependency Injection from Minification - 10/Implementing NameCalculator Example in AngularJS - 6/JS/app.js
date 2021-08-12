//Minification:
        // THe process of removing all unnecessary characters from source code withour changing its functionality.
        // After processing minification the code will be completely unreadable but finctionable as normal code
        // Advantage of minification is it's reduce the amount of memory transfer to the server ie, It increase the speed of the site.
 
//1) Example for the failure of minified code that follows the following architecture of angularJs    
    // (function(){
    //     'use strict';
    //     angular.module("Name Calculator",[]).controller("nameCalculatorController",function($scope,$filter){
    //         $scope.name = "";
    //         $scope.result = "";
    //         $scope.upperConverter = name => {
    //             $scope.result = $filter('uppercase')(name);
    //         }            
    //     })        
    // })(); 

    // Minified version
        // !function(){"use strict";angular.module("Name Calculator",[]).controller("nameCalculatorController",function(e,r){e.name="",e.result="",e.upperConverter=(l=>{e.result=r("uppercase")(l)})})}();
        // this minified code will not work because injector of angularJs search for the service but the service we applied as argument is replaced by some other variable (here, e&r). So the operation we done using the service will fail and brought up the error brcause of this minified version,

//2) It will also fail as above.  
    // (function(){
    //     'use strict';
    //     let DIController = function($scope,$filter){   
    //         $scope.name = "";
    //         $scope.result = "";
    //         $scope.upperConverter = name => {
    //             $scope.result = $filter('uppercase')(name);
    //         }            
    //     }   
    //     angular.module("Name Calculator",[]).controller("nameCalculatorController",DIController);                
    // })();         

    // Minified version (Same as before)
        // !function(){"use strict";angular.module("Name Calculator",[]).controller("nameCalculatorController",function(e,r){e.name="",e.result="",e.upperConverter=(l=>{e.result=r("uppercase")(l)})})}();

//3) Solution 1: Passing the servize in the list that along with the funciton at the last: 
    // (function(){
    //     'use strict';
    //     let DIController = function($scope,$filter){   
    //         $scope.name = "";
    //         $scope.result = "";
    //         $scope.upperConverter = name => {
    //             $scope.result = $filter('uppercase')(name);
    //         }            
    //     }  
    //     // The second argument of the controller function can also be the array of strings with the last element end with the controler function.    
    //     angular.module("Name Calculator",[]).controller("nameCalculatorController",['$scope','$filter',DIController]);   
    //         // If we pass the array with string literals of service then it will pass as the argument to the function that we kept as the last element of an array in the same order we passed in the array.               
    // })();  

    // Minified version
        // !function(){"use strict";angular.module("Name Calculator",[]).controller("nameCalculatorController",["$scope","$filter",function(e,r){e.name="",e.result="",e.upperConverter=(l=>{e.result=r("uppercase")(l)})}])}();

//4) Solution 2:  A slight modification of solution 1: (This type of code that are used in our project.)
    // (function(){
    //     'use strict';
    //     // The second argument of the controller function can also be the array of strings with the last element end with the controler function.    
    //     angular.module("Name Calculator",[]).controller("nameCalculatorController",['$scope','$filter',function($scope,$filter){   
    //         $scope.name = "";
    //         $scope.result = "";
    //         $scope.upperConverter = name => {
    //             $scope.result = $filter('uppercase')(name);
    //         }            
    //     }]);                   
    // })();     

    // Minified version (Same as before)
        // !function(){"use strict";angular.module("Name Calculator",[]).controller("nameCalculatorController",["$scope","$filter",function(e,r){e.name="",e.result="",e.upperConverter=(l=>{e.result=r("uppercase")(l)})}])}();

// Solution 3 (An better readability solution)        
    // (function(){
    //         'use strict';
    //         let DIController = function($scope,$filter){   
    //             $scope.name = "";
    //             $scope.result = "";
    //             $scope.upperConverter = name => {
    //                 $scope.result = $filter('uppercase')(name);
    //             }            
    //         }  
    //         // The second argument of the controller function can also be the array of strings with the last element end with the controler function.    
    //         angular.module("Name Calculator",[]).controller("nameCalculatorController",DIController);   
    //         DIController.$inject = ['$scope','$filter']; 
    //             // This will pass the service as argument to the specific controller function in the order we gave in the array.             
    //     })();  

    // Minified version
        !function(){"use strict";let e=function(e,r){e.name="",e.result="",e.upperConverter=(l=>{e.result=r("uppercase")(l)})};angular.module("Name Calculator",[]).controller("nameCalculatorController",e),e.$inject=["$scope","$filter"]}();
  