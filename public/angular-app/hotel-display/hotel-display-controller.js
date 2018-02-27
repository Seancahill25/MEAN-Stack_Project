/*global angular*/
angular.module('meanhotel').controller('HotelController', HotelController);

function HotelController($route, $routeParams, hotelDataFactory) {
    var vm = this;
    var id = $routeParams.id;
    vm.isSubmitted = false;
    hotelDataFactory.hotelDisplay(id).then(function(res) {
        vm.hotel = res.data;
        vm.stars = _getStarRating(res.data.stars);
    });
    
    function _getStarRating(stars) {
        return new Array(stars);
    }
    
    vm.addReview = function() {
        var postData = {
            name: vm.name,
            rating: vm.rating,
            review: vm.review
        };
        if (vm.reviewForm.$valid) {
            hotelDataFactory.postReview(id, postData).then(function(res) {
                if(res.status === 200) {
                    $route.reload();
                }
            }).catch(function(err) {
                console.log(err);
            });
        } else {
            vm.isSubmitted = true;
        }
    };
    
}