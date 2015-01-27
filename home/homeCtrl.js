var app = angular.module("weatherApp");
app.controller("homeCtrl", function($scope, $location){
    $scope.changeRoute = function(){
        $location.path("/weather/"+$scope.lat+"/"+$scope.long);
    }

});