/**
 * Created by Vildan on 10/26/2015.
 */
var app = angular.module('app');

app.controller('dssCtrl', function ($scope, uiGmapGoogleMapApi) {

    uiGmapGoogleMapApi.then(function(maps) {
        // default
        $scope.map = {center: {latitude: 41.328716, longitude: 26.844633 }, zoom: 5, bounds: {}};
        $scope.polylines = [];
        $scope.polylines = [
            {
                id: 1,
                path: [
                    {
                        latitude: 48.040726,
                        longitude:  11.714319
                    },
                    {
                        latitude: 46.473480,
                        longitude:  14.601466
                    },
                    {
                        latitude: 45.610730,
                        longitude: 19.169348
                    },
                    {
                        latitude: 43.732631,
                        longitude: 22.432121
                    },
                    {
                        latitude: 41.445284,
                        longitude: 27.870076
                    },
                    {
                        latitude: 39.507258,
                        longitude: 33.991659
                    },
                    {
                        latitude: 35.439988,
                        longitude: 38.031283
                    }
                ],
                stroke: {
                    color: '#6060FB',
                    weight: 3
                },
                editable: true,
                draggable: true,
                geodesic: true,
                visible: true,
                icons: [{
                    icon: {
                        path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW
                    },
                    offset: '25px',
                    repeat: '50px'
                }]
            }
        ];

        // company GLOBALGPS
        $scope.company = {center: {latitude: 43.859881, longitude: 18.417646 }, zoom: 16 };
        $scope.marker = {
            id: 0,
            coords: {
                latitude: 43.859881,
                longitude: 18.417646
            },
            options: { draggable: true }
        };
        $scope.title = "Global GPS";

        // Siria
        $scope.imigrants = {center: {latitude: 34.530810, longitude: 39.293240 }, zoom: 5 };

        // options
        $scope.options = {scrollwheel: false};

        $scope.windowOptions = {
            visible: false
        };

        $scope.onClick = function() {
            $scope.windowOptions.visible = !$scope.windowOptions.visible;
        };

        $scope.closeClick = function() {
            $scope.windowOptions.visible = false;
        };

    });

});