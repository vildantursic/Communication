/////////////
// This application is using angular material 0.11.2 which documentation you can find here --> https://material.angularjs.org/0.11.2/#/
// All other dependencies which are used in this application you can find in bower.json file which is located in route of /app
// This file is holding configuration of application and factory and services (reusable parts of code)
/////////////
var app = angular.module('app', ['ngMaterial', 'ngMessages', 'ui.router', 'nvd3', 'ngStorage', 'uiGmapgoogle-maps', 'materialCalendar']);
/***********/

/////////////
// Url's of API which application is using.
// This application doesn't have its backend. Instead it is using NodeJS Express framework created API as backend.
// Two provided url's are: local for testing purposes (localhost:7001)
// and other one is API which is running on server num. 3, inner port 7001, forwarded to 81 so that application can communicate
// over reverse proxy (For more information how communication between app and api is working you can ask Enio Kraljic)
/////////////

var url = "http://localhost:7001/";
// var url = "http://tm.tiimiss.globalgps.ba:81/";
/***********/

/////////////
// Configuration for application
// mdThemingProvider is set of primary and secondary color for application
// you can find set of colors on --> http://www.materialpalette.com/
// or on page --> https://material.angularjs.org/latest/
//
// uiGmapGoogleMapApiProvider is configuration for angular google maps which were used for prototyping application
// all related documentation can be found on --> http://angular-ui.github.io/angular-google-maps/#!/
/////////////

app.config(function($mdThemingProvider, uiGmapGoogleMapApiProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('light-blue');

    uiGmapGoogleMapApiProvider.configure({
        //key: 'AIzaSyA2vATFUMK4i80hnpLwOo3hbMA8QwTPSxk',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});
/***********/

///////////////////////
// Getting ip address of user and returning it as json object.
// You can do whatever you want with it.
///////////////////////

$.get("http://ipinfo.io", function(response) {
    //console.log(response);
}, "jsonp");
/***********/

/////////////////
// Toast message factory will return you angular popup message
// all you need is inherit myPopup in your controller and call it as function passing it parameters for message.
// Position of toast message can is set in toastPosition object.
// Duration of message is configured at the end of return function hideDelay()
/////////////////

app.factory('myPopup', function($rootScope, $mdToast){

    //TOAST MESSAGE DEFINING
    var toastPosition = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };
    function getToastPosition() {
        return Object.keys(toastPosition)
            .filter(function (pos) {
                return toastPosition[pos];
            })
            .join(' ');
    }

    //TOAST MESSAGE SHOW
    return function (message) {
        $mdToast.show(
            $mdToast.simple()
                .content(message)
                .position(getToastPosition())
                .hideDelay(3000)
        );
    };

});
/***********/

/////////////////////////
// Pagination filter
/////////////////////////

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

//////////////////
// Http request
//////////////////

app.service('myHttp', ['$http', '$state', function($http, $state){

    return function ($scope, httpParams, data){

        // loading screen
        $scope.status = true;

        $scope.change = function () {
            $scope.status = false;
        };
        // **************

        var httpParameters = {
            method: httpParams.method,
            url: url + httpParams.url,
            async: true,
            crossDomain: true,
            data: data,
            dataType: "jsonp",
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        };

        $http(httpParameters).success(function(data){
            if(httpParams.method == 'GET'){
                $scope.object = data;
                $scope.change();
            }
            else if(httpParams.method == 'POST'){
                console.log(data);
                $state.reload();
            }
            else if(httpParams.method == 'PUT'){
                console.log(data);
                $state.reload();
            }
            else if(httpParams.method == 'DELETE'){
                console.log(data);
                $state.reload();
            }
        }).error(function(data){
            if(httpParams.method == 'GET'){
                console.log(data);
                $state.go("404");
            }
            else if(httpParams.method == 'POST'){
                console.log(data);
            }
            else if(httpParams.method == 'PUT'){
                console.log(data);
            }
            else if(httpParams.method == 'DELETE'){
                console.log(data);
            }
        });

    }

}]);

//////////////////
// Dialog popup
//////////////////

app.factory('myDialog', function($mdDialog){

    function DialogController($scope, $mdDialog) {

        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }

    return function (ev, dialogName, $scope, cb) {

        $mdDialog.show({
            controller: DialogController,
            scope: $scope.$new(),
            templateUrl: 'views/partials/dialogs/'+ dialogName +'.html',
            parent: angular.element(document.body),
            targetEvent: ev
        }).then(function (answer) {
            if(answer == 'save' || answer == 'yes'){
                cb();
            }
            else if(answer == 'cancel' || answer == 'no'){
                console.log('quit');
            }
        }, function () {
            console.log('You cancelled the dialog.');
        });
    }

});

///////////////////////
// Socket.io
//////////////////////

app.factory('socket', function ($rootScope) {
    var socket = io.connect(url);
    return {
        on: function (eventName, callback) {
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    };
});
