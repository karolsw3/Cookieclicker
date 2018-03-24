var gulp = require('gulp')
var pug = require('gulp-pug')
const debug = require('gulp-debug')
var stylus = require('gulp-stylus')
const babel = require('gulp-babel')
var uglify = require('gulp-uglify-es').default
var jsdoc = require('gulp-jsdoc3')
var pump = require('pump')

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

// gulp.task('compress', function (cb) {
//  pump([
//    gulp.src('src/**/*.js').pipe(babel({
//      presets: ['env']
//    })),
//    uglify(),
//    gulp.dest('dist')
//  ],
//  cb
//  )
// })

gulp.task('default', ['html', 'css', 'jsdoc'])
