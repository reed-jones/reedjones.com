// 'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
  connect = require('gulp-connect'),
  htmlmin = require('gulp-htmlmin'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename');

/************************* DEFAULT *************************************/

gulp.task('default', ['connect', 'watch-sass', 'watch-js', 'watch-html']);

gulp.task('connect', function() {
  connect.server({
    root: '_public',
    livereload: true
  });
});

/**************************** SCSS *************************************/
gulp.task('watch-sass', () => {
	gulp.watch('scss/**/*.scss', ['sass']);
});
gulp.task('sass', () => {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('_public/css'))
    .pipe(connect.reload());
});

/************************** JAVASCRIPT ***************************************/
gulp.task('watch-js', () => {
    gulp.watch('scripts/**/*.js', ['concat-js']);
});

gulp.task('concat-js', function() {
  return gulp.src(['scripts/plugins.js','scripts/scripts.js', ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_public/js'))
    .pipe(connect.reload());
});
/******************************* HTML **************************************/
gulp.task('watch-html', () => {
    gulp.watch('html/**/*.html', ['html-min']);
});

gulp.task('html-min', function() {
  return gulp.src('html/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_public'))
    .pipe(connect.reload());
});