module.exports = function (grunt) {
  grunt.config('csslint', {
    options: {
    },
    src: ['./assets/css/*']
  });
  grunt.loadNpmTasks('grunt-contrib-csslint');
};
