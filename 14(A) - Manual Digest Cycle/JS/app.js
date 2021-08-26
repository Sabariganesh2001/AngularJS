(function(){
    'use strict'
    let counterControllerFunction = function(scope){
        console.log(scope);
        //Button that show no.of watchers currently there in instance.
            scope.showNumberOfWatches = function(){
                console.log(scope.$$watchersCount); 
            }
        //Event without watchers
            scope.oneCount = 0;
            scope.upOneCount = function(){ //Without setting up watcher.
                scope.oneCount = 1; 
            }
        //Event with watchers
            scope.oneCountWithWatcher = 1;
            scope.upOneCountWithWatcher = function(){
                scope.oneCountWithWatcher = 2; 
            }
            //Linking the upOneCountWithWatcher event function in watcher by using $watch service which have two arguments, one is the property which is set for watcher and the other one is function which are going to watch these arguments which has two values namely new value and old value.
            scope.$watch('oneCountWithWatcher', function(newValue,oldValue){
                console.log(`new value : ${newValue} , old value : ${oldValue}`);
            });
            //The above watcher function is execute only on intially and when the value of the given property is changes that means above function will only execute in maximum of 2 times one at intial loading and another one in when that's button is clicked as the digest cycle will not see any changes further to fire up the function.

        //Another Event with watchers 
            scope.counter = 0; 
            scope.incrementCounter = function(){
                scope.counter++; 
            }
            scope.$watch("counter", function(newValue,oldValue){
                console.log(`incrementCounter new value : ${newValue} , incrementCounter old value : ${oldValue}`);
            });
        
        // Note watcher will setup only for scope properties and the property should be mentioned in a string format in the $watch function.    



    }
    angular.module("CounterApp",[]).controller("CounterController",['$scope',counterControllerFunction]);   
})();