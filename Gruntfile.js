/*global module:false*/
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    watch: {
    },
    stylelint: {
      all: ["public/css/*.css"],
      all: ["public/css/ui_patterns/*.css"]
		}
  });

  grunt.loadNpmTasks("grunt-stylelint");

  // Default task.
  grunt.registerTask('default', ['stylelint']);
};