module.exports = function (grunt) {
  grunt.config('hologram', {
    options: {
      config: 'grunt/config/hologram_config.yml'
    }
  });
  grunt.loadNpmTasks('grunt-hologram');
};
