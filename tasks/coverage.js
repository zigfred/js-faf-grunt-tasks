module.exports = function(grunt) {
    grunt.registerTask('coverage', 'Run tests coverage',[
        'merge-requirejs-configs',
        'karma:coverage'
    ]);
};