/* global angular*/
angular.module("myApp").controller("MainController", MainController);


  function MainController($http) {
    var vm = this;
    
    $http.get("http://swapi-tpiros.rhcloud.com/files").then(function(res) {
        vm.films = res.data;
    });
    
    vm.name = "Sean";
}