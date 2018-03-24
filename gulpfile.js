var gulp = require('gulp')
var pug = require('gulp-pug')
const debug = require('gulp-debug')
var stylus = require('gulp-stylus')
var jsdoc = require('gulp-jsdoc3')

gulp.task('html', function () {
  return gulp.src('src/*.pug')
    .pipe(debug({title: 'Html:'}))
    .pipe(pug())
    .pipe(gulp.dest('dist'))
})

gulp.task('css', function () {
  return gulp.src('src/*.styl')
    .pipe(debug({title: 'Css:'}))
    .pipe(stylus())
    .pipe(gulp.dest('dist'))
})

gulp.task('jsdoc', function (cb) {
  gulp.src(['README.md', './src/**/*.js'], {read: false})
    .pipe(jsdoc(cb))
})

gulp.task('default', ['html', 'css', 'jsdoc'])
