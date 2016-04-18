module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// Tasks
		serve: {
			options: {
				port: 9000
			}
		}
		});
	
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-serve');

	// Default task(s).
	grunt.registerTask('appServe', ['serve']);
	//http://localhost:9000/app/index.html#/about
	
};