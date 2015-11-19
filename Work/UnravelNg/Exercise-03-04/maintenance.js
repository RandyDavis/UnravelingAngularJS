/**
 * Created by randy on 11/16/15.
 */
'use strict';

angular.module('maintenance', ['ngRoute'])
    .controller('adminCtrl', AdminCtrl)
    .controller('mainCtrl', MainCtrl)
    .controller('locationsCtrl', LocationsCtrl)
    .controller('sitesCtrl', SitesCtrl)
    .factory('currentSpot', currentSpot)

    .config(function ($routeProvider) {
        $routeProvider
            .when('/locations', {
                templateUrl: 'views/locations.html',
                controller: 'locationsCtrl'
            })
            .when('/dives', {
                templateUrl: 'views/sites.html',
                controller: 'sitesCtrl'
            })
            .otherwise({
                templateUrl: 'views/main.html',
                controller: 'mainCtrl'
            });
    })

    function AdminCtrl ($scope, currentSpot) {
        $scope.isActive = isActive;
        $scope.getTitle = getTitle;

        function isActive (menuId) {
            return currentSpot.getActiveMenu() == menuId;
        }

        function getTitle () {
            return currentSpot.getTitle();
        }


        //$scope.activeMenu = '';
        //$scope.isActive = isActive;
        //$scope.showMain = showMain;
        //$scope.showLocations = showLocations;
        //$scope.showDiveSites = showDiveSites;
        //
        //$scope.showMain();
        //
        //function setView(view, menuId) {
        //    $scope.view = view;
        //    $scope.activeMenu = menuId;
        //}
        //
        //function isActive(menuId) {
        //    return $scope.activeMenu == menuId;
        //}
        //
        //function showMain() {
        //    setView('main', '');
        //}
        //
        //function showLocations() {
        //    setView('locations', 'Locations');
        //}
        //
        //function showDiveSites() {
        //    setView('diveSites', 'Sites');
        //}
    }

    function currentSpot() {
        var activeMenuId = '';
        var titleText = '';

        return {
            setCurrentSpot: function (menuId, title) {
                activeMenuId = menuId;
                titleText = title;
            },
            getActiveMenu: function () {
                return activeMenuId;
            },
            getTitle: function () {
                return titleText;
            }
        }
    }

function MainCtrl (currentSpot) {
    currentSpot.setCurrentSpot("", "");
}

function LocationsCtrl (currentSpot) {
    currentSpot.setCurrentSpot('Locations', 'Manage the list of diving locations');
}

function SitesCtrl (currentSpot) {
    currentSpot.setCurrentSpot('Sites', 'Manage the list of dive sites')
}
