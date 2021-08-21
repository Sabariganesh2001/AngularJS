(function(){
    'use strict'
    //we've set up watchers manually using the $watch function. But that's not the best way of setting up watchers inside of the controller function. AngularJS has a more automated way of going about it.

    //You should never need to have these $watch functions executed inside of your controller. And the reason that is, is this controllers and the templates or HTML already have mechanisms that automatically set up these watchers

    //There is 3 ways of setting up of watch, Namely
        //1) By manually 
        //2) By interpolation ({{ }})
        //3) ng-model
    let counterControllerFunction = function(scope){
        console.log(scope);
        //Button that show no.of watchers currently there in instance.
            scope.showNumberOfWatches = function(){
                console.log(`No.of watchers : ${scope.$$watchersCount}`); 
            }
            scope.oneCount = 1;
            scope.upOneCount = function(){
                scope.oneCount = 2;  
            }
            scope.counter = 0; 
            scope.incrementCounter = function(){
                scope.counter++; 
            }
            // To check how many times the digest loop fired. instead of giving it a real property around our scope, we'll give it a function, because this function is something that is supposed to return the name of the property to watch. Which means every time through the loop, the digest cycle will want to figure out what property is that and execute it. So that means we could catch when the digest loop is actually going through all these watchers. So all we have to do is really provide one function.
            
            scope.$watch(function(){ // Note, this above $watch function is also add to the count of watches.
                console.log("Disgest loop fired"); 
            })
            
            scope.name = "Sabari";

            // Note: digest cycle will trigger for every event that is happenning on angular contest. 
            // At intially loading of this page (onLoad event) digest cycle will trigger 2 times as we have setted the 4(any) watch lists, first time it encounters the changes (Declaration) and second time runs fot the dirty checking.
            
          
    }
    angular.module("CounterApp",[]).controller("CounterController",['$scope',counterControllerFunction]);   
})();