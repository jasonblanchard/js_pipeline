module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        'esnext': true
      },
      src: ['app/*.js']
    },
    
    aws: grunt.file.readJSON('s3.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>',
        uploadConcurrency: 5,
        region: 'us-west-2'
      },

      production: {
        options: {
          bucket: 'jspipeline',
        },
        files: [
          {expand: true, cwd: 'dist/', src: ['**'], dest: ''}
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-aws-s3');

  grunt.registerTask('default', 'Log default stuff', function() {
    grunt.log.write("Logging some default stuff...").ok();
  });

  grunt.registerTask('logStuff', 'Logging some other stuff', function() {
    grunt.log.write("Logging some other stuff....").ok();
  });
};
