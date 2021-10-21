const gulp = require('gulp')
const fs = require('fs')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
/* HTML */
const path = {
  src: 'src',
  dist: 'dist'
}
gulp.task('ejs', ()=>{
  return gulp.src([
    path.src + '/ejs/**/' + '*.ejs',
    '!' + path.src + '/ejs/**/' + '_*.ejs'
  ]).pipe(plumber())
  .pipe(ejs(/*{ json: json}, {},{}*/))
  .pipe(rename({extname: '.html'}))
  .pipe(gulp.dest(path.dist))
})
gulp.task('default', gulp.series('ejs'))