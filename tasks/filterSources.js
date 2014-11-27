module.exports = function(grunt) {
    grunt.registerTask('filterSources','Prepare sources for optimization, overlay and deploy', [
        'clean:filteredSources',
        'merge-requirejs-configs',
        'generate-additional-filteredSources-config',
        'copy:filteredSources'
    ]);
};