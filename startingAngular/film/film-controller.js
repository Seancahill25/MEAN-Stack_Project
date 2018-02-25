/* global angular*/
angular.module("myApp").controller("FilmController", FilmController);

function FilmController($http, $routeParams) {
    var vm = this;
    var id = $routeParams.id;
    $http.get("http://swapi-tpiros.rhcloud.com/files" + id).then(function(res) {
        vm.film = res.data;    
    });
}