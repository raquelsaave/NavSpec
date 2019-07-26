/*global module:false*/
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    watch: {
    },
    stylelint: {
			all: ["*.css"]
		}
  });

  grunt.loadNpmTasks("grunt-stylelint");

  // Default task.
  grunt.registerTask('default', ['stylelint']);
};