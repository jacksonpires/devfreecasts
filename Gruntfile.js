module.exports = function(grunt) {

  var config = {

    // Setup ENV vars ================================
    env: {
      dist : {
        NODE_ENV : 'production'
      }
    },
 
    // Clean folders ================================
    clean: {
      dist: ["dist"]
    },

    // Harp Compile ================================
    harp: {
      dist: {
        source: "./",
        dest: "www"
      }
    },

    // CSS Min ======================================
    cssmin: {
      combine: {
        files: {
          'www/assets/css/main.css': ['www/assets/css/main.css']
        }
      }
    },

    // Compress ======================================
    compress: {
      dist: {
        options: {
          mode: 'gzip',
          level: 9,
          pretty: true
        },
        files: [
            {expand: true, flatten: true, src: ['www/assets/js/*.js'], dest: 'www/assets/js', ext: '.gz.js'}
          , {expand: true, flatten: true, src: ['www/assets/css/*.css'], dest: 'www/assets/css', ext: '.gz.css'}
        ]
      }
    },

    // Github Pages ================================
    "gh-pages": {
      options: {
        base: "www",
        repo: "git@github.com:caio-ribeiro-pereira/devfreecasts.git",
        message: "Deploying DevFreeCasts"
      },
      src: "**/*"
    },

  };

  grunt.initConfig(config);
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-gh-pages");
  grunt.loadNpmTasks("grunt-harp");
  grunt.loadNpmTasks("grunt-env");
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask("default",["env", "clean", "harp", "cssmin", "compress", "gh-pages"]);

  grunt.registerTask("deploy", ["default"]);
};