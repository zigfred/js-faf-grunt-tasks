var requireMerge = require('requirejs-config-merge');

module.exports = function(grunt) {
    grunt.registerTask('merge-requirejs-configs', 'Merge RequireJS configs', function() {
        requireMerge([ 'config.js' ], 'src/require.config.js');
    });
};
 