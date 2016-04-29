'use strict';

aboutApp.controller('genralPlanCtrl', 
		['$scope', 'medicalPlanSrv', 'medicalPlanFactory', 
		 function($scope, medicalPlanSrv, medicalPlanFactory) {
			$scope.test = "Test";
			$scope.test1 = medicalPlanSrv.testPlan();
			$scope.generalServicePlan = medicalPlanSrv.genralPlan("visitor");
			$scope.generalFactoryPlan = medicalPlanFactory.genralPlan("students");
}]);