const gulp = require('gulp')
const fs = require('fs')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const d_sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer')
const sourcemap = require('gulp-sourcemaps')
/* common */
const path = {
  src: 'src',
  dist: 'dist'
}
/* HTML */
const json = JSON.parse(fs.readFileSync(path.src + '/_data/_data.json'))
gulp.task('ejs', ()=>{
  return gulp.src([
    path.src + '/ejs/**/' + '*.ejs',
    '!' + path.src + '/ejs/**/' + '_*.ejs'
  ]).pipe(plumber())
  .pipe(ejs({ json: json}, {},{}))
  .pipe(rename({extname: '.html'}))
  .pipe(gulp.dest(path.dist))
})
/* CSS */
gulp.task('style', (done)=>{
  gulp.src(path.src + '/sass/**/' + '*.scss')
  .pipe(sourcemap.init({ largeFile: true }))
  .pipe(d_sass({
    outputStyle: 'expanded'
  }))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(gulp.dest(path.dist + '/css'))
  .pipe(sourcemap.write('_maps'))
  .pipe(gulp.dest(path.dist))
  done();
})
gulp.task('default', gulp.series('ejs', 'style'))