module.exports = function(grunt) {
    grunt.registerTask('default', 'Run code quality tools. Execute tests, optimize', [
        'test',
        'optimize',
        'copy:loader',
        'karma:coverage',
        'jsdoc'
    ]);
};