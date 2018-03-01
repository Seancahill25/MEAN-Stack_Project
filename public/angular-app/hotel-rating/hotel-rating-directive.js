/* global angular */
angular.module("meanhotel").directive("hotelRating", hotelRating);

function hotelRating() {
    return {
        restrict: 'E',
        template: '<span ng-repeat="star in vm.stars track by $index" class="fas fa-star">{{ star }}</span>',
        bindToController: false,
        controller: 'HotelController',
        controllerAs: 'vm',
        scope: {
            stars:'@'
        }
    };
}