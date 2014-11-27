var fs = require('fs');

module.exports = function(grunt) {
    grunt.registerTask('generate-additional-filteredSources-config', 'Update files list for copy:filteredSources target', function() {
        var copyTaskFiles = grunt.config.get("copy.filteredSources.files"),
            requireConfigFile = grunt.file.read('src/require.config.js'),
            paths = (new Function("requirejs", "return " + requireConfigFile))({
                config: function(opts) {
                    return opts.paths;
                }
            }),
            source = 'src/',
            additionalPathesToCopy = [];

        //iterate over all pathes in require.config.js
        //and add files to the array
        for (var key in paths) {
            if (paths.hasOwnProperty(key)) {
                var path = paths[key];

                if (fs.existsSync(source + path + ".js")) {
                    //it's a js file
                    additionalPathesToCopy.push(path + ".js");
                } else if (fs.existsSync(source + path)) {
                    //it's a directory, will copy all resources from it
                    additionalPathesToCopy.push(path + "/**");
                }
            }
        }

        //update files property of copy:requirejs target with dynamically generated ones
        copyTaskFiles[1].src.push.apply(copyTaskFiles[1].src, additionalPathesToCopy);
        grunt.config.set("copy.filteredSources.files", copyTaskFiles);

        grunt.log.ok("copy:filteredSources updated with additional pathes");
    });
};
 