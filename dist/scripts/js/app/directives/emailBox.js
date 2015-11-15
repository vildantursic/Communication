/**
 * Created by Vildan on 8/31/2015.
 */
'use strict';
var app = angular.module('app');

app.directive('emailBox', function() {
    return {
        restrict: 'E',
        scope: {
            email: '='
        },
        replace: true,
        controller: 'emailBoxCtrl',
        templateUrl: 'views/partials/directives/emailBox.html'
    };
});

app.controller('emailBoxCtrl', function ($scope, $mdDialog, $http, $mdToast, myHttp, myDialog, myPopup, $animate, $state, $timeout, $rootScope, $localStorage) {

    //MORE
    $scope.moreEmailDialog = function(event, dialogName, data){

        $scope.moreMail = data;

        myDialog(event, dialogName, $scope, function (){

        });
    };

    //DELETE
    $scope.deleteEmailDialog = function(event, dialogName, data){

        $scope.deleteMail = data;

        myDialog(event, dialogName, $scope, function(){
            myHttp($scope, {method: 'DELETE', url: 'api/v1/c5/mail/?uid=' + $scope.deleteMail.uid});

            myPopup('Email is deleted');
        });
    };

});