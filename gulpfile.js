var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var htmlmin = require('gulp-htmlmin');
var clean = require('gulp-clean');

gulp.task('build', ['clean', 'copy-fonts', 'copy-images', 'minify-html', 'minify-css']);

gulp.task('clean', function () {
  return gulp.src('./dist', { read: false })
    .pipe(clean());
});

gulp.task('copy-fonts', ['clean'], function () {
  return gulp.src('./assets/fonts/**/*')
    .pipe(gulp.dest('./dist/assets/fonts'));
});

gulp.task('copy-images', ['clean'], function () {
  return gulp.src('./assets/img/**/*')
    .pipe(gulp.dest('./dist/assets/img'));
});

gulp.task('minify-html', ['clean'], function () {
  return gulp.src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify-css', ['sass', 'clean'], function () {
  return gulp.src('./assets/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('sass', function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
});
