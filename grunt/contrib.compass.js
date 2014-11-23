module.exports = function (grunt) {
  grunt.config('compass', {
    development: {
      options: {
        config: 'grunt/config/compass.rb',
        bundleExec: true
      }
    },
    production: {
      options: {
        config: 'grunt/config/compass.rb',
        bundleExec: true,
        outputStyle: 'compressed'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
};
