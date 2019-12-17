//https: //www.liquidlight.co.uk/blog/how-do-i-update-to-gulp-4/


var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
// Use gulp Watch!!! to actually watch new files

/////////////////
// Source Paths
///////////////

var src = {
  sass: 'app/scss/main.scss',
  html: 'app/**/*.html',
  assets: 'app/assets/**/*',
  js: 'app/**/*.js',
  dist: 'dist'
}

///////////////
// Watch Paths
/////////////

var watchObj = {
  sass: 'app/**/*.scss',
  html: 'app/**/*.html',
  assets: 'app/assets/**/*',
  babel: 'app/**/*.js'
}



/////////////////
// HTML Task
///////////////

gulp.task('html', function(){
  return gulp.src(src.html)
  .pipe(gulp.dest(src.dist))
  .pipe(browserSync.stream())
});

///////////////////////
// Sass Compiler Task
/////////////////////

gulp.task('sass', function () {
 return gulp.src(src.sass)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(src.dist + '/css'))
  .pipe(browserSync.stream())
});

//////////////
// Assets Task
//////////////

gulp.task('assets', function(){
  return gulp.src(src.assets)
  .pipe(gulp.dest(src.dist + '/assets'))
});

//////////////////
// Babel Compiler
////////////////

gulp.task('babel', () =>
  gulp.src(src.js)
  .pipe(sourcemaps.init())
  .pipe(babel({
      presets: ['env']
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(src.dist))
  .pipe(browserSync.stream())
);

///////////////
// Watch Tasks
/////////////

gulp.task('watch', function () {
  browserSync.init({
      server: {
          baseDir: src.dist
      }
  });

  gulp.watch(watchObj.sass, gulp.series('sass'));
  gulp.watch(watchObj.html, gulp.series('html')).on('change', browserSync.reload);
  gulp.watch(watchObj.babel, gulp.series('babel')).on('change', browserSync.reload);
  gulp.watch(watchObj.assets, gulp.series('assets')).on('change', browserSync.reload);

  watch(watchObj.sass , batch(function (events, done) {
    gulp.start('sass', done);
    console.log('Sass batch');
  }));

  watch(watchObj.html, batch(function (events, done) {
    gulp.start('html', done);
    console.log('html batch');
  }));

  watch(watchObj.babel, batch(function (events, done) {
    gulp.start('babel', done);
    console.log('babel batch');
  }));

  watch(watchObj.assets, batch(function (events, done) {
    gulp.start('assets', done);
    console.log('assets batch');
  }));

});

//////////////
// Clean Task
////////////

gulp.task('clean',function(){
  return gulp.src(src.dist)
  .pipe(clean({force: true}));
});

///////////////
// Build: dist
/////////////

//gulp.task('build:dist',['html','sass','babel']);


////////////////////
// Launch the Tasks
//////////////////

gulp.task('default', gulp.series(['html', 'sass', 'assets', 'babel', 'watch']));
