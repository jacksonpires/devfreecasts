module.exports = function(grunt) {

  var config = {

    // Clean folders ================================
    clean: {
      dist: ["dist"]
    },

    // Smush it task ================================
    smushit: {
      dist: {
        src: ['www/images/*.jpg'],
        dest: 'www/images'
      }
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
  grunt.loadNpmTasks("grunt-smushit");
  
  grunt.registerTask("default",["clean", "harp", "smushit"/*, "gh-pages" */]);

  grunt.registerTask("deploy", ["default"]);
};