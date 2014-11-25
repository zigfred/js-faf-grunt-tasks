var _ = require('underscore'),
    grunt = require('grunt');

function extractModulesFrom (profile) {

    var dir = profile.dir;


    return _.chain(profile.modules)
        .map(function(module){
            var name = module.name,
                path = dir + name + ".js";

            return [path,[path]];
        })
        .object()
        .value();
}

module.exports = {
    //TODO: find out on how exclude bower components from r.js uglification
    files: extractModulesFrom(grunt.file.readJSON('build.json'))
};