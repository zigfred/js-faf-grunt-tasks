module.exports = {
    files: [
        {
            expand: true,
            cwd: 'src/',
            src: [
                '**/*',
                '!**/bower_components/**'
            ],
            dest: '<%= jrs %>/scripts/bower_components/<%= pkg.name %>/src'
        }
    ]
};