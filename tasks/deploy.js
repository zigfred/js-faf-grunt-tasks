module.exports = function(grunt) {
    grunt.registerTask('deploy', 'Deploys package to web server', [
        "clean:package",
        "copy:package"
    ]);
};