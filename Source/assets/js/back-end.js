var app = angular.module('myApp', [])

app.controller('dataController', function($scope, $http){
    var url="assets/data/data.json";
    $http.get(url).success(function(response){
       $scope.data = response;
    });
});