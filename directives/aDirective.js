var app = angular.module("weatherApp");

app.directive("aDirective", function(){
    return {
        restrict: "E", //"EAC"
        templateUrl: "directives/aDirective.html",
        scope: {
            // @ string
            // = bind
            // & function
            message: "@",
            variable: "=",
            funk: "&"
        },
        link: function(scope, elem, attrs){
            elem.click(function(){
                scope.getStuff();
            });
            console.log(attrs.something);
        },
        controller: function($scope, $http){
            $scope.getStuff = function(){
                $http.get("http://api.openweathermap.org/data/2.5/weather?lat=40&lon=40")
                    .then(function(data){
                    console.log(data.data);
                })
            };
            $scope.thingie = "Not IceCream";
        },
        transclude: true
    }
});