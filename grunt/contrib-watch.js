module.exports = function (grunt) {
  grunt.config('watch', {
    scss: {
      files: ['assets/sass/*.scss', 'assets/sass/**/*.scss'],
      tasks: ['compass:development', 'hologram']
    },
    css: {
      files: 'assets/css/*',
      tasks: ['csslint']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
};
