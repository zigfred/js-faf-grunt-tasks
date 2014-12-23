module.exports = function(grunt) {
    grunt.registerTask('filter-sources','Prepare sources for optimization, overlay and deploy', [
        'clean:filteredSources',
        'merge-requirejs-configs',
        'generate-additional-filteredSources-config',
        'copy:filteredSources'
    ]);
};