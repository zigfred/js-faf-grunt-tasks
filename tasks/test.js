module.exports = function(grunt) {
    grunt.registerTask('test', 'Run unit tests',[
        'merge-requirejs-configs',
        'karma:phantom'
    ]);
};