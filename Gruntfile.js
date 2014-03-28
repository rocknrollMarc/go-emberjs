module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),

    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /public\/js\/app\/templates\//
        },
        files: {
          'public/js/templates.js': 'public/js/app/templates/**/*.hbs'
        }
      }
    },

    concat: {
      libs: {
        src: [
          'public/js/libs/jquery-1.10.2.js',
          'public/js/libs/handlebars-1.1.2.js',
          'public/js/libs/ember-1.4.0.js',
          'public/js/libs/ember-data.min.js',
        ],
        dest: 'public/js/libs.js'
      },
      app: {
        src: 'public/js/app/**/*.js',
        dest: 'public/js/app.js'
      }
    },

    watch: {
      emberTemplates: {
        files: 'public/js/app/templates/**/*.hbs',
        tasks: ['emberTemplates']
      },
      concat: {
        files: ['assets/js/**/*.js', '!assets/js/app.js', '!assets/js/libs.js', '!assets/js/templates.js'],
        tasks: ['concat']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ember-templates');

  // Default task(s).
  grunt.registerTask('default', ['concat','emberTemplates']);
};
