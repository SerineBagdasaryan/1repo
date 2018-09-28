'use strict';

angular.module('myApp.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/products.html',

    controller: 'ProductsCtrl'
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


.controller('ProductsCtrl', function($scope, $http) {

    $http.get("http://localhost:8080")
        .then(function(response) {
            console.log(response);
            $scope.myFavorite = response.data;

              });

        });

