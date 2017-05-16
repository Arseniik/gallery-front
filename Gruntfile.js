module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: ['app/*.js', 'app/**/*.js', '!app/bower_components/*.js'],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        concat_css: {
            options: {},
            files: {
                'app/css/all.min.css': [
                    'app/css/*.css',
                    'app/css/**/*.css'
                ]

            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-include-files');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');

    grunt.registerTask('default', ['uglify']);
};
