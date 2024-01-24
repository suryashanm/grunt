module.exports = function (grunt) {
  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    "@" +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  // Project configuration.
  grunt.initConfig({
    // File concatenation.
    concat: {
      options: {
        separator: "\n",
        sourceMap: true,
        banner: "/*Processed by Grunt on " + datetime + "*/\n",
      },
      css: {
        src: ["../css/**/*.css"],
        dest: "dist/css/style.css",
      },
      js: {
        src: ["../js/**/*.js"],
        dest: "dist/js/script.js",
      },
      scss: {
        src: ["../scss/**/*.scss"],
        dest: "dist/scss/color.scss",
      },
    },
  });

  // Loading Npm tasks
  grunt.loadNpmTasks("grunt-contrib-concat");

  // Running npm tasks
  grunt.registerTask("default", ["concat"]);
};
