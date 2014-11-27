//copy raw and optimized sources to single place
//which will be used for deployment and release
module.exports = {
    files: [
        {
            expand: true,
            cwd: 'build/filteredSources',
            src: ['**/*'],
            dest: 'build/overlay/scripts/'
        },
        {
            expand: true,
            cwd: 'build/optimized/',
            src: ['**/*'],
            dest: 'build/overlay/optimized-scripts/'
        }
    ]
};