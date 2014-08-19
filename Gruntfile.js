module.exports = function(grunt) {

  var harp = require('./harp.json');

  var platform_files = harp.globals.platforms.map(function(platform) {
    return {src: "public/" + platform + "/_data.json", dest: "www/api/" + platform + ".json"};
  });

  var config = {

    // Setup ENV vars ================================
    env: {
      main : {
        NODE_ENV : 'production'
      }
    },
 
    // Clean folders ================================
    clean: {
      main: ["www"]
    },

    // Harp Compile ================================
    harp: {
      main: {
        source: "./",
        dest: "www"
      }
    },

    // Copy Sources ================================
    copy: {
      main: {
        files: platform_files
      }
    },

    // CSS Min ======================================
    cssmin: {
      main: {
        options: {
          keepSpecialComments: 0
        },
        files: {
          'www/assets/css/main.css': ['www/assets/css/main.css']
        }
      }
    },

    // JS Min ======================================
    uglify: {
      main: {
        files: {
          'www/assets/js/main.js': ['www/assets/js/main.js']
        }
      }
    },

    // Compress ======================================
    compress: {
      main: {
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
  grunt.loadNpmTasks("grunt-gh-pages");
  grunt.loadNpmTasks("grunt-harp");
  grunt.loadNpmTasks("grunt-env");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.registerTask("default",["env", "clean", "harp", "copy", 
                                "cssmin", "uglify", "compress"]);

  grunt.registerTask("deploy", ["default", "gh-pages"]);
};