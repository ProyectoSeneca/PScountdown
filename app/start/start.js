'use strict';

angular.module('PSCounter.start', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/start', {
            templateUrl: 'start/start.html',
            controller: 'StartCtrl'
        });
    }])

    .controller('StartCtrl', ['$scope', '$window', function($scope, $window) {
        $scope.listenClick = function () {
            var height=499;
            var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
            if(isSafari) height = height + 47;
            $window.open('http://ww2.proyectoseneca.com/streaming', 'PSPlayer', 'height='+height+',width=320');
        };
    }]);