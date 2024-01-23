module.exports = function (grunt) {
  grunt.registerTask("helloworld", function () {
    console.log("Hello world task.");
  });

  var defaultfn = function () {
    console.log("defaultfn is running.");
  };

  grunt.registerTask("task1", function () {
    console.log("task1.");
  });

  grunt.registerTask("task2", function () {
    console.log("task2.");
  });

  // callback function running as a default task.
  // grunt.registerTask("default", defaultfn);

  // Instead of running tasks on default, we run function on default.
  // grunt.registerTask("default", function () {
  //   console.log("Default task.");
  // });

  // Basically we can run tasks as default.
  grunt.registerTask("callback", defaultfn);
  grunt.registerTask("default", ["helloworld", "task1", "task2", "callback"]);
};
