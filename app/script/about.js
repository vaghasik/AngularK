'use strict';

var aboutApp = angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'view/about.html',
    controller: 'AboutCtrl'
  });
}])

aboutApp.controller('AboutCtrl', [function() {

}]);