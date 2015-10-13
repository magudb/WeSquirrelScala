module.exports = function (grunt) {
    // Load task
    grunt.loadNpmTasks("grunt-babel");

    // Options
    return {
       options: {
                   sourceMap: true
               },
        dist: {
            files: {
                'public/javascripts/app.js': 'public/javascripts/src/app.js',

            }
        },

    };
};