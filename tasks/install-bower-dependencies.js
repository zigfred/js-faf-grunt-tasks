var bower = require('bower');

module.exports = function(grunt) {
    grunt.registerTask('install-bower-dependencies', 'Clean up bower cache and install dependencies', function () {
        var done = this.async();

        bower
            .commands
            .cache
            .clean(undefined, undefined, {
                verbose: true
            })
            .on('log', function (log) {
                grunt.log.writeln(log.message);
            })
            .on('end', function () {
                bower
                    .commands
                    .install(undefined, undefined, {
                        verbose: true
                    })
                    .on('log', function (log) {
                        grunt.log.writeln(log.message);
                    })
                    .on('end', function () {
                        done();
                    });
            });
    });
};