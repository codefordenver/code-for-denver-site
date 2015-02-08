// Dependencies
var gulp       = require('gulp'),
    handlebars = require('gulp-handlebars'),
    wrap       = require('gulp-wrap'),
    declare    = require('gulp-declare'),
    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify'),
    minify     = require('gulp-minify-css'),
    batch      = require('gulp-batch'),
    watch      = require('gulp-watch');

// Task that compiles templates
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

// Task to include and bundle js
gulp.task('scripts', function(){
  return gulp.src(['js/*.js', 'build/js/templates.js'])
  .pipe(concat('bundle.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js/dist/'));
});

// Fires ^^^ build ^^^ when change occurs in template files.
gulp.task('watch', function () {
  watch('templates/*.hbs', batch(function(){
    gulp.start('build');
  }));

  watch('js/*.js', batch(function(){
    gulp.start('scripts');
  }));

  watch('css/*.css', batch(function(){
    gulp.start('styles');
  }));
});
