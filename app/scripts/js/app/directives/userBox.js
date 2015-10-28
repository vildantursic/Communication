/**
 * Created by Vildan on 10/27/2015.
 */
'use strict';
var app = angular.module('app');

app.directive('userBox', function() {
    return {
        restrict: 'E',
        scope: {
            user: '='
        },
        replace: true,
        templateUrl: 'views/partials/directives/userBox.html'
    };
});