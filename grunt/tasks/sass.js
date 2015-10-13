module.exports = function (grunt) {
    // Load task
    grunt.loadNpmTasks("grunt-contrib-sass");

    // Options
    return {
        options: {

        },
        dist: {
            files: {
                'public/stylesheets/main.css': 'public/sass/main.scss',

            }
        },

    };
};