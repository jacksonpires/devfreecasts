module.exports = function(grunt) {

  var config = {

    // ENV vars ======================================
    env: {
      dev : {
        NODE_ENV : 'development'
      },
      prod: {
        NODE_ENV : 'production'
      }
    },
 
    // Clean folders =================================
    clean: {
      main: ["www"]
    },

    // Harp Compile ==================================
    harp: {
      dev: {
        server: true,
        port: 3000
      },
      prod: {
        source: "./",
        dest: "www"
      }
    },

    // CSS Min =======================================
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

    // JS Min ========================================
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

    // Github Pages ==================================
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
  
  grunt.registerTask("default",["env:dev", "harp:dev"]);
  grunt.registerTask("serve", ["default"]);
  grunt.registerTask("deploy", ["env:prod", "clean", "harp:prod", 
                                "cssmin", "uglify", "compress", "gh-pages"]);
};