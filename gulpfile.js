const gulp = require('gulp');
const merge = require('gulp-merge-json');
const json5 = require('gulp-json5-to-json');
const _ = require('lodash');

function watch() {
  return gulp.watch('./src/**/*.json5', gulp.series(['compile-json']));
}

gulp.task('default', () => {
  return watch()
});

gulp.task('compile-json', () => {
  return gulp.src('./src/**/*.json5')
    .pipe(merge({
      fileName: "angular-html.tmLanguage.json",
      json5: true
    }))
    .pipe(json5({
      beautify: true,
    }))
    .pipe(gulp.dest('./syntaxes'));
});

gulp.task('watch', () => {
  return watch();
});