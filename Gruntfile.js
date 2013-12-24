module.exports = function(grunt) {

    require('time-grunt')(grunt); // Displays the elapsed execution time of grunt tasks when done

    var config = {
        pgk: grunt.file.readJSON('package.json'),
        /* processing & compiling */
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'nested'
                },
                files: { // Dictionary of files
                    'sass/compiled/bootstrap.css': 'sass/sources/bootstrap.scss', // 'destination': 'source'
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["less"]
                },
                files: {
                    "less/compiled/bootstrap.css": "less/sources/bootstrap.less"
                }
            }
        },
        stylus: {
            bootstrap: {
                options: {
                    paths: ['stylus/sources'],
                    urlfunc: 'embedurl', // use embedurl('test.png') in our code to trigger Data URI embedding
                    use: [
                        require('nib')
                    ]
                },
                import: [
                    'nib'
                ],
                files: {
                    'stylus/compiled/bootstrap.css': 'stylus/sources/bootstrap.styl' // 1:1 compile
                }
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'sass/sources',
                    cssDir: 'sass/compiled',
                    environment: 'production',
                    outputStyle: 'nested',
                    force: true
                }
            }
        },
        clean: {
            compass: ['compass/compiled'],
            styl: ['stylus/compiled'],
            less: ['less/compiled']
        },
        watch: {
            compass: {
                files: ['sass/sources/**'],
                tasks: ['compass']
            },
            less: {
                files: ['less/sources/**'],
                tasks: ['less']
            },
            stylus: {
                files: ['stylus/sources/**'],
                tasks: ['stylus']
            },
        }
    };

    grunt.registerTask('test-less', 'less', function () {
        var i = 10;
        while (i--) {
            // grunt.task.run('clean:less');
            grunt.task.run('less');
        }
    });

    grunt.registerTask('test-compass', 'Test compass compilation', function () {
        var i = 10;
        while (i--) {
            // grunt.task.run('clean:compass');
            grunt.task.run('compass');
        }
    });

    grunt.registerTask('test-stylus', 'Test less compilation time', function () {
        var i = 10;
        while (i--) {
            // grunt.task.run('clean:styl');
            grunt.task.run('stylus');
        }
    });

    grunt.registerTask('watcher', 'Test less compilation time', function () {});

    // grunt.registerTask('sass', ['sass']);
    // grunt.registerTask('compass', ['compass']);
    grunt.initConfig(config);
    /**
     * Load all grunt-* tasks from the package.json
     */
    require('load-grunt-tasks')(grunt, {
        pattern: 'grunt-*'
    });

};