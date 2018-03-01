/*global angular*/
angular.module('meanhotel').controller('HotelController', HotelController);

function HotelController($route, $routeParams, hotelDataFactory) {
    console.log("hotelController");
    var vm = this;
    var id = $routeParams.id;
    vm.isSubmitted = false;
    hotelDataFactory.hotelDisplay(id).then(function(res) {
        console.log(res);
        vm.hotel = res.data;
        vm.stars = _getStarRating(res.data.stars);
    });
    console.log("test")
    
    function _getStarRating(stars) {
        console.log(stars);
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