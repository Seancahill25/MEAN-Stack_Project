/*global angular */
angular.module('meanhotel').controller("HotelsController", HotelsController);

function HotelsController(hotelDataFactory) {
    var vm = this;
    vm.title = 'MEAN Hotel App';
    hotelDataFactory.hotelList().then(function(res) {
        console.log(res);
        vm.hotels = res.data;
    });
}