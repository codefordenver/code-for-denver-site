// Dependencies
var gulp       = require('gulp'),
    handlebars = require('gulp-handlebars'),
    wrap       = require('gulp-wrap'),
    declare    = require('gulp-declare'),
    concat     = require('gulp-concat'),
    batch      = require('gulp-batch'),
    watch      = require('gulp-watch');

// Taks that compiles templates
gulp.task('build', function(){
  gulp.src('templates/*.hbs')
  .pipe(handlebars())
  .pipe(wrap('Handlebars.template(<%= contents %>)'))
  .pipe(declare({
    namespace: 'CodeForDenver.templates',
    noRedeclare: true, // Avoid duplicate declarations
  }))
  .pipe(concat('templates.js'))
  .pipe(gulp.dest('build/js/'));
});

// Fires ^^^ build ^^^ when change occurs in template files.
gulp.task('watch', function () {
  watch('templates/*.hbs', batch(function () {
    gulp.start('build');
  }));
});
