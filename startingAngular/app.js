/* global angular*/
angular.module("myApp", ["ngRoute"]).config(config);

function config($routeProvider) {
    $routeProvider.when("/", {
        templateURL: 'main/main.html',
        controller: "MainController",
        controllerAs: 'vm'
    }).when('/film/:id', {
        template: "film/film.html",
        controller: "FilmController",
        controllerAs: 'vm'
    })
    .otherwise({
        redirectTo: '/'
    });
}

