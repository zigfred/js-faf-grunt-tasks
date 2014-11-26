module.exports = function(grunt) {
    grunt.registerTask('optimize','Run optimization', [
        'clean:optimization',
        'merge-requirejs-configs',
        'requirejs',
        'uglify'
    ]);
};