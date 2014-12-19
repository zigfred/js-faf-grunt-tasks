var merge = require("merge");

module.exports = function(grunt) {
    grunt.registerTask('generate-jshint-options', 'Generate .jshintrc files from jshing options', function() {

        var conf = grunt.config.get("jshint"),
            src = merge(conf.options, conf.source.options),
            test = merge(conf.options, conf.test.options);

        grunt.file.write("src/.jshintrc", JSON.stringify(src, null, " "));
        grunt.file.write("test/.jshintrc", JSON.stringify(test, null, " "));

    });
};
