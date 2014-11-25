var merge = require('merge'),
    grunt = require('grunt');

module.exports = {
    options: merge(true, grunt.file.readJSON('build.json'), {
        fileExclusionRegExp: /(^\.|prototype.*patched\.js|Owasp\.CsrfGuard\.js)/,
        shim: {
            "mustache":{
                init: function() {
                    return Mustache;
                }
            }
        }

    })
};