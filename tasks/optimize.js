module.exports = function(grunt) {
    grunt.registerTask('optimize','Run optimization', [
        'clean:optimization',
        'filterSources',
        'generate-requirejs-optimize-options',
        'requirejs'
    ]);
};