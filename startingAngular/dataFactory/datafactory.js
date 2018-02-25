/* global angular*/
angular.module("myApp").factory("FilmFactory", FilmFactory);

function FilmFactory($http) {
    return {
        getAllFilms: getAllFilms,
        getOnefilm: getOnefilm
    };
    
    function getAllFilms() {
        return $http.get("http://swapi-tpiros.rhcloud.com/films").then(complete).catch(failed);
    }
    
    function getOnefilm(id) {
        return $http.get("http://swapi-tpiros.rhcloud.com/films" + id).then(complete).catch(failed);
    }
    
    function complete(res) {
        return res.data;
    }
    
    function failed(err) {
        return err.statusText;
    }
}