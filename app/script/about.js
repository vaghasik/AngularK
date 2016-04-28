'use strict';

var aboutApp = angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'view/about.html',
    controller: 'AboutCtrl'
  });
}])

aboutApp.controller('genralPlanCtrl', 
		['$scope', 'medicalPlanServeice', 'medicalPlanFactory', 
		 function($scope, medicalPlanServeice, medicalPlanFactory) {
			$scope.test = "Test";
			$scope.generalServicePlan = medicalPlanServeice.genralPlan("visitor");
	console.log($scope.generalServicePlan);
			$scope.generalFactoryPlan = medicalPlanFactory.genralPlan("students");
}]); 

aboutApp.controller('AboutCtrl', [function() {

}]);

aboutApp.factory('medicalPlanFactory', function() {
	return {
		genralPlan: function(text){
			return "We have factory genral plans for", +text+ ".";
		},
		publicPlan: function(text) {
			return "We have factory public plans for", +text+ ".";
		}
	}
});

aboutApp.service('medicalPlanServeice', function() {
	 this.genralPlan = function(text){
		 return "We have plans for", +text+ ".";
	 };
	 this.publicPlan = function(text){
		 return "We have plans for", +text+ ".";
	 };
});
/*
function genralPlanCtrl($scope, medicalPlanServeice, medicalPlanFactory)
{
	$scope.test = "Test!";
	$scope.generalServicePlan = medicalPlanServeice.genralPlan("visitor");
	console.log($scope.generalServicePlan);
	$scope.generalFactoryPlan = medicalPlanFactory.genralPlan("students");
}*/