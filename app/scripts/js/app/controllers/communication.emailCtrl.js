/**
 * Created by Vildan on 10/27/2015.
 */
var app = angular.module('app');

app.controller('emailsCtrl', function ($scope, $mdDialog, $http, $mdToast, myHttp, myDialog, myPopup, $animate, $state, $timeout, $mdBottomSheet, $rootScope, $localStorage) {

    $scope.email = {
        user: 'homevildan@hotmail.com',
        pass: 'sani1993',
        mail: 'imap-mail.outlook.com'
    };

    var auth = '?user='+ $localStorage.mail.user +'&pass='+ $localStorage.mail.pass +'&mail='+ $localStorage.mail.mail;

    // Connect to mail if you already entered credentials (session storage)
    if($localStorage.mail){
        myHttp($scope, {method: 'GET', url: 'api/v1/c5/mailer' + auth });
    }

    $scope.emailConnectDialog = function(event, dialogName){

        myDialog(event, dialogName, $scope, function(){

            $scope.$storage = $localStorage.$default({
                mail: $scope.email
            });

            if ($localStorage.mail != undefined){
                myHttp($scope, {method: 'GET', url: 'api/v1/c5/mailer' + auth });

                myPopup('Connected to email');
            }

        });

    };

    $scope.object = '';

    //Pagination
    $scope.currentPage = 0;
    $scope.pageSize = 10;

    $timeout(function () {
        $scope.numberOfPages = function () {
            return Math.ceil($scope.object.length / $scope.pageSize);
        };
    }, 1000);

});

//user: 'homevildan@hotmail.com',
//pass: 'sani1993',
//mail: 'imap-mail.outlook.com'

//chat.globalgps.ba:5222