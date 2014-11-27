module.exports = {
    options: {
        archive: '<%= overlay %>/<%= pkg.name %>-<%= pkg.overlayVersion %>.zip'
    },
    files: [
        {
            expand: true,
            cwd: 'build/overlay',
            src: ['**/*']
        }
    ]
};