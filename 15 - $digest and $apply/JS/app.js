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
        
        
        // 2) Run digest cycle manually by using $digest     
        let counterControllerFunction = function(scope){
            scope.counter = 0; 
            scope.incrementCounter = function(){
                setTimeout(function(){
                    scope.counter++;
                    scope.$digest(); //here we run the digest cycle manually
                    console.log("Counter is incremented") 
                },2000)
                
            }
            // $("#demo").keydown(function(e){
            //     console.log(e.key);   
            // })     
        }
        angular.module("CounterApp",[]).controller("CounterController",['$scope',counterControllerFunction]);



    //Doubt:
        // How the $watch(in previous lecture) and $digest function is available in $scope (as it doesn't show this function is console).

})();