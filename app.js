var app = angular.module("weatherApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "home/home.html",
            controller: "homeCtrl"
        })
        .when("/weather/:lat/:long", {
            templateUrl: "weather/weather.html",
            controller: "weatherCtrl",
            resolve: {
                weather: function(weatherService, $route){
                    return weatherService.getWeather($route.current.params.lat, $route.current.params.long);
                }
            }

        })
        .otherwise("/");
});