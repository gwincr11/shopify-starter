module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //run compass on css
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'shop/assets',
          specify: 'sass/application.scss',
          outputStyle: 'compressed'
        }
      }
    },
    //concat bower packages
    bower_concat: {
      all: {
        dest: 'build/_bower.js',
        bowerOptions: {
          relative: false,
          exclude: [
              'jquery',
              'modernizr'
          ]
        }
      }
    },
    //concat js files after bower concat runs
    concat:{
      options: {
        seperator: ';'
      },
      dist: {
        src: [
          'build/_bower.js',
          './custom_js/*.js'
        ],
        dest: 'shop/assets/application.js'
      }
    },
    //minify js
    uglify: {
      options: {
        mangle: false,
        compress: {
          drop_console: true
        }
      },
      my_target: {
        files: {
          'shop/assets/application-min.js' : 'assets/application.js',
        }
      }
    },
    //Move the bootstrap files from bower to the compass dir
    copy: {
      main: {
        src: 'bower_components/bootstrap/dist/css/bootstrap.css',
        dest: 'sass/bootstrap.scss'
      }
    },
    //make sure js is cherry
    jshint: {
      files: ['Gruntfile.js', './custom_js/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    // Generates a custom Modernizr build that includes only the tests you
    // reference in your app
    modernizr: {
        dist: {
            devFile: 'bower_components/modernizr/modernizr.js',
            outputFile: 'shop/assets/modernizr.js',
            files: {
                src: [
                    'shop/assets/{,*/}*.js',
                    'shop/assets/{,*/}*.css'
                ]
            },
            uglify: true
        }
    },
    //upload changed files to shopify
    shopify: {
      options: {
        api_key: "API key",
        password: "pass",
        url: "url",
        base: "shop/"
      }
    },
    watch: {
      css: {
        files: ['**/*.scss'],
        tasks: ['copy:','compass']
      },
      scripts: {
        files: [
          './bower_components/{,*/}*.js',
          './custom_js/shop.js',
          'Gruntfile.js'
        ],
        tasks: ['jshint', 'bower_concat', 'concat', 'uglify', 'modernizr']
      },
      shopify: {
        files: ["shop/assets/**", "shop/config/**", "shop/snippets/**", "shop/layout/**", "shop/templates/**" ],
        tasks: ["shopify"]
      },
      options: {
        livereload: true,
        debounceDelay: 10000
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-modernizr');
  grunt.loadNpmTasks('grunt-shopify');
  grunt.registerTask('default',['watch']);
};