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
  
  grunt.registerTask("default",["env", "clean", "harp", "gh-pages"]);

  grunt.registerTask("deploy", ["default"]);
};