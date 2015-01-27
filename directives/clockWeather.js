var app = angular.module("weatherApp");
app.directive("clockWeather", function($interval){
    return {
        scope: {
            message: "@"
        },
        template: "<div>{{hours}}:{{minutes}}:{{seconds}}</div><p           >{{message}}</p>",
        restrict: "E",
        link: function(scope, elem, attrs){
            var date = new Date();
            scope.hours = date.getHours();
            scope.minutes = date.getMinutes();
            scope.seconds = date.getSeconds();
            $interval(function(){
                var date = new Date();
                scope.hours = date.getHours();
                scope.minutes = date.getMinutes();
                scope.seconds = date.getSeconds();
            }, 1000);
            elem.click(function(){
                elem.fadeOut();
            })
        }
    }
});