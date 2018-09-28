'use strict';

angular.module('myApp.restaurants', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/restaurants', {
    templateUrl: 'restaurants/restaurants.html',

    controller: 'RestaurantsCtrl'
  });
}])


.filter('isArray', function() {
    return function(x) {
        var ok;
        for (var i = 0; i < x.length; i++) {

            if (Array.isArray(x)) {
                ok =  x[0];
            } else {
                ok =  x
            }

        }
        return ok;
    };
})

    .filter('isObj', function() {
        return function(data) {


            var ok;

            if (typeof data == "object") {
                for(var value in data) {
                    ok =  data[value];
                }

            } else {
                ok =  data;

            }

            return ok;
        };
    })


.controller('RestaurantsCtrl', function($scope, $http) {

    $http.get("http://localhost:8080")
        .then(function(response) {
            $scope.myFavorite = response.data;

            $scope.restaurantsArray = $scope.myFavorite.data.restorans;

            $scope.dataRestaurants = []
                ,$scope.currentPage = 1
                ,$scope.numPerPage = 15
                ,$scope.maxSize = 15;

            $scope.makeRestaurants = function() {
                $scope.restaurantss = [];

                for (var i = 0; i < $scope.restaurantsArray.length; i++) {

                    $scope.restaurantss.push({_id: $scope.restaurantsArray[i]._id, name:$scope.restaurantsArray[i].name,
                        URL:$scope.restaurantsArray[i].URL, picture:$scope.restaurantsArray[i].picture,
                        address:$scope.restaurantsArray[i].address, outcode:$scope.restaurantsArray[i].outcode,
                        postcode:$scope.restaurantsArray[i].postcode, rating:$scope.restaurantsArray[i].rating,
                        type_of_food:$scope.restaurantsArray[i].type_of_food });
                }

            };  $scope.makeRestaurants();


              $scope.numPages = function () {
                return Math.ceil($scope.restaurantss.length / $scope.numPerPage);
              };

              $scope.$watch("currentPage + numPerPage", function() {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

                $scope.dataRestaurants = $scope.restaurantss.slice(begin, end);
                console.log($scope.dataRestaurants);
              });

        });

    $scope.firstRestaurantsImg = {
        "width" : "250px",
        "height" : "200px",
        "margin-top": "20px"
    };

    $scope.secondRestaurantsImg = {
        "width" : "500px",
        "height" : "500px",
        "margin-top": "20px"
    };
    $scope.showHide = function (id) {

        $scope.restaurantDetailId = id;

    };

});