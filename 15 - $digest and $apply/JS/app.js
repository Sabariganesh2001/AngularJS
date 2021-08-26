(function(){
    'use strict'
// We are using "timeout"(THere is also another event that may trigger in out of angular context) event to understand the usage of $digest and $apply.    
   // 1) Events that out of angular context.
        // let counterControllerFunction = function(scope){
        //         scope.counter = 0; 
        //         scope.incrementCounter = function(){
        //             setTimeout(function(){
        //                 scope.counter++;
        //                 console.log("Counter is incremented") 
        //             },2000)
        //             
        //         }         
        // }
        // angular.module("CounterApp",[]).controller("CounterController",['$scope',counterControllerFunction]);   

        // In this type interpolation will not work, The reason is timeout gets put in the event Queue completely separately from this call of incrementCounter really gets it taken out out of the angular context all together. It's not being called inside the angular context. And because it's not being called inside the angular context the digest cycle doesn't know to have to To kick off at all.
        
        
        // 2) Run digest cycle manually by using $digest function     
            // let counterControllerFunction = function(scope){
            //     scope.counter = 0; 
            //     scope.incrementCounter = function(){
            //         setTimeout(function(){
            //             scope.counter++;
            //             scope.$digest(); //here we run the digest cycle manually
            //             console.log("Counter is incremented") 
            //         },2000);                
            //     }  
            // }
            // angular.module("CounterApp",[]).controller("CounterController",['$scope',counterControllerFunction]);

            //The problem with colon (within the function) $digest directly is if there is any kind of errors or any exceptions that happen in the colon that we are executing, the exceptions thrown as part of this code will not be visible to Angular JS. To overcome this disadvantage we can use $apply
            
        // 3) Using $apply function 
            // let counterControllerFunction = function(scope){
            //     scope.counter = 0; 
            //     scope.incrementCounter = function(){
            //         setTimeout(function(){
            //             scope.$apply(function(){
            //                 scope.counter++;
            //                 console.log("Counter is incremented") 
            //             });
            //         },2000)              
            //     }      
            // }        
            // angular.module("CounterApp",[]).controller("CounterController",['$scope',counterControllerFunction]);   

            //So now, when the time out gets executed after two seconds, this function will get executed, and this function will call $apply. And have another function as part of it and execute that function, which will have the code that we actually want to execute. But since it's all going to get wrapped inside the apply function, not only will we catch any exceptions in AngularJSSo now, when the time out gets executed after two seconds, this function will get executed, and this function will call $apply. And have another function as part of it and execute that function, which will have the code that we actually want to execute. But since it's all going to get wrapped inside the apply function, not only will we catch any exceptions in AngularJS  But also at the end of that process, the digest, $digest will get called automatically by angular, and therefore they will get updated. 

            //The $scope.$apply() function in angularjs is used whenever we want to integrate any other code with angularjs. Generally the $scope.$apply() function will execute custom code and then it will call $scope.$digest() function forcefully to check all watch list variables and update variable values in view if any changes found for watch list variables.

            //In angularjs $scope object is having different functions like $watch(), $digest() and $apply() and we will call these functions as central functions. The angularjs central functions $watch(), $digest() and $apply are used to bind data to variables in view and observe changes happening in variables.

        //4)  we should always try to see if there's any AngularJS alternative that's available that is native to AngularJS (In this case $timecount service)
            let counterControllerFunction = function(scope,$timeout){
                scope.counter = 0; 
                scope.incrementCounter = function(){
                    $timeout(function(){
                        scope.$apply(function(){
                            scope.counter++;
                            console.log("Counter is incremented") 
                        });
                    },2000)               
                }      
            }        
            angular.module("CounterApp",[]).controller("CounterController",['$scope','$timeout',counterControllerFunction]);
})();