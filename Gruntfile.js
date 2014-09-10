module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        'esnext': true
      },
      src: ['app/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', 'Log default stuff', function() {
    grunt.log.write("Logging some default stuff...").ok();
  });

  grunt.registerTask('logStuff', 'Logging some other stuff', function() {
    grunt.log.write("Logging some other stuff....").ok();
  });
};
