//'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglifycss');

// Converts scss to css.
gulp.task('sass', function() {
    return gulp.src('sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// Minified all the css present in css directory.
gulp.task('css', function() {
    gulp.src('./sass/*.sass')
        .pipe(uglify({
            "uglyComments" : true
        }))
    .pipe(gulp.dest('./dist/'));
});

// Runs the above two tasks.
gulp.task('run', ['sass', 'css']);

// Watch the files for changes.
gulp.task('watch', function() {
    gulp.watch('./sass/*.sass',['sass']);
    gulp.watch('./css/*.css', ['css']);
});

// This is our default task.
gulp.task('default', ['run', 'watch']);

