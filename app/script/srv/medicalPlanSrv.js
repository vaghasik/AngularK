'use strict';

aboutApp.service('medicalPlanSrv', function() {
	this.testPlan = function(){
		 return "We have plans";
	 };
	 this.genralPlan = function(text){
		 return "We have plans for " + text + ".";
	 };
	 this.publicPlan = function(texts){
		 return "We have plans for " + texts + ".";
	 };
});