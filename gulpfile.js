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




gulp.task('connect', () => {
  connect.server({
    root: '_public',
    livereload: true
  });
});

// /**************************** SCSS *************************************/
gulp.task('watch-sass', () => {
  gulp.watch('scss/**/*.scss', ['sass']);
});
gulp.task('sass', () => {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('_public/css'))
    .pipe(connect.reload());
});

// /************************** JAVASCRIPT ***************************************/
gulp.task('watch-js', () => {
  gulp.watch('scripts/**/*.js', ['concat-js']);
});

gulp.task('concat-js', done => {
  return gulp.src(['scripts/jquery.min.js', 'scripts/plugins.js', 'scripts/scripts.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_public/js'))
    .pipe(connect.reload());
});
// /******************************* HTML **************************************/
gulp.task('watch-html', () => {
  gulp.watch('html/**/*.html', ['html-min']);
});

gulp.task('html-min', done => {
  return gulp.src('html/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('_public'))
    .pipe(connect.reload());
});

/**************************** STATIC *************************************/
gulp.task('copy', done => {
  return gulp.src('assets/**/*')
    .pipe(gulp.dest('_public/'));
});

gulp.task('build', gulp.series('copy', 'sass', 'concat-js', 'html-min'));
gulp.task('default', gulp.series('build', 'connect', 'watch-sass', 'watch-js', 'watch-html'));
