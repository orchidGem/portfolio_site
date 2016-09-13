'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// file directories
var sassDirectory = 'resources/sass/**/*.scss';

gulp.task('sass', function() {
  return gulp.src(sassDirectory)
  .pipe(sourcemaps.init())
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(''));
});

gulp.task('default', function(){
  gulp.watch(sassDirectory, ['sass']);
});
