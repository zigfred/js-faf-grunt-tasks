module.exports = function(grunt) {
    grunt.registerTask('init', 'Prepare project to work with, useful to refresh dependencies', [
        'clean:dependencies',
        'install-bower-dependencies',
        'merge-requirejs-configs'
    ]);
};