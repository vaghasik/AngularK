'use strict';

aboutApp.factory('medicalPlanFactory', function() {
	return {
		genralPlan: function(text){
			return "We have factory genral plans for " +text+ ".";
		},
		publicPlan: function(text) {
			return "We have factory public plans for " +text+ ".";
		}
	}
});