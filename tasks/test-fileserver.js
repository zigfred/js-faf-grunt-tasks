module.exports = function(grunt) {
    grunt.registerTask('test-fileserver', 'Run unit tests fileserver', [
        'merge-requirejs-configs',
        'karma:fileserver'
    ]);
};