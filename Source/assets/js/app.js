var app = angular.module("myApp", ["firebase"]);

app.controller('dataController', function($scope, $firebaseObject){
    var ref = new Firebase("https://scorching-inferno-6537.firebaseio.com/cv");
    //var fb = $firebase(ref);
        
    // sync as object 
    var syncObject = $firebaseObject(ref);
        
    // three way data binding
    syncObject.$bindTo($scope, 'cv');
});