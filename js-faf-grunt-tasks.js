var glob = require('glob');

function extendConfig(config, path, grunt) {
    try {
        glob.sync('*', {cwd: path}).forEach(function (option) {
            var parts = option.replace(/\.js$/, '').split("-"),
                level = config;

            for (var i = 0; i < parts.length; i++) {
                if (!level[parts[i]]) {
                    level[parts[i]] = (i + 1) === parts.length ? require(path + option) : {};
                }

                level = level[parts[i]];
            }
        });
    } catch(ex) {
        grunt.log.writeln("Cannot read grunt config options: " + ex);
    }

    return config;
}

module.exports = function (grunt, options) {
    options = options || {};

    if (!options.cwd) {
        throw new Error("Current working directory is not specified");
    }

    grunt.loadTasks(__dirname + '/tasks');

    try {
        grunt.loadTasks(options.cwd + '/tasks');
    } catch(ex) {
        grunt.log.writeln("Cannot load tasks from working dir: " + ex);
    }

    try {
        var ws = grunt.file.readJSON(options.cwd + '/.workspace'),
            server = ws ? ws.server : null,
            localSrc = ws ? ws['working-copy'] : null;
    } catch (e) {
        grunt.log.writeln('No \'.workspace\' was found.');
    }

    var config = {
        pkg: grunt.file.readJSON(options.cwd + '/package.json'),
        jrs: server,
        svn: localSrc
    };

    extendConfig(config, __dirname + '/tasks/options/', grunt);
    extendConfig(config, options.cwd + '/tasks/options/', grunt);

    grunt.initConfig(config);
};