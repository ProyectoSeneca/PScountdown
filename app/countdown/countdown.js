'use strict';

angular.module('PSCounter.countdown', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/countdown', {
            templateUrl: 'countdown/countdown.html',
            controller: 'CountdownCtrl'
        });
    }])

    .controller('CountdownCtrl', ['$scope', '$interval', '$location',
        function($scope, $interval, $location) {
            var lunchingDateTime = new Date(2016, 3, 7, 17);

            var updateDate = function(){
                var today = new Date();
                $scope.secLeft = (lunchingDateTime.getTime() - today.getTime())/ 1000;
                if($scope.secLeft <= 0){
                    $location.path('/start')
                }
            };
            $interval(updateDate, 1000);
        }
    ]);