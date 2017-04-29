// 'use strict';

var gulp = require('gulp'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload'),
	ts = require('gulp-typescript'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify');

/************************* DEFAULT *************************************/

gulp.task('default', ['watch-pug', 'watch-sass', 'watch-tsc']);

/**************************** PUG *************************************/
gulp.task('watch-pug', () => {
	livereload.listen();
	gulp.watch('views/**/*.pug', ['pug']);
});

gulp.task('pug', () => {
  return gulp.src(['views/**/*.pug', '!views/includes/*.pug'])
    .pipe(pug())
    .pipe(gulp.dest('html'))
    .pipe(livereload());
});

/**************************** SCSS *************************************/
gulp.task('watch-sass', () => {
	livereload.listen();
	gulp.watch('scss/**/*.scss', ['sass']);
});
gulp.task('sass', () => {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('html/css'))
    .pipe(livereload());
});

/************************** TYPESCRIPT ***************************************/
gulp.task('watch-tsc', () => {
	livereload.listen();
	gulp.watch('typescript/**/*.ts', ['tsc']);
});
gulp.task('tsc', function () {
    return gulp.src('typescript/**/*.ts')
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(uglify())
        .pipe(gulp.dest('html/js'))
        .pipe(livereload());
});