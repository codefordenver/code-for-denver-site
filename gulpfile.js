// Dependencies
var gulp       = require('gulp'),
    handlebars = require('gulp-handlebars'),
    wrap       = require('gulp-wrap'),
    declare    = require('gulp-declare'),
    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify'),
    batch      = require('gulp-batch'),
    watch      = require('gulp-watch');

// Task that compiles templates
gulp.task('compile', function(){
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
gulp.task('build', ['compile'], function(){
  return gulp.src(['js/*.js', 'build/js/templates.js'])
  .pipe(concat('bundle.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js/dist/'));
});

gulp.task('watch', function () {
  watch(['js/*.js', 'templates/*.hbs'], batch(function(){
    gulp.start('build');
  }));
});
