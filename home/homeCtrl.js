var app = angular.module("weatherApp");
app.controller("homeCtrl", function($scope, $location){
    $scope.changeRoute = function(){
        $location.path("/weather/"+$scope.lat+"/"+$scope.long);
    };
    $scope.name = {
        user: "Daniel",
        age: "451"
    };
    $scope.thingie = "IceCream";

    $scope.logger = function(){
        console.log("Funk!");
    }

});