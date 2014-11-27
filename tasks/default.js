module.exports = function(grunt) {
    grunt.registerTask('default', 'Run code quality tools. Execute tests, optimize', [
        'test',
        'karma:coverage',
        'jsdoc'
    ]);
};