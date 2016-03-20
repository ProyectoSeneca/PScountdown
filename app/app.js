'use strict';

// Declare app level module which depends on views, and components
angular.module('PSCounter', [
    'ngRoute',
    'PSCounter.countdown',
    'PSCounter.start',
    'PSCounter.version'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/countdown'});
}]).
filter('secondsToDateTime', function() {
    return function(seconds) {
        var d = new Date(0,0,0,0,0,0,0);
        d.setSeconds(seconds);
        return d;
    };
})
;
