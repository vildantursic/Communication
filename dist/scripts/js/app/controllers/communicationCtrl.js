var app = angular.module('app');

app.controller('communicationCtrl', function ($scope, $mdDialog, $http, $mdToast, myHttp, socket, myDialog, myPopup, $animate, $state, $timeout, $mdBottomSheet, $rootScope, $localStorage) {

    socket.emit('new user', "viki"+Math.random(),function(data){
        if(data){
            console.log("User added")
        }else{
            console.log("Nickname already in use")
        }
    });

    socket.on('usernames', function(data){
        $scope.users = data;
    });

    ///////////////////
    // Grid
    ///////////////////
    $scope.items = [
        { name: 'Chat Room', icon: 'chat' },
        { name: 'E-mail', icon: 'email' }
    ];

    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };

    $scope.showGridBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'views/partials/directives/gridMenu.html',
            controller: 'emailsCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $mdToast.show(
                $mdToast.simple()
                    .content(clickedItem['name'] + ' clicked!')
                    .position('top right')
                    .hideDelay(1500)
            );
        });
    };
    ///////////////

});