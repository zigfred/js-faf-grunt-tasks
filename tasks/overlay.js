module.exports = function(grunt) {
    grunt.registerTask('overlay','Prepare overlay and make new artifact from it', [
        'clean:overlay',
        'clean:maven',
        'filter-sources',
        'copy:overlay',
        'compress'
    ]);
};