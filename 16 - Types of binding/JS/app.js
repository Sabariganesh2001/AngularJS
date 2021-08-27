(function(){
    'use strict'
    //Well, as you remember, the digest cycle goes through the entire list of every watcher that we have and checks for any changes that occurred in the last loop. Well, these loops can go for a few times. And if you have thousands of thousands of these watchers, obviously, that will take some time and therefore, the performance of your application will degrade. In fact, the rule of thumb is that you shouldn't have any more than 2,000 watchers per page. However, I've seen more than 2,000 and the app worked pretty well anyway, but it's kind of a rule of thumb. You could have more, you could have less depending obviously on, obviously, what type of machine the user is using, how fast it is, and how much it can handle. However, one thing is clear. Minimizing the number of live active watchers in your watchers list during the digest loop is something that is desirable. So one way to do that is set up a special, what's called a 1-time binding. 

    // 1-time binding tells  Angular JS is that it should set up a watcher for this property.But the second this property gets initialized,the AngularJS digest cycle will kick in.It will update that property in our UI,will repaint the browser and the property will be seen to the user.And at that point, AngularJS will automatically remove the watcher for that particular property, so you'll have one less.Of course, the downside of that is, is this only happens one time.So if that property were to get updated in the course of your app,that update will not be reflected in your UI.However, for things like, let's say, fullname of a user,that is not expected to change throughout the life cycle of your application.Something that we still need to be able to somehow insert into our HTML template. But we don't need to watch that property and check that property every single time for the rest of the life of our application. 
    let bindingFunction = function($scope){
        $scope.firstName = "";
        $scope.lastName = "Ganesh";

        // Note: If we use onetime binding then we should not intialize that variable as it will watch for only one times when the angular read the code it will watch the assigning change and then remove the watch list for that variable. So it will not bind the change value to the view.
        //Get practical exposure by with and without the this line (Resul => NO.of watchers will very)
            $scope.fullName = "";   

        $scope.showNumberOfWatches = function(){
            console.log(`no.of.Watchers : ${$scope.$$watchersCount}`);
        }
        $scope.setFullName = function(){
            $scope.fullName = $scope.firstName + $scope.lastName;
        }
        $scope.logFirstName = function(){
            console.log($scope.firstName);
        }
        $scope.logFullName = function(){
            console.log($scope.fullName);  
        }

    }        
    angular.module("Types of Binding",[]).controller("binding",['$scope',bindingFunction]);         
})();