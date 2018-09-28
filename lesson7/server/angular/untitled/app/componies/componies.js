'use strict';

angular.module('myApp.componies', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/componies', {
    templateUrl: 'componies/componies.html',

    controller: 'ComponiesCtrl'
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


.controller('ComponiesCtrl', function($scope, $http) {
console.log("fhdh");
    $http.get("http://localhost:8080")
        .then(function(response) {
            $scope.myFavorite = response.data;

            $scope.componiesArray = $scope.myFavorite.data.componies;

            $scope.dataComponies = []
                ,$scope.currentPage = 1
                ,$scope.numPerPage = 12
                ,$scope.maxSize = 12;

            $scope.makeComponies = function() {
                $scope.componiess = [];

                for (var i = 0; i < $scope.componiesArray.length; i++) {

                    $scope.componiess.push({_id: $scope.componiesArray[i]._id, name:$scope.componiesArray[i].name,
                        permalink:$scope.componiesArray[i].permalink, componies_picture:$scope.componiesArray[i].componies_picture,
                        crunchbase_url:$scope.componiesArray[i].crunchbase_url, homepage_url:$scope.componiesArray[i].homepage_url });
                }

            };  $scope.makeComponies();


              $scope.numPages = function () {
                return Math.ceil($scope.componiess.length / $scope.numPerPage);
              };

              $scope.$watch("currentPage + numPerPage", function() {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

                $scope.dataComponies = $scope.componiess.slice(begin, end);
                console.log($scope.dataComponies);
              });

        });

    $scope.firstComponiesImg = {
        "width" : "250px",
        "height" : "200px",
        "margin-top": "20px"
    };

    $scope.secondComponiesImg = {
        "width" : "500px",
        "height" : "500px",
        "margin-top": "20px"
    };
    $scope.showHide = function (id) {

        $scope.componyDetailId = id;

    };

});